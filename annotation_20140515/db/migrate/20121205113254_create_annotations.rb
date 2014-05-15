class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.text :line
      t.string :article_id

      t.timestamps
    end
  end
end
