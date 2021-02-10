export const formatAddress = (
	address: string | null = null,
	city: string | null = null,
	department: string | null = null
): string => {
	let addressStr = '';

	if (address) {
		addressStr = addressStr.concat('', address);
	}

	if (city) {
		addressStr = addressStr.concat(', ', city);
	}

	if (department) {
		addressStr = addressStr.concat(', ', department);
	}

	return addressStr;
};
