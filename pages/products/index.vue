<template>
<section class="box">
	     <ProductFilter  @setSearch="handleSearch"/>	
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
	  searchVal:'',
    }
  },
  methods:{
	async getAllProducts(){
		const body = (this.searchVal.length > 0) ?{"vSerchString":this.searchVal} : '';
		const res = await Product_API.getProducts(this.perPage,body);
		this.productList = res.data.responseData?.productList;
	},
	async handleSearch(e){
		 this.searchVal = e;
		 this.getAllProducts();
	}

  },created(){
	this.getAllProducts();
  }
};
</script>
