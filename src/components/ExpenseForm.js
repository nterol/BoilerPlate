import React, { Component } from 'react';
import moment from 'moment';
import { SingleDataPicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

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
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    };

    onDateChange = (createdAt) => { this.setState(() => { createdAt }) };

    onFocusedChange = ({ focused }) => { this.setState(() => { calendarFocused: focused }) };

    render() {
        return (
            <div>
                <form>
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
                    <SingleDataPicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusedChange={this.onFocusedChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Ajouter un commentaire sur cette dépense 💸"
                        onChange={this.onTextChange}
                    >
                    </textarea>
                    <button>Ajouter une dépense</button>
                </form>
            </div>
        )
    }
}
