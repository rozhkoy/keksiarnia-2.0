import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {$host} from "../../http";




interface initialStateValue {
	mainType: typeValue[],
}

export interface typeValue {
	[key: string]: string | number
	id: string,
	isActive: string,
	picture: string,
	title: string
}

const initialState: initialStateValue = {
	mainType: [],
}

export const sendMainTypeDate = createAsyncThunk(
	"sendMainTypeDate",
	 async function foo(form: FormData) {
		const response =  await $host.post("api/mainTypeProduct", form);
		return response.data
	 }
)

export const fetchMainTypeData = createAsyncThunk(
	"fetchMainTypeData",
	async function() {
		const response = await $host.get("api/mainTypeProduct");
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
		builder.addCase(sendMainTypeDate.fulfilled, (state, {payload}) => {
			console.log(payload)
		})
		builder.addCase(fetchMainTypeData.fulfilled, (state, {payload}) => {
			for(let i = 0; i < payload.length; i++) {
				state.mainType[i] = {
					id: payload[i].id_mainTypeProduct,
					isActive: payload[i].isActive.value,
					title: payload[i].title,
					picture: payload[i].mainTypeProductPicture.name
				}
			}
			console.log(current(state));
		})
	})
})
export const {test} = mainTypeStore.actions
export default mainTypeStore.reducer