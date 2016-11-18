// npm
import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import Select from 'react-select';
import { Link } from 'react-router';
import classNames from 'classnames';
import { routerMiddleware, push } from 'react-router-redux';


class FormAssociatesQuantity extends React.Component {

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
        associatesQuantityValue: '',
        associatesPayPerHourValue: '',
        associatesHoursValue: '',
        associatesQuantityHide: true,
        associatesPayPerHourHide: true,
        associatesHoursHide: true
      });

      // stop execution
      return false;

    }

    // update value
    this.props.update({
      associatesQuantityHide: false,
      associatesQuantityValue: val.value
    })

  }

  /**
   * render
   */
  render () {

    const solo_field = classNames({
      solo_field: true,
      hide: this.props.forms.sneakerQuantityForResaleHide
    });

    const options = _.range(0, 99).map( (x) => {
      return { value: x, label: x }
    });

    return (
      <div className={solo_field}>
        <Select
          options={options}
          onChange={this.update.bind(this)}
          id={this.props.forms.associatesQuantityNs}
          name={this.props.forms.associatesQuantityNs}
          value={this.props.forms.associatesQuantityValue}
          placeholder={this.props.forms.associatesQuantityPlaceHolder}
        />
        <p>{this.props.forms.associatesQuantityMessage}</p>
      </div>
    )

  }

}

export default FormAssociatesQuantity;