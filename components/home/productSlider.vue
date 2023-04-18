<template>
  <section class="section meet-doctors bg-white">
    <div class="text-1 mb-5">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex justify-content-between px-4">
            <h2 class="text1" style="align-items: center">{{ title }}</h2>
            <a href="#" class="mt-1 task1">{{ $t('main_page.more') }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="owl-carousel text-center">
      <client-only>
        <carousel v-bind="options">
          <slide v-for="(product, i) in products" :key="i">
            <div class="shadow item1" data-toggle="modal" data-target="#Buy">
              <div class="doctor text-center">
                <a href="#" class="a-edit card-a">
                  <img
                    :src="product.vProductImage"
                    :alt="product.vProductName"
                    class=""
                    width="150"
                    height="150"
                  />
                  <hr />
                  <div class="doctors-name">
                    {{ product.vProductName }} {{ product.vProductUnit }}
                  </div>
                  <div class="doctors-position1">Price</div>
                  <div class="size">
                    {{ product.dbOriginalProductPrice }}
                    <span class="text-danger"
                      >{{ product.dDiscountedProductPrice }} SAR</span
                    >
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
      sliders: [
        { id: 1, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 2, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 3, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 4, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 5, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 6, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 7, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 8, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 9, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
        { id: 10, img: '~/assets/img/water.png', title: 'Dr. Albert Sandoval' },
      ],
    }
  },
}
</script>