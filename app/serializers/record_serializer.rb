class RecordSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :title, :year, :image

  belongs_to :artist
end
