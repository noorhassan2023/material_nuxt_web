import apiAxios from '../apiAxios';

export default {
    async getBlogs() {
        const { data } = await apiAxios.get('blogs');
        return data;
    },

    async getBlog(slug) {
        const { data } = await apiAxios.get(`blogs/${slug}`);
        return data;
    },
}

