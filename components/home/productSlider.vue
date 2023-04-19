<template>
  <section class="section meet-doctors bg-white">
    <div class="text-1 mb-5">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex justify-content-between px-4">
            <h2 class="text1" style="align-items: center">{{ title }}</h2>
            <NuxtLink :to="localePath('/products')" class="mt-1 task1">{{
              $t('main_page.more')
            }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div :class="$i18n.locale == 'en'? 'owl-carousel size text-left p-2': 'owl-carousel size text-right p-2'">
      <client-only>
        <carousel v-bind="options">
          <slide v-for="(product, i) in products" :key="i">
            <div class="shadow item1 card" data-toggle="modal" data-target="#Buy">
              <div class="doctor">
                <a href="#" class="a-edit card-a p-2">
                  <img
                    :src="product.vProductImage"
                    :alt="product.vProductName"
                    class="mx-auto"
                    width="100"
                    height="100"
                  />
                  <hr />
                  <div class="h6">
                    {{ product.vProductName }} {{ product.vProductUnit }}
                  </div>
                  <div class="">Price</div>
                  <div >
                    {{ product.dbOriginalProductPrice }}
                    <span class="text-danger"> SAR</span>
                  </div>
                </a>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    title: String,
    products: Array,
    type: String,
  },
  data() {
    return {
      options: {
        loop: true,
        perPage: 8,
        navigationEnabled: false,
        paginationEnabled: false,
        autoplayHoverPause: true,
        autoplayTimeout: 10000,
        autoplay: false,
      },
    }
  },
}
</script>