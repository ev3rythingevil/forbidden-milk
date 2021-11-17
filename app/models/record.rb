class Record < ApplicationRecord
    belongs_to :artist
    has_many :pressings
    has_many :user_pressings, through: :pressings
    accepts_nested_attributes_for :pressings
end
