<template>
<section class="rectangle_home" style="height: 95%; background: white;">
        <div id="carouselExampleDark" class="carousel carousel-dark slide mx-auto"  data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <img src="~/assets/img/about_background.png" width="1460" height="820" class="img"
                        alt="...">
                <div class="carousel-item active" style="background-color: white;" >
                    <div class="container">
                        <div class="carousel-caption-edit carousel-caption text-center">
                            <h1 class="pb-5 carousel-about" style="font-weight: 700;"> About Us</h1>
                            <p class="about-desc">The Material Store collects most types of imported and local water & drinks and is characterized by fast delivery of products in all areas of Riyadh. </p>
                            
                        </div>
                    </div>
                </div>

                <div class="carousel-item ">
                    <div class="container">
                        <div class="carousel-caption-edit carousel-caption text-center ">
                            <h1 class="pb-5 carousel-why" style="font-weight: 700;">Why Material</h1>
                            <div class="row why_material-img mx-auto">
                                <div class="col mt-3">
                                    <img class="about-image-1" src="~/assets/img/ha.png" alt="">
                                </div>
                                <div class="col">
                                    <img class="about-image-1" src="~/assets/img/ha1.png" alt="">
                                </div>
                                <div class="col mt-3">
                                    <img class="about-image-1" src="~/assets/img/ha2.png" alt="">
                                </div>
                                <div class="col">
                                    <img class="about-image-1" src="~/assets/img/ha3.png" alt="">
                                </div>
                                <div class="col mt-3">
                                    <img class="about-image-1" src="~/assets/img/ha4.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    <!-- <section style="background: #F7F7F7;">
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
</section> -->
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
