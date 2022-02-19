import Sideba from "./Sideba";
import InfoPages from "./InfoPages";
import {css} from "@emotion/react"

const Admin = () => {

	const adminPage = css`
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	`

	return (
		<div css={adminPage}>
			<Sideba />
			<InfoPages />
		</div>
	)
}

export default Admin;
