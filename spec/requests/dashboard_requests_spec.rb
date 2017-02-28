require "request_helper"

RSpec.describe "Dashboard Requests", type: :request do
  include RequestSpecHelper

  context "Customer Dashboard" do
    it "renders the CustomerDashboard component" do
      customer = Account.create!(email: "cust@example.com", password: "123456")

      sign_in customer
      get "/dashboard/customer"

      expect(response.body).to include("CustomerDashboard")
      expect(response.body).to include("cust@example.com")
    end
  end

  context "Agent Dashboard" do
    it "renders the AgentDashboard component" do
      agent = Account.create!(email: "agt@example.com", password: "123456")

      sign_in agent
      get "/dashboard/agent"

      expect(response.body).to include("AgentDashboard")
      expect(response.body).to include("agt@example.com")
    end
  end

  context "Admin Dashboard" do
    it "renders the AdminDashboard component" do
      admin = Account.create!(email: "admin@example.com", password: "123456")

      sign_in admin
      get "/dashboard/admin"

      expect(response.body).to include("AdminDashboard")
      expect(response.body).to include("admin@example.com")
    end
  end
end
