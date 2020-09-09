import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Heading = memo((props) => {
  return React.createElement(`h${props.level}`, {
    children: props.children,
    ...{ ...props, level: null },
  });
});

Heading.propTypes = {
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
