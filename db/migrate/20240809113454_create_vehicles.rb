class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :registration_number
      t.string :make
      t.string :model
      t.string :chassis_number
      t.decimal :price

      t.timestamps
    end
  end
end
