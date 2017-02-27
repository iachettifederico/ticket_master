class Api::AccountsController < Api::ApiController
  def index
    @accounts = Account.all
  end

  # post "api/accounts/:account_id/:role/toggle.json" => "api/accounts#update"
  def admin_toggle
    account = Account.find(params[:account_id])
    if account != Account.first
      account.update_attributes(admin: !account.admin)
    end
    render json: account
  end

  def customer_toggle
    account = Account.find(params[:account_id])
    customer = account.customer
    if customer
      customer.destroy!
    else
      account.update_attributes(customer: Customer.create!(account: account))
    end
    render json: account
  end


  def agent_toggle
    account = Account.find(params[:account_id])
    agent = account.agent
    if agent
      agent.destroy!
    else
      account.update_attributes(agent: Agent.create!(account: account))
    end
    render json: account
    
  end
end
