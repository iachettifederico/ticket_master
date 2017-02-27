class CreateCustomers < ActiveRecord::Migration[5.0]
  def change
    create_table :customers do |t|
      t.references :account, null: true, foreign_key: false

      t.timestamps
    end
  end
end
