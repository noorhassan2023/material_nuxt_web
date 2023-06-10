import apiAxios from '@/services/apiAxios';

const actions = {
	async fetchProduct({ commit }, id) {
		let data = await apiAxios.get('product/product-details/' + id)
		console.log(data);
		const isExist = data.data.responseCode == 200 ? true : false;
		    commit('SET_Loading', isExist);
		const productDetail = data.data.responseData?.productDetails;
			commit('SET_PRODUCT_DATA', productDetail);
		  return  data ;	

	}

}

export default actions