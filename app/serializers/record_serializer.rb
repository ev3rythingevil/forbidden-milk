class RecordSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :title, :year
end
