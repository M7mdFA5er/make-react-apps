import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
const Tab = ({ name }) => {

  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const handleMoveHighlight = (e) => {
    setHighlightStyle({ left: e.nativeEvent.layerX - 150 })
  }

  const handleHideHighlight = (e) => {
    setHighlightStyle({ left: e.nativeEvent.layerX - 150, opacity: 0 })
  }

  return (
    <div
      className="tab"
      onMouseMove={handleMoveHighlight}
      onMouseOut={handleHideHighlight}
    >
      <div className="highlight" style={highlightStyle} />
      <NavLink to={name} activeClassName="is-active">{name}</NavLink>
    </div>
  );
}

export default Tab;
