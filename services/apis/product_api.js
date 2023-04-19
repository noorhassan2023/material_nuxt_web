import apiAxios from '../apiAxios';

export default {
	async getProducts(page = 1, query = {}) {
		let URL = `/product/product-listing?offset=${page}`;
		return await apiAxios.post(URL, query);
	}
}