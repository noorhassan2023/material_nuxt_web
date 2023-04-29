<template>
  <section style="min-height: 50vh !important">
    <h1 class="pb-5 text-center" style="margin-top: 12rem; color: blue">
      About us
    </h1>
    <client-only>
      <carousel
        v-bind="options"
        class="text-center"
        paginationColor="gray"
        paginationActiveColor="blue"
      >
        <slide v-for="item in 1" :key="item">
          <div class="item">
            <div class="doctor text-center">
              <div class="custom_btn text-center mx-auto" style="padding: 4rem !important">
                {{ $t("about.content") }}
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
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        navigationEnabled: true,
        paginationEnabled: false,
        autoplayHoverPause: true,
        autoplayTimeout: 10000,
        autoplay: true,
      },
    }
  },
}
</script>
<style scoped>
.visually-hidden {
  color: black !important;
}
</style>