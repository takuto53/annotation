class Article < ActiveRecord::Base
  attr_accessible :title
  has_many :comments
  has_many :annotations
end
