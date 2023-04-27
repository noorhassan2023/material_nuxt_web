import apiAxios from '../apiAxios';

export default {
		async gethomeData () {
		const { data } = await apiAxios.get('product/latest-home-listing');
		return data;
		},

		async gethomeSectionData () {
			const { data } = await apiAxios.get('product/dynamic-home-listing-banner?iCategoryId=1');
			return data;
		},

		async getpages (slug) {
			return await apiAxios.get('content-pages/'+slug);
			
		},


}

