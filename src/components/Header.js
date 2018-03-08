import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active" >Create</NavLink>
            {/* <NavLink to="/edit" activeClassName="is-active">Edit</NavLink> */}
            <NavLink to="/about" activeClassName="is-active">About</NavLink>
        </div >
    </div>
);

export default Header;