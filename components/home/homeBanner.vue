<template>
  <section class="section meet-doctors bg-white">
	<client-only>
   <carousel v-bind="options" >
	<slide v-for="item in categories" :key="item.id">
      <div class="item">
        <div class="doctor text-center">
          <a href="doctor-details.html">
            <img
              :src="item.img"
              :alt="item. title"
              class="rounded-circle"
              width="150"
              height="150"
            />
            <div class="doctors-name1">Pepsi</div>
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
      },categories:[
		{"id":1,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":2,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":3,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":4,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":5,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":6,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":7,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":8,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":9,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},
		{"id":10,"img":"~/assets/img/water.png" ,"title":"Dr. Albert Sandoval"},

		
	  ]
    }
  },
}
</script>



