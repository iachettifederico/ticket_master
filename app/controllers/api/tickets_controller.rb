class Api::TicketsController < Api::ApiController
  def customer_tickets
    @tickets = current_customer.tickets
  end

  def customer_ticket
    ticket
  end

  def customer_ticket_comments
    @comments = ticket.comments
  end

  def agent_tickets
    @tickets = current_agent.tickets.assigned
  end

  def new_agent_tickets
    @tickets = Ticket.unassigned
  end

  def agent_ticket
    ticket
  end

  def agent_ticket_comments
    @comments = ticket.comments
  end

  def new_customer_comment
    ap "-"*50
    ap current_agent
    ap "-"*50
    @comment = Comment.create!(ticket: ticket,
                              from: current_customer,
                              body: params[:body])
  end

  def new_agent_comment
    ap "*"*50
    ap current_agent
    ap "*"*50
    @comment = Comment.create!(ticket: ticket,
                              from: current_agent,
                              body: params[:body])
  end

  def agent_take_ticket
    if ticket.assign!(current_agent)
      render json: {status: "success"}
    else
      render json: {status: "error"}
    end
  end

  def agent_resolve_ticket
    if ticket.resolve!
      render json: {status: "success"}
    else
      render json: {status: "error"}
    end
  end

  private

  def ticket
    @ticket = Ticket.find(params[:ticket_id])
  end
end
