<template>
  <div>
    <div class="container mt-3">
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 product-mar1">
        <div
          class="col card-mar"
          v-for="item in productList.productList"
          :key="item.id"
          data-toggle="modal"
          data-target="#Buy"
        >
          <div class="shadow card-img doctor text-center">
            <a href="#" class="card-a">
              <img
                class="img-water"
                :src="item.vProductImage"
                :alt="item.vProductName"
                width="150"
                height="150"
              />
              <hr class="hr-margin" />
              <div class="doctor-edit doctors-name">
                {{ item.vProductName }} {{ item.vProductUnit }}
              </div>
              <div class="doctors-position1">price</div>
              <div class="doctor-edit size pb-3" style="color: #012cda">
                {{ item.dbOriginalProductPrice }} SAR
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>
    <br />
    <div class="mx-auto row mt-2">
      <b-pagination
        v-model="page"
        :total-rows="productList.totalRecord"
        :per-page="productList.limit"
        class="mx-auto"
      ></b-pagination>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
  props: { productList: Array },
  data() {
    return {
      page: 1,
    }
  },
  watch: {
    page(val) {
      this.$emit('paginate', val)
    },
  },
}
</script>