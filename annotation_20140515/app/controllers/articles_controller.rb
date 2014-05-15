# coding: utf-8
require 'kconv'

class ArticlesController < ApplicationController
  # GET /articles
  # GET /articles.json

  before_filter :check_logined#, :only => ['index']

  def index
    @articles = Article.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @articles }
    end
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    @article = Article.find(params[:id])
    @comment = Comment.new
    @comments = Comment.where(:article_id => @article.id)
    @anno = Annotation.where(:article_id => @article.id)
    @annotation = Annotation.new
    @annotation.article_id = @article.id
    @comment.article_id = @article.id
    gon.hoge = @article.id#.force_encoding('ASCII-8BIT')
    @user = User.all
    gon.articles = @user

    @usr = User.find(session[:usr])
    gon.usr = @usr
    @annotation.user = @usr.userid
#    gon.articles = User.all    #.to_s
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @article }
    end
  end
  
  
  def form_tag
    @annotation = Annotation.new
  end
  
  def create_line
    @annotation = Annotation.new(params[:annotation])
    if @annotation.save
      redirect_to (:back)
    else
      render action: "new"
    end
  end
  

  # GET /articles/new
  # GET /articles/new.json
  def new
    @article = Article.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @article }
    end
  end

  # GET /articles/1/edit
  def edit
    @article = Article.find(params[:id])
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(params[:article])
    
    file = params[:upfile]
    name = file.original_filename 
    #ext = name[name.rindex('.') + 1, 4].downcase
    perms = ['.jpg', '.jpeg', '.gif', '.png' ,'.pdf']

    #render :text => result
    @article.title = name
    

 #   respond_to do |format|
      if @article.save
 #       redirect_to (:back)
 
     if !perms.include?(File.extname(name).downcase)
      result = 'アップロードできません。'
#    elsif file.size > 1.megabyte
#      result = 'ファイルサイズは1MBまでです。'
    else 
      name = @article.id
#      name = name.kconv(Kconv::SJIS, Kconv::UTF8)
      File.open("app/assets/images/#{name}.pdf", 'wb') { |f| f.write(file.read) }
      result = "アップロードしました。"
    end
        redirect_to ({:action => 'index'})
 #       format.html { redirect_to @article, notice: 'Article was successfully created.' }
 #       format.json { render json: @article, status: :created, location: @article }
      else
         render action: "new"
 #       format.html { render action: "new" }
 #       format.json { render json: @article.errors, status: :unprocessable_entity }
      end
 #   end
  end


  def upload_process
    file = params[:upfile]
    name = file.original_filename 
    ext = name[name.rindex('.') + 1, 4].downcase
    perms = ['.jpg', '.jpeg', '.gif', '.png' ,'.pdf']
    if !perms.include?(File.extname(name).downcase)
      result = 'アップロードできません。'
#    elsif file.size > 1.megabyte
#      result = 'ファイルサイズは1MBまでです。'
    else 
      name = name.kconv(Kconv::SJIS, Kconv::UTF8)
      File.open("public/docs/#{name}", 'wb') { |f| f.write(file.read) }
      result = "#{name.toutf8}をアップロードしました。"
    end
    render :text => result
  end

  # PUT /articles/1
  # PUT /articles/1.json
  def update
    @article = Article.find(params[:id])

    respond_to do |format|
      if @article.update_attributes(params[:article])
        format.html { redirect_to @article, notice: 'Article was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    respond_to do |format|
      format.html { redirect_to articles_url }
      format.json { head :no_content }
    end
  end

  private
  def check_logined
    if session[:usr] then
      begin
        @usr = User.find(session[:usr])
      rescue ActiveRecord::RecordNotFound
        reset_session
      end
    end
    unless @usr
      flash[:referer] = request.fullpath
      redirect_to :controller => 'login', :action => 'index' 
    end
  end




end
