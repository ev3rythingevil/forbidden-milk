class UserPressing < ApplicationRecord
    belongs_to :user
    belongs_to :pressing
    has_one :record, through: :pressing
end
