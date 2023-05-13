<template>
  <div class="row">
    <div class="col-md-3 serch">
      <div class="just d-flex top-nav-search"></div>
    </div>
    <div class="col-md-6">
      <div class="top-nav-search">
        <form class="form" @submit.prevent="setSearchVal">
          <input
            type="text"
            class="form-control"
            v-model="searchVal"
            :placeholder="$t('products.search')"
            id="searchProduct"
          />
          <button
            :class="
              $i18n.locale == 'en'
                ? 'btn top-nav-search-left'
                : 'btn top-nav-search-right'
            "
            type="submit"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchVal: '',
    }
  },
  methods: {
    setSearchVal() {
      this.$emit('setSearch', this.searchVal)
    },
  },
}
</script>

<style scoped>
.top-nav-search-right {
  left: 16px;
  text-align: end;
}
.top-nav-search-left {
  right: 16px;
  text-align: end;
}
</style>
