class ChangeIdColumnsInPressingsAndRecordsToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :pressings, :record_id, :integer, using: 'record_id::integer'
    change_column :records, :artist_id, :integer, using: 'artist_id::integer'
  end
end
