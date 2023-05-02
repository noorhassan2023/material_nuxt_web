<template>
  <div class="main-content">
  
    <HomeSlider />
    <HomeBanner :categories="categories" @filtered="filterProducts" />
    <!-- <ProductSlider
      :title="$t('main_page.suggested_products')"
      :products="suggested_products"
      :type="'suggested'"
    /> -->
    <!-- <ProductSlider
      :title="$t('main_page.new_products')"
      :products="new_products"
    />
    <ProductSlider
      :title="$t('main_page.best_sellers')"
      :products="best_sellers"
    /> -->

	<ProductSection
      :sections="new_sections"
    />

  </div>
</template>


<script>
import HomeSlider from '@/components/home/slider.vue'
import HomeBanner from '@/components/home/homeBanner.vue'
import ProductSection from '@/components/home/productSection.vue'
import HOME_API from '@/services/apis/home_api'

export default {
  components: { HomeSlider, HomeBanner ,ProductSection },
  data() {
    return {
      categories: [],
    //   new_products: [],
    //   best_sellers: [],
    //   suggested_products: [],
	  new_sections:[],
    }
  },
  methods: {
    async getData() {
      const all_data = await HOME_API.gethomeData();
      this.categories = all_data.responseData.categories
    //   this.suggested_products = this.categories[0].products
    //   this.new_products = all_data.responseData.newlyArrivedProducts
    //   this.best_sellers = all_data.responseData.bestSellerProducts
    },
	 async getSectionData() {
      const all_data = await HOME_API.gethomeSectionData();
	  console.log(all_data);
      this.new_sections = all_data.responseData.sections;
    },

    filterProducts(e) {
      this.suggested_products = e
    },
  },
  created() {
    this.getData();
	this.getSectionData();

    //setting locale
  },
  watch: {
    '$i18n.locale': {
      handler: function (val) {
        this.getData()
      },
      deep: true
    },
  },
}
</script>




