class CreateAgents < ActiveRecord::Migration[5.0]
  def change
    create_table :agents do |t|
      t.integer :account_id, null: true, foreign_key: false

      t.timestamps
    end
  end
end
