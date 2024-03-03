import { createSlice } from '@reduxjs/toolkit';

const usuarioSlice = createSlice({
    initialState: {
      usuarioLogado: {},
    },
    name: 'usuario',
    reducers: {
      logar:(state,action)=>{
        state.usuarioLogado=action.payload
      }
    } 
  });
  
  export default usuarioSlice.reducer;
  
  export const { logar } = usuarioSlice.actions;