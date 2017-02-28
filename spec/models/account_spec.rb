require 'rails_helper'

RSpec.describe Account, type: :model do
  context "roles" do
    it "is an admin" do
      admin = Account.create(roles: [Role[:admin]],
                             email: "a@a.com", password: "123456")
      expect(admin.admin?).to            eql true
      expect(admin.has_role?(:admin)).to eql true
    end

    it "is an agent" do
      agent = Account.create(roles: [Role[:agent]],
                             email: "a@a.com", password: "123456")
      expect(agent.agent?).to            eql true
      expect(agent.has_role?(:agent)).to eql true
    end

    it "is an customer" do
      customer = Account.create(roles: [Role[:customer]],
                             email: "a@a.com", password: "123456")
      expect(customer.customer?).to            eql true
      expect(customer.has_role?(:customer)).to eql true
    end
  end
end
