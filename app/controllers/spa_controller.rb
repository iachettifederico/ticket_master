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

  def props
    @props ||= {
                account:     current_account.to_h,
                admin_email: Account.admins.first.email,
                auth_token:  current_account.auth_token
               }
  end

end
