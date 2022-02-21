import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$host} from "../../http";

interface initialStateValue {

}

const initialState = {

}

export const sendPicturesMainCategory = createAsyncThunk(
	"sendPicturesMainCategory",
	async function foo(form){
		const response = await $host.post("api/mainTypePictures", form)
		return response.data
	}
)


export const CategoriesPicturesStore = createSlice({
	name: "PicturesStore",
	initialState: initialState,
	reducers: {

	},
	extraReducers: (builder => {

		builder.addCase(sendPicturesMainCategory.fulfilled , (state, {payload}) => {
			console.log(payload)
		})
	})
})

export const {} = CategoriesPicturesStore.actions
export default CategoriesPicturesStore.reducer