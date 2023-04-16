<template>
<div>
	 
	<section>
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center contact" >{{$t("contact.contact-us")}}</h2>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<form action="">
						<div class="row">
							<div class="col-xl-6">
								<div class="form-group row">
									<label class=" col-form-label">{{$t("contact.name")}}</label>
									<div class="col-lg-12">
										<input type="text" class="form-control">
									</div>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="form-group row">
									<label class=" col-form-label">{{$t("contact.e-mail")}}</label>
									<div class="col-lg-12">
										<input type="email" class="form-control">
									</div>
								</div>
								
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group row">
									<label class=" col-form-label"> {{$t("contact.object")}}</label>
									<div class="col-lg-12">
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="form-group row">
									<label class=" col-form-label">{{$t("contact.message")}} </label>
									<div class="col-lg-12">
										<textarea rows="8" cols="5" class="form-control" ></textarea>
									</div>
								</div>
							</div>
						</div>
						<div class="btn-center">
							<button type="submit" class="btn btn-blue">{{$t("contact.submit")}}</button>
						</div>
					</form>
				</div>
				<div class="location-div col-md-6">
					<div class="padding-loc location-drive d-flex">
						<i class=" Location fa-solid fa-location-dot"></i>
						<div >
							<h4 class="location-h" >{{$t("contact.reach-us")}}</h4>
							<p class="location-p">Almasthar Alshamali</p>
						</div>
					</div>
					<div class="location-drive d-flex">
						<i class="Location fa-solid fa-envelope"></i>
						<div>
							<h4 class="location-h" >{{$t("contact.email-us")}}</h4>
							<p class="location-p"> info@material.sa</p>
						</div>
					</div>
					<div class="location-drive d-flex">
						<i class="Location fa-solid fa-mobile-screen-button"></i>
						<div>
							<h4 class="location-h" >{{$t("contact.call-us")}}</h4>
							<p class="location-p"> +965865959659</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	 
  </div>
</template>


<script>

export default {
};
</script>