class User < ApplicationRecord
    has_secure_password
    has_many :user_pressings
    has_many :pressings, through: :user_pressings
    has_many :records, through: :pressings
    validates :username, uniqueness: { case_sensitive: false }
end
