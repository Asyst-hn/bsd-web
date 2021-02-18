export const storeUser = (token: string): void => {
	localStorage.setItem('token', JSON.stringify(token));
};

export const getUser = (): string | null => {
	let user = localStorage.getItem('user');

	if (user) {
		// token = token.replace(/^"(.*)"$/, '$1');
		return user;
	} else {
		return null;
	}
};

export const removeUser = (): void => {
	localStorage.removeItem('user');
};
