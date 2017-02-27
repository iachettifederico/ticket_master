class Api::ApiController < ApplicationController
  before_action :authenticate_account!
  skip_before_action :verify_authenticity_token

  private

  def api_authenticate!
    if true

    else
      render json: {error: "You need to sign in or sign up before continuing."}
    end
  end
end
