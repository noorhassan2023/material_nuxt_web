<template>
  <div class="main-content">
    <b-overlay
      id="overlay-background"
      variant="grey"
      :show="!isLoaded"
      style="min-height: 50vh"
    >
      <section class="section row-middle">
        <div class="container mb-5">
			<p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>

          <div class="row" v-else>
            <div class="col-md-4">
              <img
                :src="singleProduct.vProductImage"
                class="img-fluid"
                alt="Product Image"
              />
            </div>
            <div
              :class="
                $i18n.locale == 'en'
                  ? 'text-left col-md-8'
                  : 'text-right col-md-8'
              "
            >
              <h1 class="mb-4 product-color">
                {{ singleProduct.vProductName }}
                {{ singleProduct.vProductUnit }} 
              </h1>
              <h2 class="mb-4">
                <s
                  style="font-size: 1.5rem"
                  class="text-danger"
                  v-if="
                    singleProduct.dDiscountedProductPrice !=
                    singleProduct.dbOriginalProductPrice
                  "
                >
                  {{ singleProduct.dbOriginalProductPrice }}
                </s>
                <span class="product-color" style="font-size: 2rem">
                  {{ singleProduct.dDiscountedProductPrice }}
                  {{ $t('main_page.sar') }}</span
                >
              </h2>
              <p class="mb-4">{{ singleProduct.txProductDescription }}</p>

              <div class="btn-test">
                <div class="">
                  <div class="location1 d-flex">
                    <span class="subheading" style="margin-right: 10px">
                      <a
                        href="https://apps.apple.com/us/app/%D9%85%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7%D9%84/id1626095299"
                        target="_blank"
                      >
                        <img
                          src="~/assets/img/appstore.svg"
                          alt=""
                          class="test-10"
                          style="margin-bottom: 10px"
                      /></a>
                    </span>
                    <span class="mb-3 subheading" style="margin-right: 10px">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.material.customer"
                        target="_blank"
                      >
                        <img
                          class="test-10"
                          src="~/assets/img/googleplay.svg"
                          alt=""
                      /></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-else>
            <div class="col-md-6 offset-md-3 text-center">
              <h4>{{ $t('products.not_found') }}</h4>
              <NuxtLink :to="localePath('/products')" class="btn btn-primary">
                {{ $t('products.go_to_products') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </b-overlay>
  </div>
</template>



<script>
import Product_API from '@/services/apis/product_api'

export default {
	 head() {
	return {
      title: this.singleProduct?.vProductName,
	   meta: [
                { hid: 'og:title', name : 'og:title',property: 'og:title', content: this.singleProduct?.vProductName },
				{ hid: 'title', name : 'title', content: this.singleProduct?.vProductName },
				{ hid: 'og:description', name : 'og:description', property: 'og:description',content: this.singleProduct?.txProductDescription },
				{ hid: 'description', name : 'description', content: this.singleProduct?.txProductDescription },
				{ hid: 'og:image', name : 'og:image', property: 'og:image',content: this.singleProduct?.vProductImage },
                { hid: 'keywords', name: 'keywords', content: this.$t("meta.keywords") },
            ],
	}

  },
	async fetch() {
         // fetch data from API
        try {
		  const productId = this.$route.params?.id
          const res = await Product_API.getProductDetail(productId)
	     this.isExist = res.data.responseCode == 200 ? true : false
			if (this.isExist)
				this.singleProduct = res.data.responseData?.productDetails
				this.$nuxt.$forceUpdate()
				this.isLoaded = true
        } catch (error) {
            // Redirect to error page or 404 depending on server response
      }
    },	
  fetchOnServer: false,
  data() {
	return {
	  singleProduct: Object,
	  isExist:false,
	  isLoaded:false,
	}
  },
}
</script>

<style scoped>
.product-color {
  color: #012cda;
}
</style>