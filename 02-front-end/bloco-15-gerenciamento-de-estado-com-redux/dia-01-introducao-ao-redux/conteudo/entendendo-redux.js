const Redux = require('redux');
const ESTADO_INICIAL = { 
  login: false, 
  email: '',
};

const fazerLogin = (email) => {
  return {
    type: "LOGIN",
    email,
  }
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('erickson@gmail.com'))

console.log(store.getState());

