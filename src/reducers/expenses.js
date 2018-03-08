const expenseDefaultState = [];

export default (state = expenseDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(element => element.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(e => {
                if (e.id === action.id) {
                    return { ...e, ...action.updates }
                } else
                    return state;
            })
        default:
            return state;
    }
};