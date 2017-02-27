class SpaController < ApplicationController
  before_action :authenticate_account!

  def dashboard
    render "dashboard", locals: { props: props }
  end

  def customer
    render "customer", locals: { props: props }
  end

  def agent
    render "agent", locals: { props: props }
  end

  def admin
    render "admin", locals: { props: props }
  end

  private

  def account
    @account ||= Mystique.present(current_account)
  end

  def props
    @props ||= { account: account.to_h }
  end

end
