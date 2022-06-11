import React from "react";
import { expenseData } from "./Data";

const AppContext = React.createContext();

const initialState = expenseData;

const reducer = (state, action) => {
  if (action.type === "ADDTNX") {
    return action.payload.text && action.payload.amount
      ? [...state, action.payload]
      : [...state];
  }

  if (action.type === "FILTER") {
    // console.log(action.payload);
    return state.filter((itm) => itm.id !== action.payload);
  }
};

const AppProvider = ({ children }) => {
  const [mode, setMode] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const x = state.map((itm) => +itm.amount);
  const total = x.reduce((acc, val) => acc + val, 0);

  const inc = state.map((itm) => itm.amount > 0 && +itm.amount);
  const totalInc = inc.reduce((acc, val) => acc + val, 0);

  const ex = state.map((itm) => itm.amount < 0 && +itm.amount);
  const totalEx = ex.reduce((acc, val) => acc + val, 0);

  return (
    <AppContext.Provider value={{ state, dispatch, total, totalInc, totalEx }}>
      {children}
    </AppContext.Provider>
  );
};

//- custom Hook -- it is made by just using the (use) prefix -----(we have to explictly return)

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider };

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
-- First we have to create context 
by using 
const AppContext = React.createContext();
we got 2 things 
~ .Provider
~ useContext (to consume the data)

now we made a function called AppProvider which is used to provede all the data to the child elements 
in this case it is in the other file thats why we have made this a function 
we have to use ;
! prop {childern} it wont work if you dont use it

the context.Provider has to be wrapped around the component in which we want to have our data 
in this case we have wrapped it around whole <App/> in index.js file

the context.Provider has a special attibute in which we caan pass any object state or any string or number

-- usage of the useReducer will be beneficial in the Context API as we can manage the whole function in it



*/
