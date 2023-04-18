<template>
  <div class="main-content">
    <HomeSlider />
    <HomeBanner :categories="categories"/>
    <ProductSlider :title="$t('main_page.new_products')" :products="new_products" />
    <ProductSlider :title="$t('main_page.best_sellers')" :products="best_sellers" />
    <ProductSlider :title="$t('main_page.suggested_products')" :products="suggested_products" />
  </div>
</template>


<script>
import HomeSlider from '@/components/home/slider.vue'
import HomeBanner from '@/components/home/homeBanner.vue'
import ProductSlider from '@/components/home/productSlider.vue'
import HOME_API from "@/services/apis/home_api"

export default {
  components: { HomeSlider, ProductSlider, HomeBanner },
  data() {
    return {
	  categories:[],	
      new_products: [],
      best_sellers: [],
      suggested_products: [],
    }
  },
  methods: {
    async getData() {
		   const res = await HOME_API.gethomeData();
		   this.categories = res.responseData?.categories;
    },
  },
  created() {
    //this.mymethod();
    this.getData()
  },
  watch: {
    food: function (val) {
        //Get food name by val(id)
    }
}
}
</script>

