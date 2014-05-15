class AddUserToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :user, :string
  end
end
