
import React,{ createContext,useReducer } from "react";

const AppReducer = (state, action) => {
	switch (action.type) {

        case 'ADD_EXPENSE':
            console.log('in add expense');
            return {...state,expenses:[...state.expenses,action.payload]};
        case 'DELETE':
            console.log('inside delete');
            return {...state,
                expenses:state.expenses.filter(
                    (expense)=>expense.id!==action.payload)};
		default:
			return state;
	}
};

const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};