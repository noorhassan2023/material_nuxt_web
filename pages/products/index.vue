<template>
<section class="box">
	     <ProductFilter />	
	      <Products :productList="productList" />
	 
  </section>
</template>


<script>
import Products from "@/components/products/index.vue";
import ProductFilter from '@/components/products/filter.vue'

import Product_API from '@/services/apis/product_api'

export default {
  components: { Products ,ProductFilter},
  data(){
     return {
	  perPage :0,	
      productList: [],
    }
  },
  methods:{
	async getAllProducts(){
		const res = await Product_API.getProducts(this.perPage,{});
		this.productList = res.data.responseData?.productList;
	}
  },created(){
	this.getAllProducts();
  }
};
</script>
