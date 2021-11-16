class Record < ApplicationRecord
    belongs_to :artist
    has_many :pressings
end
