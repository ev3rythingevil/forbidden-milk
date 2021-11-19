class AddImageToRecords < ActiveRecord::Migration[6.1]
  def change
    add_column :records, :image, :string
  end
end
