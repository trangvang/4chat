import React from 'react';
import AppStackNavigator from './Navigator/AppStackNavigator';
import { connect } from 'react-redux';
import mapDispatchToProps from './redux/actions.js';

class MessageApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.connect();
  }

  render() {
    return (
      <AppStackNavigator {...this.props} />
    )
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageApp);

