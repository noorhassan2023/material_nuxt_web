<template>
  <section class="section meet-doctors bg-white">
    <client-only>
      <carousel v-bind="options" class="owl-carousel text-center">
        <slide v-for="item in categories" :key="item.id">
          <div class="item">
            <div class="doctor text-center">
              <div class="custom_btn">
                <NuxtLink :to="localePath('/products?category_id=' + item.id)">
                  <img
                    :src="item.vImage"
                    :alt="item.vName"
                    class="rounded-circle"
                    width="100"
                    height="100"
                  />
                  <div class="doctors-name1">{{ item.vName }}</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
  </section>
</template>

<script>
export default {
  components: {},
  props: { categories: Array },
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
        'per-page-custom': [
          [200, 2],
          [780, 8],
        ],
      },
    }
  },
  methods: {
    filterProduct(category) {
      this.$emit('filtered', category.products)
    },
  },
}
</script>
<style>
.custom_btn {
  cursor: pointer;
}
</style>


