// npm
import React from 'react';
import URL from 'url-parse';
import ReactGA from 'react-ga';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

// imports
import store from '../stores/configureStore';
import openletter from '../../content/letter.json';
import SidebarPin from '../components/sidebar/Pin';

class Sidebar extends React.Component {

  /**
   * constructor
   * @param {Object} props
   */
  constructor ( props ) {

    // extend
    super( props );

  }

  hideResults ( e ) {

    e.preventDefault();

    if ( !this.props.forms.hideResults ) {

      this.props.update({
        hideResults: true
      });

      ReactGA.event({
        category: 'Buttons',
        action: 'clicked',
        label: 'hide_results'
      });

      // stop execution
      return false;

    }

    this.props.update({
      hideResults: false
    });

    ReactGA.event({
      category: 'Buttons',
      action: 'clicked',
      label: 'show_results'
    });

  }

  /**
   * render
   */
  render () {

    // update text for results
    const hideResultsValue = ( this.props.forms.hideResults ? this.props.forms.showResultsText : this.props.forms.hideResultsText );

    return (
      <aside className="solo_sidebar">
        <ul>

          <SidebarPin
            editable={true}
            text={this.props.forms.sneakerNameText}
            value={this.props.forms.sneakerNameValue}
            disabledByNavigation={this.props.forms.hideResults}
          />

          <SidebarPin
            editable={true}
            text={this.props.forms.sneakerCostText}
            value={`$${this.props.forms.sneakerCostValue}`}
            disabledByInput={this.props.forms.sneakerNameHide}
            disabledByNavigation={this.props.forms.hideResults}
          />

          <SidebarPin
            editable={true}
            text={this.props.forms.sneakerQuantityForFreeText}
            value={this.props.forms.sneakerQuantityForFreeValue}
            disabledByInput={this.props.forms.sneakerCostHide}
            disabledByNavigation={this.props.forms.hideResults}
          />

          <SidebarPin
            results={true}
            disabledByNavigation={this.props.forms.hideResults}
            disabledByInput={this.props.forms.sneakerQuantityForResaleHide}
            text={this.props.forms.sneakersCostForFreeText}
            value={this.props.forms.sneakersCostForFreeValue}
          />

          <SidebarPin
            editable={true}
            text={this.props.forms.sneakerQuantityForResaleText}
            value={this.props.forms.sneakerQuantityForResaleValue}
            disabledByInput={this.props.forms.sneakerQuantityForFreeHide}
            disabledByNavigation={this.props.forms.hideResults}
          />

          <SidebarPin
            results={true}
            disabledByNavigation={this.props.forms.hideResults}
            disabledByInput={this.props.forms.sneakerQuantityForResaleHide}
            text={this.props.forms.sneakersCostForResaleText}
            value={this.props.forms.sneakersCostForResaleValue}
          />

          <SidebarPin
            results={true}
            disabledByNavigation={this.props.forms.hideResults}
            disabledByInput={this.props.forms.sneakerQuantityForResaleHide}
            text={this.props.forms.totalCostText}
            value={this.props.forms.totalCostValue}
          />

          <SidebarPin
            results={true}
            resultsTotalCost={true}
            disabledByNavigation={this.props.forms.hideResults}
            text={this.props.forms.sneakersResaleAverageText}
            value={this.props.forms.sneakersResaleAverageValue}
          />

          <li className="toggle" onClick={this.hideResults.bind(this)}>
            <a href="#">{hideResultsValue}</a>
          </li>

        </ul>
      </aside>
    )
  }

}

// export sidebar
export default Sidebar;