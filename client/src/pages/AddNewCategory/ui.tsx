import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardInput } from '../../shared/ui/AdminCardInput/ui';

export const AddNewCategory = () => {
	return (
		<AdminPanelCard>
			<AdminCardHeading>Add new Category</AdminCardHeading>
			<AdminCardForm
				onSubmitFunction={() => {
					console.log('test');
				}}>
				<AdminCardInput
					value={'test'}
					change={() => {
						console.log('sd');
					}}
					type={'text'}
					field={'test for test'}
				/>
			</AdminCardForm>
		</AdminPanelCard>
	);
};
