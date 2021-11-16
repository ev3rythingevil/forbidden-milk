class Artist < ApplicationRecord
    has_many :records
    has_many :pressings, through: :records
end
