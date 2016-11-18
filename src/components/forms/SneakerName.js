// npm
import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';

class FormSneakerName extends React.Component {

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
        sneakerNameValue: '',
        sneakerCostValue: '',
        sneakerQuantityForFreeValue: '',
        sneakerQuantityForResaleValue: '',
        associatesQuantityValue: '',
        associatesPayPerHourValue: '',
        associatesHoursValue: '',
        sneakerNameHide: true,
        sneakerCostHide: true,
        sneakerQuantityForFreeHide: true,
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
      sneakerNameHide: false,
      sneakerNameValue: e.target.value
    })

  }

  /**
   * render
   */
  render () {

    const solo_field = classNames({ solo_field: true });
    const solo_input = classNames({ solo_input: true });

    return (
      <div className={solo_field}>
        <input
          type="text"
          className={solo_input}
          onChange={this.update.bind(this)}
          id={this.props.forms.sneakerNameNs}
          name={this.props.forms.sneakerNameNs}
          value={this.props.forms.sneakerNameValue}
          placeholder={this.props.forms.sneakerNamePlaceHolder}
        />
        <p>{this.props.forms.sneakerNameMessage}</p>
      </div>
    )

  }

}

export default FormSneakerName;