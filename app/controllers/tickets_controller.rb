class TicketsController < ApplicationController
  def index
    @tickets = current_account.current_tickets
  end
end
