import React from 'react';
import { Loader } from '@8base/boost';
import { withAuth } from '@8base/auth';

class CallbackContainer extends React.Component {
  async componentDidMount() {
    const { auth, history } = this.props;
    const { idToken, email } = await auth.getAuthorizedData();

    await auth.setAuthState({
      token: idToken,
      email,
    });
    history.replace('/');
  }

  render() {
    return <Loader stretch />;
  }
}

CallbackContainer = withAuth(CallbackContainer);

export { CallbackContainer };
