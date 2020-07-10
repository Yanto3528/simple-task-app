import moment from "moment";

export const initialState = {
  todo: {
    todos: [
      {
        id: 1,
        title: "Do Laundry",
        description: "I'm going to do my laundry",
        completed: false,
        type: "Important",
        dueDate: moment().format("YYYY-MM-DD"),
      },
      {
        id: 2,
        title: "Learn React",
        description: "Learning how to create website with React",
        completed: false,
        type: "Urgent",
        dueDate: moment().format("YYYY-MM-DD"),
      },
    ],
    filtered: null,
  },
};
