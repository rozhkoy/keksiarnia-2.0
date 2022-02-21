import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$host} from "../../http";


interface initialStateValue {
	mainType: Array<typeValue>
}

interface typeValue {
	id_mainTypeProduct: number,
	isActive_id: number,
	picture_id: number,
	title: string
}

const initialState: initialStateValue = {
	mainType: []
}

export const changeMainTypeDate = createAsyncThunk(
	"changeMainTypeDate",
	 async function foo(form) {
		const response = await $host.post("api/mainTypeProduct", form);
		return response.data
	 }
)

export const mainTypeStore = createSlice({
	name: "mainTypeStore",
	initialState: initialState,
	reducers: {
		test: (state) =>{
			console.log(state)
		}
	},
	extraReducers: (builder => {
			builder.addCase(changeMainTypeDate.fulfilled, (state, {payload}) => {
				console.log(payload)
			})
	})
})
export const {test} = mainTypeStore.actions
export default mainTypeStore.reducer