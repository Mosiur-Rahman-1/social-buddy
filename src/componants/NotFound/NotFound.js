import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className = "notFound-container">
            <h1>Sorry your page is not found</h1>
            <h4><a href="/home"> Go back to home</a></h4>
        </div>
    );
};

export default NotFound;