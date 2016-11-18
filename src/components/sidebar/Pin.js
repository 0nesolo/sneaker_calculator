// npm
import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import Select from 'react-select';
import { Link } from 'react-router';
import classNames from 'classnames';
import { routerMiddleware, push } from 'react-router-redux';


class SidebarPin extends React.Component {

  /**
   * constructor
   * @param props
   */
  constructor ( props ) {

    // extend props
    super( props );

  }

  /**
   * render
   */
  render () {

    const parent_class = classNames({
      results: this.props.results,
      editable: this.props.editable,
      disabledByInput: this.props.disabledByInput,
      resultsTotalCost: this.props.resultsTotalCost,
      disabledByNavigation: this.props.disabledByNavigation
    });

    return (
      <li className={parent_class}>
        <small>{this.props.text}</small>
        <span>{this.props.value}</span>
      </li>
    )

  }

}

// export sidebarpin
export default SidebarPin;