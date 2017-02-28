class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_customer
    present(current_account) if current_account.has_role?(:customer)
  end

  def current_agent
    present(current_account) if current_account.has_role?(:agent)
  end

  def current_admin
    present(current_account) if current_account.has_role?(:admin)
  end


  def present(*args, &block)
    Mystique.present(*args, &block)
  end

  def present_collection(*args, &block)
    Mystique.present_collection(*args, &block)
  end
end
