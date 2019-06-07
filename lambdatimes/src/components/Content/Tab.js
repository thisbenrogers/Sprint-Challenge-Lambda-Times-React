import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tab = props => {

  const Tab = styled.div`
  `;

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <Tab
      className={props.tab !== props.selectedTab ? 'tab' : 'tab active-tab'}
      onClick={event => props.selectTabHandler(props.tab)}
    /* Replace this dummy click handler function with your selectTabHandler function from props 
     you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tab.toUpperCase()}
    </Tab>
  );
};

Tab.propTypes = {
  tab: PropTypes.string
}

// Make sure you include PropTypes on your props.

export default Tab;
