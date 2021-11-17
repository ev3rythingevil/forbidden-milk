class Pressing < ApplicationRecord
    belongs_to :record
    has_many :user_pressings
    accepts_nested_attributes_for :user_pressings

end
