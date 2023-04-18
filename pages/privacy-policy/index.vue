<template>
<div>
   <section style="background: white; height: 100%;">
		<div class="pt-5 pb-5 container">
			<h3 style="color: #012CDA; text-align: center; ">{{this.pageName}}</h3>
		</div>
	</section>
	<section style="height: 100%;">

		      {{this.description | strippedContent }}
	</section>
</div>	
</template>


<script>

export default {
    data() {
		return {
		  description:'',
		  pageName:'',	
		}
   },
  mounted() {
      this.$axios.get('content-pages/privacy-policy')
        .then((res) => {
          console.log('result : ', res.data.responseData)
			   this.pageName = res.data.responseData?.vPageName
			   this.description = res.data.responseData?.txContent
			   
        })
  },

};
</script>