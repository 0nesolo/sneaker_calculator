// npm
import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import Select from 'react-select';
import { Link } from 'react-router';
import classNames from 'classnames';
import { routerMiddleware, push } from 'react-router-redux';


class FormSneakerQuantityForResale extends React.Component {

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
        sneakerQuantityForResaleValue: '',
        associatesQuantityValue: '',
        associatesPayPerHourValue: '',
        associatesHoursValue: '',
        sneakerQuantityForResaleHide: true,
        associatesQuantityHide: true,
        associatesPayPerHourHide: true,
        associatesHoursHide: true
      });

      // stop execution
      return false;

    }

    // update value
    this.props.update({
      sneakerQuantityForResaleHide: false,
      sneakerQuantityForResaleValue: val.value
    })

  }

  /**
   * render
   */
  render () {

    const solo_field = classNames({
      solo_field: true,
      hide: this.props.forms.sneakerQuantityForFreeHide
    });

    const options = _.range(0, 99).map( (x) => {
      return { value: x, label: x }
    });

    return (
      <div className={solo_field}>
        <Select
          options={options}
          onChange={this.update.bind(this)}
          id={this.props.forms.sneakerQuantityForResaleNs}
          name={this.props.forms.sneakerQuantityForResaleNs}
          value={this.props.forms.sneakerQuantityForResaleValue}
          placeholder={this.props.forms.sneakerQuantityForResalePlaceHolder}
        />
        <p>{this.props.forms.sneakerQuantityForResaleMessage}</p>
      </div>
    )

  }

}

export default FormSneakerQuantityForResale;