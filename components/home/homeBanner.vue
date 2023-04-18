<template>
  <section class="section meet-doctors bg-white">
    <client-only>
      <carousel v-bind="options">
        <slide v-for="item in categories" :key="item.id" >
          <template >
            <div class="item">
              <div class="doctor text-center">
                <a @click="filterProduct(item)">
                  <img
                    :src="item.vImage"
                    :alt="item.vName"
                    class="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <div class="doctors-name1">{{ item.vName }}</div>
                </a>
              </div>
            </div>
          </template>
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
        perPage: 5,
        navigationEnabled: false,
        paginationEnabled: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        autoplay: true,
      },
    }
  },
  methods:{
    filterProduct(category){
      this.$emit("filtered", category.products)
    }
  }
}
</script>



