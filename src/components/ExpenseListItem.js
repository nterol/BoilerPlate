import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`edit/${id}`} >
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            {description && <p>{description}</p>}
        </Link >
    </div >
);

export default ExpenseListItem;