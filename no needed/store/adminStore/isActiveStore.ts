import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $host } from "../../shared/api";

interface isActiveValue {
  isActive_ID: number;
  value: string;
  createdAt: string;
  updatedAt: string;
}

interface initialStateValue {
  ActiveData: Array<isActiveValue>;
  apiStatus: boolean;
  test: string;
}

const initialState: initialStateValue = {
  ActiveData: [],
  apiStatus: false,
  test: "",
};

// export const fetchIsActiveData = createAsyncThunk(
// 	"fetchIsActiveData",
// 	async function foo() {
// 		const response = await $host.get("api/isActive")
// 		console.log("adsfasdf")
// 		return response.data
// 	}
// )

export const isActive = createSlice({
  name: "isActive",
  initialState: initialState,
  reducers: {
    test: (state) => {
      state.test = "dfs";
    },
  },
  // extraReducers: (builder => {
  // 	builder.addCase(fetchIsActiveData.fulfilled, (state, {payload}) => {
  // 		console.log(payload);
  // 		state.ActiveData = payload;
  // 		state.apiStatus = true;
  // 	})
  // })
});

export const { test } = isActive.actions;
export default isActive.reducer;
