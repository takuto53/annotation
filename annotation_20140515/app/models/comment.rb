class Comment < ActiveRecord::Base
  attr_accessible :article_id, :comment, :p_id, :user_id, :x, :y, :page
  belongs_to :article
  belongs_to :user
end
