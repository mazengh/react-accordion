import React, { memo } from 'react';
import PropTypes from 'prop-types';

const heading = memo((props) => {
  return React.createElement(`h${props.level}`, {
    children: props.children,
    ...{ ...props, level: null },
  });
});

heading.propTypes = {
  level: PropTypes.number,
};

export default heading;
