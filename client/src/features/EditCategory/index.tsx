import { AdminPanelCard } from "../../shared/ui/AdminPanelCard";
import { AdminCardHeading } from "../../shared/ui/AdminCardHeading";
import { AdminCardForm } from "../../shared/ui/AdminCardForm";
import { IsActive } from "../../shared/ui/IsActive";
import { AdminCardInput } from "../../shared/ui/AdminCardInput";
import { AdminCardFile } from "../../shared/ui/AdminCardFile";
import { AdminCardBttnSubmit } from "../../shared/ui/AdminCardBttnSubmit";
import { useState } from "react";
import { useParams } from "react-router";

export const EditCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');
	const [titleState, setTitleState] = useState<string>('');
	const [pictureState, setPictureState] = useState<Blob>(new Blob());
	const [categoryID, setCategoryID] = useState<string>('')
	const params = useParams()

	function formHandler(e: React.SyntheticEvent) {
		console.log(params)
		e.preventDefault()
	}

	return (
		<AdminPanelCard>
			<AdminCardHeading>Edit Category</AdminCardHeading>
			<AdminCardForm onSubmitFunction={formHandler}>
				<IsActive getValue={setIsActiveData} />
				<AdminCardInput value={titleState} change={setTitleState} type={'text'} field={'Title'} />
				<AdminCardFile field={'Image'} change={setPictureState} />
				<AdminCardBttnSubmit field={'Edit'} />
			</AdminCardForm>
		</AdminPanelCard>
	)
}