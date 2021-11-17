class PressingSerializer < ActiveModel::Serializer
  attributes :id, :record_id, :weight, :color, :label

  has_many :user_pressings
end
