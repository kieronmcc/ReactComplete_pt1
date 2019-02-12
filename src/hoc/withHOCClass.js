import React from 'react';

// Use this approach where other logic such a error handling or
// or sending analytics data
const withHOCClass = (WrappedComponent, className) => {
    // Using spread operator we dynamically pass through props
    // to wrapped component
    return props => ( 
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withHOCClass;