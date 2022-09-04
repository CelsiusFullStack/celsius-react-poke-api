import { createSlice } from "@reduxjs/toolkit";

export const nameTrainerSlice = createSlice({
  name: "nameTrainer",
  initialState: '',
  reducers: {
    setNameTrainer: (state, action) => action.payload // captura la informacion dinamica  q se le pasa al estado en la aplicación 
  }
})

export const {setNameTrainer} = nameTrainerSlice.actions //representativo del estado global en la store

export default nameTrainerSlice.reducer