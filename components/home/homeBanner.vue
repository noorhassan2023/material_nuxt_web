<template>
  <section class="section meet-doctors bg-white">
	<client-only>
   <carousel v-bind="options" >
	<slide v-for="item in categories" :key="item.id">
      <div class="item">
        <div class="doctor text-center">
          <a href="doctor-details.html">
            <img
              :src="item.vImage"
              :alt="item.vName"
              class="rounded-circle"
              width="150"
              height="150"
            />
            <div class="doctors-name1">{{item.vName}}</div>
          </a>
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
   props: { categories : Array},
   data() {
		return {
		  options: {
				loop: true,
				perPage:5,
				navigationEnabled:false,
				paginationEnabled:false,
				autoplayHoverPause:true,
				autoplayTimeout:3000,
				autoplay:true,
		  },
		}
	  },
}
</script>



