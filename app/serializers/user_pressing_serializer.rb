class UserPressingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :pressing_id

  belongs_to :user
  belongs_to :pressing
  belongs_to :record
end
