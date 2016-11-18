// npm
import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import MaskedInput from 'react-maskedinput';


class FormAssociatesPayPerHour extends React.Component {

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
   * @param {Object} e
   */
  update ( e ) {

    // if value
    if ( !e.target.value ) {

      this.props.update({
        associatesPayPerHourValue: '',
        associatesHoursValue: '',
        associatesPayPerHourHide: true,
        associatesHoursHide: true
      });

      // stop execution
      return false;

    }

    // update value
    this.props.update({
      associatesPayPerHourHide: false,
      associatesPayPerHourValue: e.target.value.replace('$', '')
    });

  }

  /**
   * render
   */
  render () {

    const solo_field = classNames({
      solo_field: true,
      hide: this.props.forms.associatesQuantityHide
    });

    const solo_input = classNames({ solo_input: true });

    return (
      <div className={solo_field}>
        <MaskedInput
          mask="$1.11"
          className={solo_input}
          onChange={this.update.bind(this)}
          id={this.props.forms.associatesPayPerHourNs}
          name={this.props.forms.associatesPayPerHourNs}
          value={this.props.forms.associatesPayPerHourValue}
          placeholder={this.props.forms.associatesPayPerHourPlaceHolder}
        />
        <p>{this.props.forms.associatesPayPerHourMessage}</p>
      </div>
    )

  }

}

export default FormAssociatesPayPerHour;