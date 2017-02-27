class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.references :customer, null: false, foreign_key: true
      t.references :agent
      t.string :title
      t.text :description
      t.string :workflow_state, null: false, default: "new"

      t.timestamps
    end
  end
end
