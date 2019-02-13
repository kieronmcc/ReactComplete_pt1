import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    // this arrow function is declared here to 
    // have autocompletion in IDE
    login: () => {}
});

export default authContext;