import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {$host} from "../../shared/api";




interface initialStateValue {
	mainType: typeValue[],
	mainTypeItem: typeValue
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
	mainTypeItem: {
		id: "",
		isActive: "",
		picture: "",
		title: ""
	}

}

export const sendMainTypeDate = createAsyncThunk(
	"sendMainTypeDate",
	 async function foo(form: FormData) {
		const response =  await $host.post("api/mainTypeProduct", form);
		return response.data
	 }
)

export const rewriteMainTypeData = createAsyncThunk(
	"rewriteMainTypeData",
	async function (form: FormData) {
		const response = await $host.post("api/mainTypeProductById", form)
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

export const fetchMainTypeDataByID = createAsyncThunk(
	"fetchMainTypeDataByID",
	async function (id: number) {
		const response = await $host.get(`api/mainTypeProductById?id=${id}`)
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
		builder.addCase(fetchMainTypeDataByID.fulfilled, (state , {payload}) => {
			state.mainTypeItem =  {
				id: payload.id_mainTypeProduct,
				isActive: payload.isActive.isActive_ID,
				title: payload.title,
				picture: payload.mainTypeProductPicture.name
			}
			console.log(current(state));
		})
	})
})
export const {test} = mainTypeStore.actions
export default mainTypeStore.reducer