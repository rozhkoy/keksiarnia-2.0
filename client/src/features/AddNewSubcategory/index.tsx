import { AdminPanelCard } from '../../shared/ui/AdminPanelCard';
import { AdminCardHeading } from '../../shared/ui/AdminCardHeading';
import { IsActive } from '../../shared/ui/IsActive';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { AdminCardInput } from '../../shared/ui/AdminCardInput';
import { AdminCardForm } from '../../shared/ui/AdminCardForm';
import { AdminCardSelectWithSearch } from '../../shared/ui/AdminCardSelectWithSearch';

export const AddNewSubcategory = () => {
	return (
		<AdminPanelCard>
			<AdminCardForm onSubmitFunction={() => console.log('Red')}>
				<AdminCardHeading>Add new subcategory</AdminCardHeading>
				<IsActive getValue={() => console.log('Red')} />
				<AdminCardInput value={''} change={() => console.log('Red')} type={'text'} field={'Title'} />
				<AdminCardSelectWithSearch />
				<AdminCardFile field={''} change={() => console.log('Red')} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
