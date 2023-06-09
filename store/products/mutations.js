const mutations = {
 SET_PRODUCT_DATA(state, data) {
		state.productDetail = data;
	},
 SET_Loading(state,data) {
	 state.isLoading = data;
 }	
}
export default mutations