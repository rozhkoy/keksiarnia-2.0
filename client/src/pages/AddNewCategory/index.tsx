import { AdminCardForm } from 'src/shared/ui/AdminCardForm';
import { AdminCardHeading } from 'src/shared/ui/AdminCardHeading';
import { AdminCardInput } from 'src/shared/ui/AdminCardInput';
import { AdminPanelCard } from 'src/shared/ui/AdminPanelCard';
import { AdminCardSelect } from '../../shared/ui/AdminCardSelect';
import { AdminCardFile } from '../../shared/ui/AdminCardFile';
import { IsActive } from '../../shared/ui/IsActive';
import { useEffect, useState } from 'react';

export const AddNewCategory = () => {
	const [isActiveData, setIsActiveData] = useState<string>('');

	useEffect(() => {
		console.log('test', isActiveData);
	});
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
				<AdminCardSelect
					value={'test'}
					change={() => {
						console.log('red');
					}}
					optionArray={[{ value: 'red', label: 'red' }]}
					field={'test for select'}
				/>
				<AdminCardFile field={'test for file'} change={() => console.log('test')} />
				<IsActive getValue={setIsActiveData} />
			</AdminCardForm>
		</AdminPanelCard>
	);
};
