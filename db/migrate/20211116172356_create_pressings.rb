class CreatePressings < ActiveRecord::Migration[6.1]
  def change
    create_table :pressings do |t|
      t.string :record_id
      t.integer :weight
      t.string :color
      t.string :label

      t.timestamps
    end
  end
end
