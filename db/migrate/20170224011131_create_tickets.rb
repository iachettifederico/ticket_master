class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.references :customer,   foreign_key: true
      t.references :agent,      foreign_key: true
      t.text   :title,          null: false
      t.text   :description,    null: false
      t.string :workflow_state, default: "new"

      t.timestamps
    end
  end
end
