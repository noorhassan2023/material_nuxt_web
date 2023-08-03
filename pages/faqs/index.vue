<template>
   <section style="background: white;">
		<div class="pt-5 pb-5 container">
			<div class="row header-h">
				<div class="cl-md-12">
					<h3 class="padding-h" > {{$t("main_page.faqs_question")}}</h3>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row mt-5 pb-5">
				<div class="col-md-12">
					<h5 style="color:#012CDA ;"> {{$t("main_page.popular_question")}}</h5>

<div id="accordion">
					 <div class="card"  v-for="(item, k) in faqs_arr" :key="k">
						<div class="card-header" :id="`heading`+item.id">
						<h5 class="mb-0">
							<button :class="k == '0' ? 'btn btn-link ' : 'btn btn-link collapsed'"  data-toggle="collapse" :data-target="`#collapse`+item.id" :aria-expanded="k == '0' ? true : false" :aria-controls="`collapse`+item.id">
							 {{ item.vQuestion }}
							</button>
						</h5>
						</div>

						<div :id="`collapse`+item.id" :class="k == '0' ? 'collapse show' : 'collapse'" :aria-labelledby="`heading`+item.id" data-parent="#accordion">
						<div class="card-body">
							 <p v-html="item.tAnswer"></p> 
						</div>
						</div>
					</div>


	
</div>
				</div>
			</div>
		</div>
		
		
	</section>
</template>



<script>
import seoMeta from '@/services/seoMeta.js'
import faqs_api from '~/services/apis/faqs_api'

export default {
  head: (app) => {
	 return  seoMeta.renderMeta('default',app?._i18n?.locale)
  },
  data() {
    return {
      faqs_arr:[],
    }
  },
   methods: {
    async getfaqsdata() {
      this.faqs_arr = (await faqs_api.getFaqs()).responseData;
	  console.log(this.faqs_arr);
    },
  },
  created() {
    this.getfaqsdata()
  },
}
</script>
<style scoped>
.visually-hidden {
  color: black !important;
}
h5 > button {
	background-color:rgba(0,0,0,0);
	border:none;
}
</style>