export function createImgLink(name: string): string {
	const host: string | undefined = process.env.REACT_APP_API_URL;
	return host ? `${host}${name}` : '';
}
