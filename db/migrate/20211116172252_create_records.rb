class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.string :artist_id
      t.string :title
      t.string :year

      t.timestamps
    end
  end
end
