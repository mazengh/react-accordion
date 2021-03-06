import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Accordion.css';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedSections: [],
      headingIds: [],
      focusedHeadingId: '',
    };

    this.keyHandlers = {
      ArrowUp: this.handleArrows,
      ArrowDown: this.handleArrows,
      Home: this.handleHomeAndEnd,
      End: this.handleHomeAndEnd,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.expandedSections !== nextState.expandedSections) {
      return true;
    }
    return false;
  }

  addSectionId = (id) => {
    this.setState((prevState) => {
      return { headingIds: [...prevState.headingIds, id] };
    });
  };

  getExpandableSections = (sectionId) => {
    const { expandedSections } = this.state;
    if (!this.props.allowMultiple) {
      return expandedSections.filter((sectId) => sectionId === sectId);
    }
    return expandedSections.slice();
  };

  handleToggle = (sectionId) => {
    let expandables = this.getExpandableSections(sectionId);

    if (expandables.includes(sectionId)) {
      expandables.splice(expandables.indexOf(sectionId), 1);
    } else {
      expandables.push(sectionId);
    }

    this.setState({
      expandedSections: expandables,
    });
  };

  handleArrows = (key) => {
    const direction = key === 'ArrowDown' ? 1 : -1;
    const { length } = this.state.headingIds;
    const index = this.state.headingIds.indexOf(this.state.focusedHeadingId);
    const newIndex = (index + length + direction) % length;
    return this.state.headingIds[newIndex];
  };
  handleHomeAndEnd = (key) => {
    return key === 'Home'
      ? this.state.headingIds[0]
      : this.state.headingIds[this.state.headingIds.length - 1];
  };

  handleKeys = (event) => {
    if (!this.state.headingIds.includes(event.target.id)) return;
    const { key } = event;
    const handler = this.keyHandlers[key];
    if (handler) {
      const idOfElementToFocus = handler(key);
      const elementToFocus = document.getElementById(idOfElementToFocus);
      if (elementToFocus) elementToFocus.focus();
      event.preventDefault();
    }
  };

  handleFocus = (headingId) => {
    this.setState({
      focusedHeadingId: headingId,
    });
  };

  render() {
    const { level } = this.props;
    const { expandedSections } = this.state;
    const { addSectionId, handleToggle, handleFocus, handleKeys } = this;
    const accordionClasses = 'Accordion ' + (this.props.classes ? this.props.classes : '');
    return (
      <div className={accordionClasses} onKeyDown={handleKeys}>
        {this.props.children({ level, expandedSections, addSectionId, handleToggle, handleFocus })}
      </div>
    );
  }
}

Accordion.propTypes = {
  allowMultiple: PropTypes.bool,
  level: PropTypes.number,
};

Accordion.defaultProps = {
  allowMultiple: false,
  level: 1,
};

export default Accordion;
