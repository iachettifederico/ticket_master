import React, { PropTypes } from 'react';

export default class NewTicket extends React.Component {
  submit(e) {
    e.preventDefault();
    $("#open-ticket-form").submit();
  }
  render() {
    return (
      <div>
        <h3>Open a new ticket</h3>
        <form id="open-ticket-form" method="post"
              action={"/api/tickets/open.json"}>
          <input type="hidden" name="token"
                 value={this.props.route.auth_token} />

          <div className="form-group">
            <input type="text" className="form-control"
                   id="new-ticket-title" name="ticket[title]"
                   placeholder="Add a short title" />

            <textarea id="new-comment-body" className="form-control"
                      name="ticket[description]" rows="10"
                      placeholder="Describe the problem in as much detail as possible"/>

            <button type="submit" className="btn btn-primary"
                    onClick={(e)=>{this.submit(e);}}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
