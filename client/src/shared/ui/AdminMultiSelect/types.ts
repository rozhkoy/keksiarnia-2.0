export type AdminMultiSelectType = {
	field: string;
	arrayList: Array<IFilterListForMultiSelect>;
};

export interface IFilterListForMultiSelect {
	id: string;
	listHeading: string;
	list: Array<{
		id: string;
		value: string;
	}>;
}
