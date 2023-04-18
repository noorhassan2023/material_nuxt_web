import apiAxios from '../apiAxios';

const gethomeData = async () => {
  const { data } = await apiAxios.get('product/dynamic-home-listing?iCategoryId=1');
  return data;
};

export default {
	gethomeData,
 
};
