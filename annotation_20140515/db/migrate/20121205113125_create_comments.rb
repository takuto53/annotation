class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :x
      t.integer :y
      t.text :comment
      t.string :p_id
      t.string :user_id
      t.string :article_id

      t.timestamps
    end
  end
end
