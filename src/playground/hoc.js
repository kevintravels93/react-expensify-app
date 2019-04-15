// Higher Order Component ( HOC ) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>    
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
    <div>
       {props.isAdmin && <p>This is private Info. Please don´t share!</p>}
        <WrappedComponent {...props} />    
    </div>
    )
};

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>        
         {props.isAuthenticated ? ( <WrappedComponent {...props} /> ) : (<p>Please log in first</p>) }
        </div>
    )
};

const Admininfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={false} info="There are details" />, document.getElementById("app"))