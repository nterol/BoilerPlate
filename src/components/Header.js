import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active" >Create</NavLink>
            <NavLink to="/about" activeClassName="is-active">About</NavLink>
        </div >
    </header>
);

export default Header;