import apiAxios from '../apiAxios';

export default {
	async getFaqs() {
		const { data } = await apiAxios.get('faqs');
		return data;
	},
}