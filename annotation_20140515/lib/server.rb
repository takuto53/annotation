#coding:utf-8
require 'em-websocket'
require 'rubygems'  # Ruby 1.8 対応のため rubygems を require しているが Ruby 1.9 では不要である
require 'mysql'
require 'json'

@sql = Mysql::new("127.0.0.1", "root", "root", "development")

Process.daemon(nochdir=true) if ARGV[0] == "-D"
connections = Array.new

EventMachine::WebSocket.start(:host => "0.0.0.0", :port => 51234) do |ws|
  ws.onopen {
    puts "OK."
    connections.push(ws) unless connections.index(ws)
  }
  ws.onmessage { |msg|
#    puts "received "+msg
#    ws.send msg #to myself

    msg_s = msg.split(/#WS#/)
    
    if msg_s[0] == "LINE"
      puts "received "+msg_s[1]
      ws.send msg_s[1] #to myself
      connections.each {|con| #to other people
        con.send(msg_s[1]) unless con == ws
      }
      
      
    elsif msg_s[0] == "COMM"
      day = Time.now
      puts "received " + "msg_s[2]:" + msg_s[2] + ", msg_s[3]:" + msg_s[3] + ", msg_s[4]"+ msg_s[4]
      @sql.query("insert into comments ( x, y, comment, p_id, user_id, article_id, created_at, updated_at, page ) values ( #{msg_s[1]}, #{msg_s[2]}, '#{msg_s[3]}', '#{msg_s[4]}', '#{msg_s[5]}', #{msg_s[6]}, '#{Time.now.strftime("%Y-%m-%d %H:%M:%S")}', '#{Time.now.strftime("%Y-%m-%d %H:%M:%S")}', #{msg_s[7]} );")
      test = {:cid => @sql.insert_id} #DBに書き込んだコメントに割り振られたidを取得し、ハッシュtestのシンボルcidに格納
      puts "submited!"
      puts msg_s[8] + test.to_json
      ws.send test.to_json #to myself
      ws.send msg_s[8] #to myself
      connections.each {|con| #to other people
        con.send(test.to_json) unless con == ws
        con.send(msg_s[8]) unless con == ws
      }
      
      
    elsif msg_s[0] == "SAVE"
      day = Time.now
      puts "received " + "article_id:" + msg_s[2] + ", page:" + msg_s[3] + ", user:"+ msg_s[4]
      @sql.query("insert into annotations ( line, article_id, created_at, updated_at, page, user ) values ( '#{msg_s[1]}', #{msg_s[2]}, '#{Time.now.strftime("%Y-%m-%d %H:%M:%S")}', '#{Time.now.strftime("%Y-%m-%d %H:%M:%S")}', #{msg_s[3]}, '#{msg_s[4]}' );")
      puts "saved!"
      
    end
  }
  ws.onclose   { puts "close..." }
end
