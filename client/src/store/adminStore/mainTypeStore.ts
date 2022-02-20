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
	 async function foo(form: any) {
		const response = $host.post("api/mainTypeProduct", form);
	 }
)

export const mainTypeStore = createSlice({
	name: "mainTypeStore",
	initialState: initialState,
	reducers: {

	},
	extraReducers: (builder => {

	})
})
export const {} = mainTypeStore.actions
export default mainTypeStore.reducer