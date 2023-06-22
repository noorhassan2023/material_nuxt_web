<template>
<b-overlay
      id="overlay-background"
      variant="grey"
      :show="!isLoaded"
      style="min-height: 50vh"
    >
  <section style="background: #f7f7f7">

	
			<div class="top-edit pt-5 pb-5 container">
			<div class="container">
				<div class="row">
				<div class="cl-md-12">
					<h3 style="color: #8b8b8b">
					{{$t('main_page.blogs')}}  <i :class="$i18n.locale == 'en' ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-left'"></i>
					<span style="color: #012cda">{{ blog?.vTitle }}</span>
					</h3>
				</div>
				</div>
			</div>
			</div>
			<div class="container" >
				<div class="row" v-if="isExist">
					<div class="col-md-12">
					<div class="card mb-3">
						<div class="row g-0">
						<div class="padding-img col-md-4">
							<div>
							<img
								:src="blog?.vImage"
								class="img-fluid rounded-start"
								alt="..."
							/>
							</div>
						</div>
						<div class="padding-img col-md-8">
							<div :class="$i18n.locale == 'en' ? 'card-body text-left' : 'card-body text-right'">
							<h5 class="card-title">{{ blog?.vTitle }}</h5>
							<p class="mb-3">
								{{ $t('blogs.publish') }}  {{ blog?.created_at }}
							</p>
							<p class="card-text" v-html="blog?.txContent"></p>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			 <div class="row" v-else>
					<div class="col-md-6 offset-md-3 text-center">
					<h4>{{ $t('blogs.not_found') }}</h4>
					<NuxtLink :to="localePath('/blogs')" class="btn btn-primary">
						{{ $t('blogs.go_to_blogs') }}
					</NuxtLink>
					</div>
			</div>
			</div>
	      
    	
  </section>
  </b-overlay>
</template>
<script>
import blogs_api from '~/services/apis/blogs_api'

export default {
  head(){
	return {
     title: this.blog.vTitle,
        meta: [
                { hid: 'og:title', name : 'og:title',property: 'og:title', content: this.blog?.vTitle },
				{ hid: 'title', name : 'title', content: this.blog?.vTitle },
				{ hid: 'og:description', name : 'og:description', property: 'og:description',content: this.strippedHtml },
				{ hid: 'description', name : 'description', content: this.strippedHtml  },
				{ hid: 'og:image', name : 'og:image', property: 'og:image',content: this.blog?.vImage },
                { hid: 'keywords', name: 'keywords', content: this.$t("meta.keywords") },
        ],
	}
  },
  async fetch() {
         // fetch data from API
        try {
		  const blogId = this.$route.params.id
          const res = await blogs_api.getBlog(blogId)
	      this.isExist = res.responseCode == 200 ? true : false
			if (this.isExist)
				this.blog = res.responseData?.blogDetail
				this.$nuxt.$forceUpdate()
				this.isLoaded = true
        } catch (error) {
            // Redirect to error page or 404 depending on server response
      }
    },	
  data() {
    return {
      blog: Object,
	  isLoaded:false,
	  isExist: false
    }
  },
  computed:{
        strippedHtml() {
            let regex = /(<([^>]+)>)/ig;
			return this.blog.txMetaDescription ? 
                   this.blog?.txMetaDescription.replace(regex, "") : '' ;
    }
  }
}
</script>