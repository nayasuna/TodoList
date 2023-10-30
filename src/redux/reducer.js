import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Coba untuk mendapatkan data dari localStorage saat inisialisasi
const savedTodos = JSON.parse(localStorage.getItem("todos"));

const addTodoReducer = createSlice({
  name: "todos",
  initialState: savedTodos || initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      // Simpan data ke localStorage saat ada perubahan
      localStorage.setItem("todos", JSON.stringify(state));
    },
    removeTodos: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      state.length = 0; // Clear the original state
      state.push(...updatedState);
      // Simpan data ke localStorage saat ada perubahan
      localStorage.setItem("todos", JSON.stringify(state));
    },
    updateTodos: (state, action) => {
      // Perbarui item tugas sesuai dengan ID
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.item = action.payload.item;
        }
        return todo;
      });
      // Simpan data ke localStorage saat ada perubahan
      localStorage.setItem("todos", JSON.stringify(state));
    },
    completeTodos: (state, action) => {
      // Perbarui status "completed" tugas sesuai dengan ID
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = true;
        }
        return todo;
      });
      // Simpan data ke localStorage saat ada perubahan
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
