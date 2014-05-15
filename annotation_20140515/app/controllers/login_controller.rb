#coding: utf-8

class LoginController < ApplicationController

  def auth
    usr = User.authenticate(params[:userid], params[:password])
    if usr then
      session[:usr] = usr.id
      redirect_to :action => "index", :controller => "articles"
    #  redirect_to params[:referer] #大塚さんに変更してもらったところ
    else
      flash.now[:referer] = params[:referer]
      @error = 'ユーザ名／パスワードが間違っています。'
      render 'index'
    end
  end
 

  def logout
    reset_session
    redirect_to root_path
  end




end
