<template>
  <div class="main-content">
    <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>
    <HomeSlider />
    <HomeBanner :categories="categories" @filtered="filterProducts" />
    <ProductSlider
      :title="$t('main_page.suggested_products')"
      :products="suggested_products"
      :type="'suggested'"
    />
    <ProductSlider
      :title="$t('main_page.new_products')"
      :products="new_products"
    />
    <ProductSlider
      :title="$t('main_page.best_sellers')"
      :products="best_sellers"
    />
  </div>
</template>


<script>
import HomeSlider from '@/components/home/slider.vue'
import HomeBanner from '@/components/home/homeBanner.vue'
import ProductSlider from '@/components/home/productSlider.vue'
import HOME_API from '@/services/apis/home_api'

export default {
  components: { HomeSlider, ProductSlider, HomeBanner },
  data() {
    return {
      categories: [],
      new_products: [],
      best_sellers: [],
      suggested_products: [],
    }
  },
  methods: {
    async getData() {
      const all_data = await HOME_API.gethomeData()
      this.categories = all_data.responseData.categories
      this.suggested_products = this.categories[0].products
      this.new_products = all_data.responseData.newlyArrivedProducts
      this.best_sellers = all_data.responseData.bestSellerProducts
    },
    filterProducts(e) {
      this.suggested_products = e
    },
  },
  created() {
    this.getData()

    //setting locale
    process.client ? localStorage.setItem('locale', this.$i18n.locale) : ''
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

