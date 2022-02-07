import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



interface productItemALL {
	id?: number,
	name?: string,
	price?: number,
	img?: string,
	typeID?: number,
	description?: string,
}

interface state {
	arrayProduct: [productItemALL]
}

const initialState = {
	arrayProduct: []
}

export const fetchAllProduct = createAsyncThunk(
	"fetchAllProduct",
	async function():Promise<any> {
		console.log("eee")
		try{
			const response = await  fetch(`http://localhost:5000/api/product`)
			return await response.json()
		} catch (e) {
			console.log(e)
		}
	}
)

const catalog = createSlice({
		name: "catalog",
		initialState: initialState,
		reducers: {},
		extraReducers: (builder => {
			builder.addCase(fetchAllProduct.pending, (state, {payload}) => {
				console.log("fdf")
			})
			builder.addCase(fetchAllProduct.fulfilled, (state, {payload}) => {
				console.log(payload)
			})
		})
	})

export const {} = catalog.actions
export default catalog.reducer