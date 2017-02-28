class Api::ApiController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action :api_authenticate!

  private
  def api_authenticate!
    unless params[:token] && params[:token] == current_account.auth_token
      render(json: {message: "403 Forbidden"}, status: 403)
    end
  end
end
