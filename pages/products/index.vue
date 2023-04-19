<template>
  <section class="box">
    <ProductFilter @setSearch="handleSearch" />
    <Products :productList="productList" @paginate="paginate" />
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
    }
  },
  methods: {
    async getAllProducts(page) {
      const body =
        this.searchVal.length > 0 ? { vSerchString: this.searchVal } : ''
      const res = await Product_API.getProducts(page, body)
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
