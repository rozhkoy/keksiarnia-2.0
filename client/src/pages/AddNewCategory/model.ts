import {$host} from "../../shared/api";

export  async  function  fetchIsActiveData() {
	const response = await $host.get("api/isActive")
	console.log("responseIsActive", response)
	return response.data
}
