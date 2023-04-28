<template>
  <div class="row">
    <div class="col-md-3 serch">
      <div class="just d-flex top-nav-search"></div>
    </div>
    <div class="col-md-6">
      <div class="top-nav-search">
        <form class="form" @submit.prevent="setSearchVal">
          <input type="text" class="form-control" v-model="searchVal" placeholder="Search here" id="searchProduct"/>
          <button class="btn" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </div> 


  <!-- <div class="row ">
			<div class="col-md-3 serch">
				<div class="just d-flex top-nav-search">
					<form method="" class="form-width">
						<input type="text" class="form-control" placeholder=" Sort by">
						<button class="btn" type="submit"><i class="fa fa-search"></i></button>
					</form>
					<div>
						<button class="btn1"><i class="fa-solid fa-filter"></i></button>
					</div>
					
				</div>
			</div>
			<div class="col-md-9">
				<div class="top-nav-search">
					<form class="form">
						<input type="text" class="form-control" placeholder="Search here">
						<button class="btn" type="submit"><i class="fa fa-search"></i></button>
					</form>
				</div>
			</div>
			
		</div> -->
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
