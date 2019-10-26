import { today, initialTodoForm } from "../variables/variables";

///zmienić id na localTimme czy cuś
//uzależnić przynależność do state względem "done"

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DISCRIPTION":
      return {
        ...state,
        todoForm: { ...state.todoForm, discription: action.payload }
      };

    case "ADD_DATE":
      return {
        ...state,
        todoForm: { ...state.todoForm, date: action.payload }
      };
    case "ADD_IMPORTANT":
      return {
        ...state,
        todoForm: { ...state.todoForm, important: action.payload }
      };
    case "ADD_TODO":
      return {
        ...state,
        todoForm: { ...initialTodoForm, id: state.todoList.length + 1 },
        todoList: [...state.todoList, action.payload]
      };
    case "DELETE_TODO":
      let deletedTodo = state.todoList.filter(x => x.id !== action.item.id);
      return {
        ...state,
        todoList: deletedTodo
      };
    case "MAKEDONE_TODO":
      let doneTodoDelete = state.todoList.filter(x => x.id !== action.item.id);
      let doneTodoConcat = state.todoList.filter(x => x.id === action.item.id);
      return {
        ...state,
        todoList: doneTodoDelete,
        doneTodos: state.doneTodos.concat(doneTodoConcat),
        doneTodoConcat: {...doneTodoConcat, doneDate: today}
      };
    default:
      return state;
  }
};

export default appReducer;
