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

export const initialStateWithFiltered = {
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
    filtered: [
      {
        id: 131,
        title: "Learn Node",
        description: "Learning how to create backend server",
        completed: false,
        type: "Other",
        dueDate: moment().format("YYYY-MM-DD"),
      },
    ],
  },
};

export const emptyState = {
  todo: {
    todos: [],
    filtered: [],
  },
};
