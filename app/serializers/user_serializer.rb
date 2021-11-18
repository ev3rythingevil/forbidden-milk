class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :user_pressings
  has_many :pressings
  has_many :records
end
