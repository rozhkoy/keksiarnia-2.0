export type AdminCardSelectProps = {
	value: string | number;
	change: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	optionArray: Array<IOptionArray>;
	field: string;
};

export interface IOptionArray {
	label: string;
	value: string;
}
