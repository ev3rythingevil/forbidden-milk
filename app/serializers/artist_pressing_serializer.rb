class ArtistPressingSerializer < ActiveModel::Serializer
  attributes :id, :weight, :color, :label, :record_id
end
