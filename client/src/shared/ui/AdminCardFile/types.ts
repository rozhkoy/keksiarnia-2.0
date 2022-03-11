import React, { Dispatch, SetStateAction } from 'react';

export type AdminCardFileProps = {
	field: string;
	change: Dispatch<SetStateAction<File | null>>;
};
