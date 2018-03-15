class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :sname
      t.string :name
      t.string :bio
      t.string :avatar
      t.string :location
      t.string :school

      t.timestamps
    end
  end
end
