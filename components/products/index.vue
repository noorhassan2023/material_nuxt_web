<template>
  <div>
    <div class="container">
      <div
        class="row row-cols-2 row-cols-md-4 row-cols-lg-5 pb-5 mt-5"
        id="product-list"
      >
        <div
          class="col-6 card-mar col-md-3"
          v-for="item in productList.productList"
          :key="item.id"
        >
          <div class=" shadow card-img doctor text-center">
            <NuxtLink :to="localePath('/products/' + item.biProductId + '?' +messageWithoutSpaces(item.vProductName))" class=" card-a">
              <div class="card-body doctor">
                <img
                  :src="item.vProductImage"
                  :alt="item.vProductName"
                  class=""
                  width="100"
                  height="100"
                />
                <hr />
                <div
                  :class="
                    $i18n.locale == 'en'
                      ? 'doctors-name text-left'
                      : 'doctors-name text-right'
                  "
                >
                  {{ item.vProductName }}
                </div>
                <div
                  :class="
                    $i18n.locale == 'en'
                      ? 'doctors-name text-left'
                      : 'doctors-name text-right'
                  "
                >
                  {{ item.vProductUnit }}
                </div>
                <div
                  :class="
                    $i18n.locale == 'en'
                      ? 'doctors-position1 text-left'
                      : 'doctors-position1 text-right'
                  "
                >
                  {{ $t('main_page.price') }}
                </div>
                <div
                  :class="
                    $i18n.locale == 'en' ? 'size text-left' : 'size text-right'
                  "
                >
                  <s
                    style="font-size: 0.8rem"
                    class="text-danger"
                    v-if="
                      item.dDiscountedProductPrice !=
                      item.dbOriginalProductPrice
                    "
                  >
                    {{ item.dbOriginalProductPrice }}
                  </s>
                  <span style="font-size: 1rem">
                    {{ item.dDiscountedProductPrice }}
                    {{ $t('main_page.sar') }}</span
                  >
                </div>
              </div></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

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

<style scoped>
div.shadow.item1.card {
  width: 200px !important;
}

.text-danger {
  font-size: 14px;
}
.card {
  width: 250px;
  height: 250px;
}

.card-img {
  border-radius: 13px;
  box-shadow: 0 0 3px 0px;
}
.card-a {
  width: 100%;
  text-decoration: none;
}
.card-mar{
	margin-bottom: 30px;
}
</style>