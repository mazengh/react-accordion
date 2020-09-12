import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';

const Trigger = memo((props) => {
  const expanded = props.expandedSections.includes(props.id);
  const ariaExpanded = expanded ? 'true' : 'false';
  const headingClasses = expanded ? "Accordion__heading expanded" : "Accordion__heading";
  return (
    <Heading className={headingClasses} level={props.level}>
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

Trigger.propTypes = {
  level: PropTypes.number,
  label: PropTypes.string,
  id: PropTypes.string,
};

Trigger.defaultProps = {
  level: 1,
  label: "heading",
  id: (props, propName, componentName) => {
    if (!props.id) {
      return new Error(`'id' prop was not specified in '${componentName}'.`);
    }
  },
};

export default Trigger;
