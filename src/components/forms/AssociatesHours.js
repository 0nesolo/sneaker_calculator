// npm
import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import Select from 'react-select';
import { Link } from 'react-router';
import classNames from 'classnames';
import { routerMiddleware, push } from 'react-router-redux';


class FormAssociatesHours extends React.Component {

  /**
   * constructor
   * @param props
   */
  constructor ( props ) {

    // extend props
    super( props );

  }

  /**
   * update
   * @param {Object} val
   */
  update ( val ) {

    // if value
    if ( !val.value ) {

      this.props.update({
        associatesHoursValue: '',
        associatesHoursHide: true
      });

      // stop execution
      return false;

    }

    // update value
    this.props.update({
      associatesHoursHide: false,
      associatesHoursValue: val.value
    })

  }

  /**
   * render
   */
  render () {

    const solo_field = classNames({
      solo_field: true,
      hide: this.props.forms.associatesPayPerHourHide
    });

    const options = _.range(0, 99).map( (x) => {
      return { value: x, label: x }
    });

    return (
      <div className={solo_field}>
        <Select
          options={options}
          onChange={this.update.bind(this)}
          id={this.props.forms.associatesHoursNs}
          name={this.props.forms.associatesHoursNs}
          value={this.props.forms.associatesHoursValue}
          placeholder={this.props.forms.associatesHoursPlaceHolder}
        />
        <p>{this.props.forms.associatesHoursMessage}</p>
      </div>
    )

  }

}

export default FormAssociatesHours;