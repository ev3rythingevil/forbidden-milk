class ArtistRecordSerializer < ActiveModel::Serializer
  attributes :title, :year, :id, :image
end
