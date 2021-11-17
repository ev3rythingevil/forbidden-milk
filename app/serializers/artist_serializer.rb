class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre

  has_many :records
end
