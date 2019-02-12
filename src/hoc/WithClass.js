import React from 'react';

// Use this HOC approach where wrapping is primarily
// concerned with JSX as it is more explicit in client code
const withClass = props => (
    <div className={props.cssClasses}>{props.children}</div>
);

export default withClass;