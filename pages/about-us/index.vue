<template>
  <section>

    <client-only>
      <carousel v-bind="options" class="owl-carousel text-center" :indicator-type="line">
        <slide v-for="(product, i) in categories" :key="i">
           <div class=" active">		
				<div class="container">
				  <div class="text-center">
					<h1 class="pb-5"> About us</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore doloribus molestias, fuga debitis et eum ducimus architecto aperiam enim.</p>
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
      categories:["22222222","1111111111111111","33333333333333"],
	   options: {
        loop: true,
        perPage: 1,
        navigationEnabled: true,
        paginationEnabled: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10000,
        autoplay: true,
         },
      }
    },
   
  }
</script>