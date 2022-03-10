export type AdminCardSelectProps = {
	value: string | number;
	change: () => void;
	optionArray: Array<IOptionArray>;
	field: string;
};

export interface IOptionArray {
	label: string;
	value: string | number;
}
