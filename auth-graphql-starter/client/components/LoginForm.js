import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';
import AuthForm from './AuthForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }],
      })
      .then(() => hashHistory.push('/'))
      .catch((response) => {
        const errors = response.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
