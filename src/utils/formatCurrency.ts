export const formatCurrency = (amount: number): string => {
	if (!amount) {
		amount = 0;
	}
	return Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'HNL'
	}).format(amount);
};
