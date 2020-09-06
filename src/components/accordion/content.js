import React, { memo } from 'react';

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

export default memo(Content);
