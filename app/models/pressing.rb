class Pressing < ApplicationRecord
    belongs_to :record
    has_many :user_pressings
end
