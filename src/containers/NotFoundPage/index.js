/**
 *
 * NotFoundPage
 * This is the component that will show when you have a 404
 */

import React from 'react';

function NotFoundPage(props) {
    return (
        <div>
            <div className="logo--holder">
                <a href="/"><img alt="logo" src="https://ijadams.s3.amazonaws.com/volta/volta-black-outline-orange.svg"/></a>
            </div>
            <div className="not-found">
                <h1>The page you're looking for doesn't exist.</h1>
            </div>
        </div>
    );
}

export default NotFoundPage;
