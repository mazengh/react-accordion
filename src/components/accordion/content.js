import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const contentStyle = {
    display: props.expanded ? "block" : "none" ,
    border: '1px solid white'
  };

  return (
      <div id={props.sectionId} style={contentStyle} role="region" aria-labelledby={props.triggerId}>
      {props.children}
    </div>
  );
};


Content.propTypes = {
  expanded: PropTypes.bool,
  sectionId: PropTypes.string,
  triggerId: PropTypes.string,
};

Content.defaultProps = {
  level: 1,
  label: "heading",
  id: (props, propName, componentName) => {
    if (!props.id) {
      return new Error(`'id' prop was not specified in '${componentName}'.`);
    }
  },
};

export default memo(Content);
