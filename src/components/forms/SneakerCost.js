// npm
import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import MaskedInput from 'react-maskedinput';


class FormSneakerCost extends React.Component {

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
        sneakerCostValue: '',
        sneakerQuantityForFreeValue: '',
        sneakerQuantityForResaleValue: '',
        associatesQuantityValue: '',
        associatesPayPerHourValue: '',
        associatesHoursValue: '',
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
      sneakerCostHide: false,
      sneakerCostValue: e.target.value.replace('$', '')
    });

  }

  /**
   * render
   */
  render () {

    const solo_field = classNames({
      solo_field: true,
      hide: this.props.forms.sneakerNameHide
    });

    const solo_input = classNames({ solo_input: true });

    return (
      <div className={solo_field}>
        <MaskedInput
          mask="$111.11"
          className={solo_input}
          onChange={this.update.bind(this)}
          id={this.props.forms.sneakerCostNs}
          name={this.props.forms.sneakerCostNs}
          value={this.props.forms.sneakerCostValue}
          placeholder={this.props.forms.sneakerCostPlaceHolder}
        />
        <p>{this.props.forms.sneakerCostMessage}</p>
      </div>
    )

  }

}

export default FormSneakerCost;