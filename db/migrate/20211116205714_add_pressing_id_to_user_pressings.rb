class AddPressingIdToUserPressings < ActiveRecord::Migration[6.1]
  def change
    add_column :user_pressings, :pressing_id, :integer
  end
end
