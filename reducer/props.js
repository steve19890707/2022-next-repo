import { createSlice } from '@reduxjs/toolkit'

const props = createSlice({
  name: "props",
  initialState: {
    initData: 'is props'
  },
  reducers: {
    setInitData: (state, actions) => {
      state.initData = actions.payload;
    }
  }
});
export default props.reducer;
export const { setInitData } = props.actions