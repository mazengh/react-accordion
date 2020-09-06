import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading';

const trigger = memo((props) => {
  const expanded = props.expandedSections.includes(props.id);
  const ariaExpanded = expanded ? 'true' : 'false';
  return (
    <Heading level={props.level}>
      <button
        id={props.id}
        aria-controls={props.ariaControls}
        aria-expanded={ariaExpanded}
        onClick={() => props.handleToggle(props.id)}
        onFocus={() => props.handleFocus(props.id)}
      >
        {props.label}
      </button>
    </Heading>
  );
});

trigger.propTypes = {
  level: PropTypes.number,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default trigger;
