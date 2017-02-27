import React, { PropTypes } from 'react';

export default class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      body: ""
    };
  }
  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form method="post"
            action={"/api/" + this.props.role + "_tickets/" + this.props.ticket.id + "/comments/new.json"}>
        <div className="form-group">
          <textarea id="new-comment-body" name="body" placeholder="Type your message" className="form-control" rows="3"/>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
