import React, { PropTypes } from 'react';
import { ButtonLink, Button } from '../Bootstrap';
import NewComment from '../NewComment';
import { isEqual } from 'underscore';
import { State } from '../State';

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ticket: this.props.ticket };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ ticket: nextProps.ticket });
  }

  render() {
    return (
      <div>
        <h3>
          <State state={this.state.ticket.state}/> {this.state.ticket.title}
        </h3>
        <div className="well">
          {this.state.ticket.description}
        </div>
        <div>
          <CommentListContainer ticket={this.state.ticket}
                                auth_token={this.props.auth_token}/>

        </div>
        <ButtonLink text="Back" to="/tickets" type="primary"/>
      </div>
    );
  }
}

export class CommentListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  fetchComments(){
    if(this.props.ticket && this.props.ticket.id) {
      let url = '/api/tickets/'+ this.props.ticket.id + '/comments.json?token='+this.props.auth_token;

      $.get(url).done((comments) => {
        this.setState({comments: comments});
      });
    }

  }

  componentDidMount() {
    this.fetchComments();
    setInterval(() => {
      this.fetchComments();
    }, 3000);
  }

  render() {
    return (
      <div>
        <h4>Comments</h4>
        <div className="container">
          <div className="well">
            {
              (this.state.comments || []).map((comment) => {
                return <Comment comment={comment}
                                  key={"comment-" + comment.id}/>;
              })
            }
          </div>
          <NewComment ticket={this.props.ticket}
                      auth_token={this.props.auth_token}/>
        </div>
      </div>
    );
  }

}

export class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comment: this.props.comment };
  }

  render() {
    const comment = this.state.comment;
    return (
      <div id={"comment-row-" + comment.id}>
        <b>{comment.from.name}:</b> {comment.body}
        <hr/>
      </div>
    );
  }
}
