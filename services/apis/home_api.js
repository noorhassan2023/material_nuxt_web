import apiAxios from '../apiAxios';

export default {
		async gethomeData () {
		const { data } = await apiAxios.get('product/latest-home-listing');
		return data;
		},

		async getpages (slug) {
			return await apiAxios.get('content-pages/'+slug);
			
		},


}

