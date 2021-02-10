import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
const { REACT_APP_BASE_URL = 'http://localhost:5000/api/v1' } = process.env;

interface RequestConfig {
	path: string;
	method: Method;
	token?: string;
	body?: unknown;
}

interface OptionTypes {
	noCache?: boolean;
}

export const api = async (
	req: RequestConfig,
	options?: OptionTypes
): Promise<AxiosResponse<any>> => {
	const axiosConfig: AxiosRequestConfig = {
		url: `${REACT_APP_BASE_URL + req.path}`,
		method: req.method
	};

	if (req.body) {
		axiosConfig.data = req.body;
	}

	if (req.token) {
		axiosConfig.headers = { authorization: `Bearer ${req.token}` };
	}

	if (options?.noCache) {
		axiosConfig.headers = {
			...axiosConfig.headers,
			'cache-control': 'no-cache'
		};
	}

	const res = await axios(axiosConfig);
	return res;
};
