require 'rails_helper'

RSpec.describe Ticket, type: :model do
  let(:cust_account) { Account.create!(email:    "cust@example.com", password: "123456") }
  let(:agt_account)  { Account.create!(email:    "agt@example.com",  password: "123456") }
  let(:customer)     { Customer.create!(account: cust_account) }
  let(:agent)        { Agent.create!(account:    agt_account) }

  context "state" do
    let(:ticket)       { Ticket.create!(customer:  customer) }

    it "defaults to 'new' state" do

      expect(ticket.workflow_state).to eql "new"
    end

    it "transitions from new to assigned and assigns an agent" do
      ticket.assign!(agent)

      expect(ticket.workflow_state).to eql "assigned"
      expect(ticket.agent).to eql agent
    end

    it "transitions from assigned to resolved" do
      ticket.assign!(agent)
      ticket.resolve!

      expect(ticket.workflow_state).to eql "resolved"
      expect(ticket.agent).to eql agent
    end

    it "doesn't transition from new to resolved" do
      expect { ticket.resolve! }.to raise_error(Workflow::NoTransitionAllowed)
    end
  end

  context "finders" do
    let!(:u1) { Ticket.create!(customer: customer, workflow_state: "new") }
    let!(:u2) { Ticket.create!(customer: customer, workflow_state: "new") }
    let!(:a1) { Ticket.create!(customer: customer, workflow_state: "assigned") }
    let!(:a2) { Ticket.create!(customer: customer, workflow_state: "assigned") }
    let!(:r1) { Ticket.create!(customer: customer, workflow_state: "resolved") }
    let!(:r2) { Ticket.create!(customer: customer, workflow_state: "resolved") }

    it "returns all the unassigned tickets" do
      tickets = Ticket.unassigned

      expect(tickets.count).to eql(2)
      expect(tickets).to include(u1)
      expect(tickets).to include(u2)
    end

    it "returns all the assigned tickets" do
      tickets = Ticket.assigned

      expect(tickets.count).to eql(2)
      expect(tickets).to include(a1)
      expect(tickets).to include(a2)
    end

    it "returns all the resolved tickets" do
      tickets = Ticket.resolved

      expect(tickets.count).to eql(2)
      expect(tickets).to include(r1)
      expect(tickets).to include(r2)
    end
  end
end
