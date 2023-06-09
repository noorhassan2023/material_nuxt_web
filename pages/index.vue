<template>
  <div class="main-content">
    <HomeSlider />
    <HomeBanner :categories="categories" @filtered="filterProducts" />
    <ProductSection :sections="new_sections" />
  </div>
</template>


<script>
import HomeSlider from '@/components/home/slider.vue'
import HomeBanner from '@/components/home/homeBanner.vue'
import ProductSection from '@/components/home/productSection.vue'
import HOME_API from '@/services/apis/home_api'
import seoMeta from '@/services/seoMeta.js'

export default {
  components: { HomeSlider, HomeBanner, ProductSection },
   head: (app) => {
      return  seoMeta.renderMeta('default',app?._i18n?.locale)
   },
  data() {
    return {
      categories: [],
      new_sections: [],
    }
  },
  methods: {
    async getData() {
      const all_data = await HOME_API.gethomeData()
      this.categories = all_data.responseData.categories
    },
    async getSectionData() {
      const all_data = await HOME_API.gethomeSectionData()
      this.new_sections = all_data.responseData.sections
    },

    filterProducts(e) {
      this.suggested_products = e
    },
  },
  created() {
    this.getData()
    this.getSectionData()
  },
  mounted() {
    //setting locale
    if (process.client) {
      localStorage.setItem('locale', this.$i18n.locale)
    }
  },
  watch: {
    '$i18n.locale': {
      handler: function (val) {
        this.getData()
      },
      deep: true,
    },
  },
}
</script>




