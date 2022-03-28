import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { AdminCardCreateList } from '../../shared/ui/AdminCardCreateList';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';

export const AddProductGroup = () => {
	return (
		<AdminPanelCard>
			<AdminCardHeading>Add product group</AdminCardHeading>
			<AdminCardForm onSubmitFunction={() => false}>
				<AdminCardCreateList />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
