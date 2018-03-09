import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description })
    };

    onTextChange = (e) => {
        const note = e.target.value;
        this.setState({ note })
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    };

    onDateChange = (createdAt) => { this.setState({ createdAt }) };

    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({ error: 'Veuillez remplir tous les champs' });
        } else {
            this.setState({ error: '' });
            console.log('Submitted !')
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nom de la dépense"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Ajouter un commentaire sur cette dépense 💸"
                        onChange={this.onTextChange}
                    >
                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Ajouter une dépense</button>
                </form>
            </div>
        )
    }
}
