class RecordSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :title, :year

  has_many :pressings
  has_many :user_pressings
end
