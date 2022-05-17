import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface ITodoCard {
  id: string;
  type: string;
  title: string;
  body: string;
  creationDate: Date;
  endTime: Date;
}
export interface ITodoCardArray {
  todoMissions: ITodoCard[];
  inProgressMissions: ITodoCard[];
  doneMissions: ITodoCard[];
}

const initialState: ITodoCardArray = {
  todoMissions: [],
  inProgressMissions: [],
  doneMissions: [],
} as any;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addITodoCard: (state, action: PayloadAction<ITodoCard>) => {
      state.todoMissions.push({ ...action.payload, id: nanoid() });
    },
    removeCard: (state, action: PayloadAction<ITodoCard>) => {
      if (action.payload.type === "todo") {
        state.todoMissions.splice(
          state.todoMissions.findIndex(
            (mission: any) => mission.id === action.payload.id
          ),
          1
        );
        return state;
      } else if (action.payload.type === "in-progress") {
        state.inProgressMissions.splice(
          state.inProgressMissions.findIndex(
            (mission: any) => mission.id === action.payload.id
          ),
          1
        );
        return state;
      } else {
        state.doneMissions.splice(
          state.doneMissions.findIndex(
            (mission: any) => mission.id === action.payload.id
          ),
          1
        );
        return state;
      }
    },
    updateCard: (state, action: PayloadAction<ITodoCard>) => {
      if (action.payload.type === "todo") {
        state.todoMissions[
          state.todoMissions.findIndex(
            (mission: any) => mission.id === action.payload.id
          )
        ] = action.payload;
        return state;
      } else if (action.payload.type === "in-progress") {
        state.inProgressMissions[
          state.inProgressMissions.findIndex(
            (mission: any) => mission.id === action.payload.id
          )
        ] = action.payload;
        return state;
      } else {
        state.doneMissions[
          state.doneMissions.findIndex(
            (mission: any) => mission.id === action.payload.id
          )
        ] = action.payload;
        return state;
      }
    },
  },
});

export const { addITodoCard, removeCard, updateCard } = todoSlice.actions;
export default todoSlice;
