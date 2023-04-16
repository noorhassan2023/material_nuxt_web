<template>
    <section style="background: #F7F7F7;">
		<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <client-only>
			<carousel v-bind="options" >
				<slide >
				<div class="carousel-item">		
				<div class="container">
				  <div class="carousel-caption-edit carousel-caption text-center">
					<h1 class="pb-5"> About us</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore doloribus molestias, fuga debitis et eum ducimus architecto aperiam enim.</p>
				  </div>
				</div>
			  </div>
		     </slide>
			 <slide >
				<div class="carousel-item">		
				<div class="container">
				  <div class="carousel-caption-edit carousel-caption text-center">
					<h1 class="pb-5"> About us</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore doloribus molestias, fuga debitis et eum ducimus architecto aperiam enim.</p>
				  </div>
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
  name: 'AboutUs',
  components: {  },
  data() {
    return {
      options: {
		    loop:true,
			perPage:6,
			navigationEnabled:false,
			paginationEnabled:true,
			autoplayHoverPause:true,
			autoplayTimeout:3000,
			autoplay:true,
			arrows:true,
			dots:true
      }
	}
  }
}
</script>
