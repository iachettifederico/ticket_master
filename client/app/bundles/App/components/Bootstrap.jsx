import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

export class Well extends React.Component {
  render() {
    return (
      <div className='well'>
        {this.props.children}
      </div>
    );
  }
}

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: !!this.props.active
    };
  }

  active() {
    return !!this.props.active;
  }

  menuItemClasses(){
    return classNames({
      active: this.state.active
    });
  }

  render() {
    return (
      <li className={ this.menuItemClasses() }>
        {this.props.children}
      </li>
    );
  }
}

export class Separator extends React.Component {
  render() {
    return (
      <li role="separator" className="divider"></li>
    );
  }
}

export class NavBar extends React.Component {
  navBarClasses() {
    return classNames(
      "navbar",
      "navbar-default",
      {
        "navbar-inverse": !!this.props.inverse
      }
    );
  }

  render() {
    return (
      <nav className={this.navBarClasses()}>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </nav>
    );
  }
}

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    };
  }

  navClasses() {
    return classNames(
      "nav navbar-nav",
      {
        "navbar-right": !!this.props.pullRight,
        "navbar-left":  !!this.props.pullLeft
      }
    );
  }
  render() {
    return (
      <ul className={this.navClasses()}>
        {this.props.children}
      </ul>
    );
  }
}

export class NavBarCollapse extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        {this.props.children}
      </div>
    );
  }
}


export class Dropdown extends React.Component {
  itemClasses() {
    return classNames(
      "dropdown-toggle",
      {"navbar-right": !!this.props.pullRight}
    );
  }
  render() {
    return (
      <li className="dropdown">
        <a href="#" className={this.itemClasses()} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.title || "Dropdown"} <span className="caret"></span></a>
        <ul className="dropdown-menu">
          {this.props.children}
        </ul>
      </li>
    );
  }
}

export class NavBarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    };
  }

  render() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">{ this.props.children }</a>
      </div>
    );
  }
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      to:      this.props.to || "/",
      onClick: this.props.onClick || this.defaultClickHandler
    };
  }

  handleClick(e) {
    this.state.onClick(e);
    e.preventDefault();
  }

  defaultClickHandler(e) { }

  buttonClasses() {
    return classNames(
      "btn",
      "btn-" + (this.props.type || "default")
    );
  }

  render() {
    return (
      <button className={this.buttonClasses()} onClick={this.handleClick}>
        {this.props.text || this.props.children}
      </button>
    );
  }
}

export class ButtonLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to:      this.props.to || "/",
      onClick: this.props.onClick || this.defaultClickHandler
    };
  }

  buttonLinkClasses() {
    return classNames(
      "btn",
      "btn-" + (this.props.type || "default")
    );
  }

  render() {
    return (
      <Link to={this.state.to} className={this.buttonLinkClasses()}>
        {this.props.text || this.props.children}
      </Link>
    );
  }
}

export class ButtonGroup extends React.Component {
  buttonGroupClasses() {
    return classNames(
      "btn-group",
      "btn-group-" + (this.props.size || ""),
      {"btn-group-vertical": !!this.props.vertical},
      {"btn-group-justified": !!this.props.justified}
    );
  }

  render() {
    return (
      <div className={this.buttonGroupClasses()}>
        {this.props.children}
      </div>
    );
  }
}


export class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type || "default"
    };
  }

  labelClasses(){
    return classNames(
      "label",
      "label-" + this.props.type
    );
  }

  render() {
    return (
      <span className={ this.labelClasses() }>
        {this.props.children}
      </span>
    );
  }
}
