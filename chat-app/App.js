import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import MessageApp from './MessageApp'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <MessageApp />
      </Provider>
    )

  }
}

export default App;

