import axios from "axios";

const $host = axios.create({

	baseURL: process.env.REACT_APP_API_URL
})

const $auth = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL
})

$auth.interceptors.response.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})


export{
	$host,
	$auth
}