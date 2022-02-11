import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {$host} from "../http";


export interface productItemALL {
	id: number,
	name: string,
	price: number,
	img: string,
	typeID: number,
	description: string,
}

interface state {
	arrayProduct: Array<productItemALL>,
	currentPath: string,
	arrayFilterField: Array<filterItems>
}

interface filterItems {
	id: number,
	typeID: number,
	Category: string,
	filterItems: Array<filterItem>,
	type: type
}

interface filterItem {
	id: number,
	field: string,
	CategoryID: number,
}

interface type {
	id: number,
	name: string
}


const initialState = {
	arrayProduct: [],
	currentPath: "",
	arrayFilterField: []
} as state

export const fetchAllProduct = createAsyncThunk(
	"fetchAllProduct",
	async function():Promise<any> {
		try{
			const response = await $host.get(`api/product`)
			return  response.data;
		} catch (e) {
			console.log(e)
		}
	}
)

export const fetchOnlyOneCategory = createAsyncThunk(
	"fetchOnlyOneCategory",
	async function(category: string):Promise<any> {
		try{
			const response = await $host.get(`api/product/?Category=${category}`)
			return  response.data
		} catch (e) {
			console.log(e)
		}
	}
)

export const fetchFilterField = createAsyncThunk(
	"fetchFilterField",
	async function (category: string):Promise<any> {
		try{
			const response = await $host.get(`/api/filter/?Category=${category}`)
			return  response.data
		} catch (e) {
			console.log(e)
		}
	}
)



const catalog = createSlice({
		name: "catalog",
		initialState: initialState,
		reducers: {
			setCurrentPath: (state, action) => {
				console.log(action.payload);
				state.currentPath = action.payload
			}
		},
		extraReducers: (builder => {
			builder.addCase(fetchAllProduct.fulfilled, (state, {payload}) => {
				console.log(payload)
				state.arrayProduct = payload
			})
			builder.addCase(fetchOnlyOneCategory.fulfilled, (state, {payload}) => {
				console.log(payload)
				state.arrayProduct = payload
			})
			builder.addCase(fetchFilterField.fulfilled, (state, {payload}) => {
				console.log(payload)
				state.arrayFilterField = payload
			})

		})
	})

export const { setCurrentPath } = catalog.actions
export default catalog.reducer