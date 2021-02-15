import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          {this.props.errors && (
            <div
              style={{
                color: 'red',
              }}
            >
              {this.props.errors.map((error) => (
                <div key={error}>{error}</div>
              ))}
            </div>
          )}
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;