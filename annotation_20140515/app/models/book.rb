class Book < ActiveRecord::Base
  attr_accessible :isbn, :price, :title
end
