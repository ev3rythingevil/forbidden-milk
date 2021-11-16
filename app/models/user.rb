class User < ApplicationRecord
    has_secure_password
    has_many :user_pressings
    validates :username, uniqueness: { case_sensitive: false }
end
