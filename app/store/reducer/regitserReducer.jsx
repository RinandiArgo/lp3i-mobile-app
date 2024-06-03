import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'regitser',
  initialState: {
    formInput:{
    firstName: null,
    sureName: null,
    gender: null,
    date: null,
    email: null,
    password: null,
  },
  optGender:[
    {label:"Laki - Laki", value:"L"}, 
    {label:"Perempuan", value:"P"}
  ]
  },
  reducers: {
    setFirstName:(state, action) => {
      state.formInput.firstName = action.payload
  },
    setSureName:(state, action) => {
      state.formInput.sureName = action.payload
  },
    setGender:(state, action) => {
      state.formInput.gender = action.payload
  },
    setDate:(state, action) => {
      state.formInput.date = action.payload
  },
    setEmail:(state, action) => {
      state.formInput.email = action.payload
  },
    setPassword:(state, action) => {
      state.formInput.password = action.payload
  },
},
})

// Action creators are generated for each case reducer function
export const { setFirstName, setSureName, setGender, setDate, setEmail,setPassword} = registerSlice.actions

export default registerSlice.reducer