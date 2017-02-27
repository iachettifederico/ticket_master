require "request_helper"

RSpec.describe "Dashboard Requests", type: :request do
  include RequestSpecHelper

  context "Customer Dashboard" do
    it "renders the CustomerDashboard component" do
      account = Account.create!(email: "cust@example.com", password: "123456")
      customer = Customer.create!(account: account)

      sign_in account
      get "/dashboard/customer"


      expect(response.body).to include("CustomerDashboard")
      expect(response.body).to include("cust@example.com")
    end
  end

  context "Agent Dashboard" do
    it "renders the AgentDashboard component" do
      account = Account.create!(email: "agt@example.com", password: "123456")
      customer = Agent.create!(account: account)

      sign_in account
      get "/dashboard/agent"


      expect(response.body).to include("AgentDashboard")
      expect(response.body).to include("agt@example.com")
    end
  end
end
