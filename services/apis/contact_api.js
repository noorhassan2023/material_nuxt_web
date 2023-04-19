import apiAxios from '../apiAxios';


export default {
	async postContactUs (body) {
		const { data } = await apiAxios.post('/contact/contact-help-create', body);

		console.log(data);
       return data;
	},


}