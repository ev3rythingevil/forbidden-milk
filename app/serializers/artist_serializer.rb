class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre

  has_many :pressings, serializer: ArtistPressingSerializer
  has_many :records, serializer: ArtistRecordSerializer

end
