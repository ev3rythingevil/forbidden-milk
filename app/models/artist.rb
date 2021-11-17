class Artist < ApplicationRecord
    has_many :records
    has_many :pressings, through: :records
    accepts_nested_attributes_for :records
end
