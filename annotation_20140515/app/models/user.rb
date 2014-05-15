class User < ActiveRecord::Base
  attr_accessible :name, :userid, :password  #:password_confirmation
  has_many :comments

  def self.authenticate(userid, password)
    where(:userid => userid,
      :password => Digest::SHA1.hexdigest(password)).first
  end


end
