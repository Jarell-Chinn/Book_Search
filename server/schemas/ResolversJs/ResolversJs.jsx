import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ResolversJs.styles';

class ResolversJs extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ResolversJs will mount');
  }

  componentDidMount = () => {
    console.log('ResolversJs mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ResolversJs will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ResolversJs will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ResolversJs did update');
  }

  componentWillUnmount = () => {
    console.log('ResolversJs will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ResolversJsWrapper">
        Test content
      </div>
    );
  }
}

ResolversJs.propTypes = {
  // bla: PropTypes.string,
};

ResolversJs.defaultProps = {
  // bla: 'test',
};

export default ResolversJs;
