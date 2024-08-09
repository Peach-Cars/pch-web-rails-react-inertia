# == Schema Information
#
# Table name: vehicles
#
#  id                  :integer          not null, primary key
#  registration_number :string
#  make                :string
#  model               :string
#  chassis_number      :string
#  price               :decimal(, )
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Vehicle < ApplicationRecord
end
