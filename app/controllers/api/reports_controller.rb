class Api::ReportsController < Api::ApiController
  def agent_reports
    @tickets = current_agent.agent_tickets.resolved.closed_last_month.reverse
    respond_to do |format|
      format.json {}
      format.pdf {
        @filename = 'closed_tickets_for_last_month.pdf'
      }
    end
  end
end
