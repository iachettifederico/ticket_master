class Api::AccountsController < Api::ApiController
  def index
    @accounts = Account.all
  end

  def admin_toggle
    account = Account.find(params[:account_id])
    if account != Account.first
      account.toggle_role(:admin)
    end
    render json: account
  end

  def agent_toggle
    account = Account.find(params[:account_id])
    account.toggle_role(:agent)
    render json: account
  end

  def customer_toggle
    account = Account.find(params[:account_id])
    account.toggle_role(:customer)
    render json: account
  end
end
