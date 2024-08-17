
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  completedTasks: [],
  cancelledTasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    markAsCompleted: (state, action) => {
      const taskIndex = state.todos.findIndex((task) => task.id === action.payload.id);
      if (taskIndex > -1) {
        const [completedTask] = state.todos.splice(taskIndex, 1);
        state.completedTasks.push(completedTask);
      }
     
    },
    markAsCancelled: (state, action) => {
      const taskIndex = state.todos.findIndex((task) => task.id === action.payload.id);
      if (taskIndex > -1) {
        const [cancelledTask] = state.todos.splice(taskIndex, 1);
        state.cancelledTasks.push(cancelledTask);
      }
    },
    updateTask: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    deleteCompletedTask: (state, action) => {
      state.completedTasks = state.completedTasks.filter((task) => task.id !== action.payload.id);
    },
    deleteCancelledTask: (state, action) => {
      state.cancelledTasks = state.cancelledTasks.filter((task) => task.id !== action.payload.id);
    },
    deleteAllCompletedTask: (state) => {
      state.completedTasks = [];
    },
    deleteAllCancelledTask: (state) => {
      state.cancelledTasks = [];
    },
  },
});

export const {
  addTodo,
  markAsCompleted,
  markAsCancelled,
  updateTask,
  deleteCompletedTask,
  deleteCancelledTask,
  deleteAllCompletedTask,
  deleteAllCancelledTask,
} = todoSlice.actions;

export default todoSlice.reducer;


















