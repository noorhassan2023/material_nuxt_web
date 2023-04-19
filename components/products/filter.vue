<template>
	<div class="row  bloda  ">
			<div class="col-md-3 serch  ">
				<div class="just d-flex top-nav-search">
				</div>
			</div>
			<div class="col-md-6 ">
				<div class="top-nav-search">
					<form class="form">
						<input type="text" class="form-control" v-model="searchVal"   placeholder="Search here" id="searchProduct">
						<button class="btn" type="button" @click="setSearchVal"><i class="fa fa-search"></i></button>
					</form>
				</div>
			</div>
			
		</div>
</template>

<script>

export default {
  components: {  },
  data(){
	return {
        searchVal:'',   
	}
  },methods:{
    setSearchVal(){
		//console.log(this.searchVal);
      this.$emit("setSearch",this.searchVal);
    }
  }
}
</script>
