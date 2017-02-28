class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_customer
    current_account if current_account.has_role?(:customer)
  end

  def current_agent
    current_account if current_account.has_role?(:agent)
  end

  def current_admin
    current_account if current_account.has_role?(:admin)
  end
end
