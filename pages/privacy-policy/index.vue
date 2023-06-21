<template>
<div>
   <section style="background: white; height: 100%;">
		<div class="pt-5 pb-5 container">
			<h3 style="color: #012CDA; text-align: center; ">{{ pageName}}</h3>
		</div>
	</section>
	<section>
           <div class="pt-5 pb-5 container">
		      {{ description | strippedContent }}
		   </div>	  
	</section>
</div>	
</template>


<script>

import HOME_API from "@/services/apis/home_api"
import seoMeta from '@/services/seoMeta.js'

export default {
	head: (app) => {
	 return  seoMeta.renderMeta('default',app?._i18n?.locale)
    },
    data() {
		return {
		  description:'',
		  pageName:'',	
		}
   },
  methods: {
    async getData() {
		   const res = await HOME_API.getpages('privacy-policy');
          this.pageName = res.data.responseData?.vPageName
		  this.description = res.data.responseData?.txContent
    },
  },
  created() {
      this.getData()
  },
 

};
</script>