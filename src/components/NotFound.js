import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => (
    <div>
        <div>
            <h1>404 - NOT FOUND</h1>
        </div>
        <div>
            <p>"Sorry... the page you're trying to access does not like, exits
            sooo, maybe, go back like,
            <Link to='/'><p>Home</p></Link>?
        </p>
        </div>
    </div>
);

export default NotFound;
