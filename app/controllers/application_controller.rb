class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_customer
    current_account.customer
  end

  def current_agent
    current_account.agent
  end
end
