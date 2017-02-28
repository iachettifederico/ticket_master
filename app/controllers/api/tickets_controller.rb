class Api::TicketsController < Api::ApiController
  def create
    ticket = Ticket.create!(customer:    current_customer,
                            title:       new_ticket_params[:title],
                            description: new_ticket_params[:description])
    if ticket
      redirect_to "/dashboard/customer/#/tickets/#{ticket.id}"
    else
      render json: {status: :error}
    end
  end

  def customer_tickets
    @tickets = current_customer.customer_tickets
  end

  def customer_ticket
    ticket
  end

  def ticket_comments
    @comments = ticket.comments
  end

  def agent_tickets
    @tickets = current_agent.agent_tickets.assigned
  end

  def new_agent_tickets
    @tickets = Ticket.unassigned
  end

  def agent_ticket
    ticket
  end

  def ticket_comments
    @comments = ticket.comments
  end

  def new_comment
    @comment = Comment.create!(ticket: ticket,
                              account: current_account,
                              body: params[:body])
  end

  def agent_take_ticket
    if ticket.assign!(current_agent)
      redirect_to "/dashboard/agent#/tickets/#{ticket.id}"
    else
      render json: {status: "error"}
    end
  end

  def agent_resolve_ticket
    if ticket.resolve!
      redirect_to "/dashboard/agent#/tickets/#{ticket.id}"
    else
      render json: {status: "error"}
    end
  end

  private

  def ticket
    @ticket = Ticket.find(params[:ticket_id])
  end

  def new_ticket_params
    params.require(:ticket).permit(:title, :description)
  end
end
