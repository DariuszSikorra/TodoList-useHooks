export const today = new Date().toISOString().substring(0, 10);

export const initialTodoForm = {
    id: 0,
    discription: "",
    date: today,
    important: false,
    done: false,
    doneDate: ""
};