class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body
      t.references :account
      t.references :ticket

      t.timestamps
    end
  end
end
