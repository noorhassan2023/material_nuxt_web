<template>
  <section class="box">
    <b-overlay
      id="overlay-background"
      variant="grey"
      :show="!isLoaded"
      style="min-height: 100vh"
    >
      <ProductFilter @setSearch="handleSearch" />
      <div v-if="isLoaded">
        <Products :productList="productList" @paginate="paginate" />
      </div>
    </b-overlay>
  </section>
</template>


<script>
import Products from '@/components/products/index.vue'
import ProductFilter from '@/components/products/filter.vue'
import Product_API from '@/services/apis/product_api'

export default {
  components: { Products, ProductFilter },
  data() {
    return {
      productList: [],
      searchVal: '',
      isLoaded: false,
    }
  },
  computed: {
    category_id() {
      return this.$route?.query?.category_id
    },
  },
  methods: {
    async getAllProducts(page) {
      const searchParam =
        this.searchVal.length > 0 ? { vSerchString: this.searchVal } : ''
      const CategoyParam =
        this.category_id != 'undefined' ? { iCategoryId: this.category_id } : ''

      const body = { ...searchParam, ...CategoyParam }
      const res = await Product_API.getProducts(page, body)
      this.isLoaded = true
      this.productList = res.data.responseData
    },
    async handleSearch(e) {
      this.searchVal = e
      this.getAllProducts()
    },
    paginate(e) {
      this.getAllProducts(e)
    },
  },
  created() {
    this.getAllProducts()
  },
}
</script>
<style scoped>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: blue;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>