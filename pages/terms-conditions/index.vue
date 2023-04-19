<template>
<div>
   <section style="background: white; height: 100%;">
		<div class="pt-5 pb-5 container">
			<h3 style="color: #012CDA; text-align: center; ">{{this.pageName}}</h3>
		</div>
	</section>
	<section>
            <div class="pt-5 pb-5 container">
		      {{this.description | strippedContent }}
		   </div>	  
	</section>
</div>	
</template>


<script>
import HOME_API from "@/services/apis/home_api"

export default {
    data() {
		return {
		  description:'',
		  pageName:'',	
		}
   },
   methods: {
		async getData() {
			const res = await HOME_API.getpages('terms-and-conditions');
			this.pageName = res.data.responseData?.vPageName
			this.description = res.data.responseData?.txContent
		},
  },created() {
      this.getData()
  }

};
</script>