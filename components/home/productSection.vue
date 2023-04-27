<template>
  <section class="section meet-doctors bg-white" >
<div v-for="(item, i) in sections" :key="i" >
    <div class="text-1 mb-5"  v-if="item.category_id != '-1'">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex justify-content-between px-4">
            <h2 class="text1" style="align-items: center">{{ item.category_name }}</h2>
            <NuxtLink :to="localePath('/products')" class="mt-1 task1">{{
              $t('main_page.more')
            }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        $i18n.locale == 'en'
          ? 'owl-carousel size text-left p-4'
          : 'owl-carousel size text-right p-2'
      "
    >
      <client-only>
        <carousel v-bind="options">
          <slide v-for="(product, i) in item.products" :key="i">
            <div
              class="shadow item1 card"
              data-toggle="modal"
              data-target="#Buy"
            >
              <div class="card-body doctor text-center">
                <a href="#" class="a-edit card-a p-2">
                  <img
                    :src="product.vProductImage"
                    :alt="product.vProductName"
                    class="mx-auto"
                    width="100"
                    height="100"
                  />
                  <hr />
                  <div class="doctors-name">
                    {{ product.vProductName }}{{ product.vProductUnit }}
                  </div>
                  <div :class="$i18n.locale == 'en'? 'doctors-position1 text-left' : 'doctors-position1 text-right'  ">
                    {{ $t('main_page.price') }}
                  </div>
                  <div :class="$i18n.locale == 'en'?  'text-left size p-2 pt-0': 'text-right size p-2 pt-0'">
                    <s> {{ product.dDiscountedProductPrice }} </s
                    ><span class="text-danger" style="font-size: 1rem">
                      {{ product.dbOriginalProductPrice }}</span
                    >
                  </div>
                </a>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
	 </div>
  </section>
 
</template>


<script>
export default {
  props: {
    sections: Array,
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