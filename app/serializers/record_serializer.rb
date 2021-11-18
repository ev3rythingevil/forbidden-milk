class RecordSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :title, :year

  belongs_to :artist
end
