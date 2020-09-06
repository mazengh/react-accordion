import React, { useState, useEffect } from 'react';
import nextId from 'react-id-generator';

import Trigger from './trigger';
import Content from './content';
// import PropTypes from 'prop-types';

const Section = (props) => {
  const id = nextId();
  const [accordionId] = useState(`accordion-${id}`);
  const [sectionId] = useState(`accordion-section-${id}`);
  const expanded = props.expandedSections.includes(accordionId);

  useEffect(() => {
    props.addSectionId(accordionId);
  });

  return (
    <React.Fragment>
      <Trigger id={accordionId} ariaControls={sectionId} {...props}></Trigger>
      <Content sectionId={sectionId} expanded={expanded} triggerId={accordionId}>
        {props.children}
      </Content>
    </React.Fragment>
  );
};

// section.propTypes = {

// };

export default Section;
