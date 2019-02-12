import React from 'react';

// Use this approach where other logic such a error handling or
// or sending analytics data
const withHOCClass = (WrappedComponent, className) => {
    return props => ( 
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withHOCClass;