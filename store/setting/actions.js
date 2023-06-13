import apiAxios from '@/services/apiAxios';

const actions = {
	async fetchSetting({ commit }) {
		let data = await apiAxios.get('settings')
		console.log(data);
		commit('SET_SETTING_DATA', data.data.responseData);
		return data;

	}
}

export default actions