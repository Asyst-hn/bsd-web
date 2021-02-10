export const storeToken = (token: string): void => {
	localStorage.setItem('token', JSON.stringify(token));
};

export const getToken = (): string | null => {
	let token = localStorage.getItem('token');

	if (token) {
		token = token.replace(/^"(.*)"$/, '$1');
		return token;
	} else {
		return null;
	}
};

export const removeToken = (): void => {
	localStorage.removeItem('token');
};
