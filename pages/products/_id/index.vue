<template>
<div class="main-content">
   <section class="section row-middle">
	<div class="container mb-5">
			<div class="row">
			<div class="col-md-4">
				<img :src="singleProduct.vProductImage" class="img-fluid" alt="Product Image">
			</div>
			<div :class="$i18n.locale == 'en'? 'text-left col-md-8' : 'text-right col-md-8'">
				<h1 class="mb-4 product-color">{{singleProduct.vProductName}} {{singleProduct.vProductUnit}}</h1>
				<h2 class="mb-4">
				<s style="font-size: 1.5rem" class="text-danger"
				      v-if="singleProduct.dDiscountedProductPrice !=singleProduct.dbOriginalProductPrice">
                 {{ singleProduct.dbOriginalProductPrice }} </s>
				   <span class="product-color" style="font-size: 2rem">
                        {{ singleProduct.dDiscountedProductPrice }}
                        {{ $t('main_page.sar') }}</span>
                </h2>
				<p class="mb-4">{{singleProduct.txProductDescription}}</p>

              <div class="btn-test">
				<div class="">
				  <div class="location1 d-flex">
					<span class=" subheading" style="margin-right: 10px;;">
					  <a href="https://apps.apple.com/us/app/%D9%85%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7%D9%84/id1626095299" target="_blank">
						 <img src="~/assets/img/appstore.svg" alt="" class="test-10"  style="margin-bottom: 10px; " /></a>
					</span>
					<span class="mb-3 subheading" style="margin-right: 10px">
					  <a href="https://play.google.com/store/apps/details?id=com.material.customer" target="_blank">
						<img class="test-10" src="~/assets/img/googleplay.svg"  alt=""/></a>
					</span>
				  </div>
				</div>
			</div>
			</div>

		
		</div>
		</div>
	</section>  
	
  </div>
</template>



<script>
import Product_API from '@/services/apis/product_api'

export default {
  data() {
    return {
		singleProduct:Object
    }
  },
  methods: {
    async getSingleProduct() {
      const productId =this.$route.params?.id
      const res = await Product_API.getProductDetail(productId)
      this.singleProduct = res.data.responseData?.productDetails
	   console.log(this.singleProduct);
    }
  },
  created() {
    this.getSingleProduct();
  },
}
</script>

<style scoped>
 .product-color{
	color:#012cda
 }
</style>