class Annotation < ActiveRecord::Base
  attr_accessible :article_id, :line, :page, :user
  belongs_to :article
end
