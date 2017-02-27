require 'spec_helper'
require "./app/models/accountable"

RSpec.describe Accountable do
  context "in this context" do
    AccountableThing = Struct.new(:account) do
      include Accountable
    end

    it "forwards email to the account" do
      account = OpenStruct.new(email: "account@example.com")

      thing = AccountableThing.new(account)

      expect(thing.email).to eql("account@example.com")
    end

    it "forwards name to the account" do
      account = OpenStruct.new(name: "account")

      thing = AccountableThing.new(account)

      expect(thing.name).to eql("account")
    end

    it "name defaults to email" do
      account = OpenStruct.new(email: "account@example.com")

      thing = AccountableThing.new(account)

      expect(thing.name).to eql("account@example.com")
    end
  end

  context "role" do
    it "the role is the class name downcased" do
      account = OpenStruct.new(email: "account@example.com")

      thing = AccountableThing.new(account)

      expect(thing.role).to eql("accountable_thing")
    end
  end
end
