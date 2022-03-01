import Sideba from "../AdminSidebar/ui";
import {css} from "@emotion/react";
import {AdminInfoPage} from "../AdminInfoPage";


const Admin = () => {

	const adminPage = css`
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	`

	return (
		<div css={adminPage}>
			<Sideba />
			<AdminInfoPage/>
		</div>
	)
}

export default Admin

