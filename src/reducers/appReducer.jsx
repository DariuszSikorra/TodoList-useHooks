import { today, initialTodoForm } from "../variables/variables";

///zmienić id na localTimme czy cuś
//uzależnić przynależność do state względem "done"

const appReducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return action.payload;
    case "ADD_DISCRIPTION":
      return {
        ...state,
        todoForm: { ...state.todoForm, discription: action.payload }
      };

    case "ADD_DATE":
      if (action.payload >= today) {
        return {
          ...state,
          todoForm: { ...state.todoForm, date: action.payload }
        };
      } else {
        return state;
      }
    case "ADD_IMPORTANT":
      return {
        ...state,
        todoForm: { ...state.todoForm, important: action.payload }
      };
    case "ADD_TODO":
      return {
        ...state,
        todoForm: { ...initialTodoForm, id: state.todoForm.id + 1 },
        todoList: [...state.todoList, action.payload].sort(
          (a, b) => b.date - a.date
        )
      };

    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter(x => x.id !== action.item.id)
      };
    case "MAKEDONE_TODO":
      return {
        ...state,
        todoList: state.todoList.map(x =>
          x.id === action.item.id
            ? {
                ...x,
                done: true,
                doneDate: today
              }
            : {
                ...x
              }
        )
      };
    default:
      return state;
  }
};

export default appReducer;
