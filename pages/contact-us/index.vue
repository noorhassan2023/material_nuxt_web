<template>
  <div>
    <section>
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-center contact">{{ $t('contact.contact-us') }}</h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div :class="$i18n.locale == 'ar'? 'col-md-6 tow-rtl': 'col-md-6'">
            <form method="post" @submit.prevent="SubmitContact">
              <div class="row">
                <div class="col-xl-6">
                  <div class="form-group row">
                    <label class="col-form-label">{{
                      $t('contact.name')
                    }}</label>
                    <div class="col-lg-12">
                      <input type="text" v-model="vName" class="form-control" required/>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="form-group row">
                    <label class="col-form-label">{{
                      $t('contact.e-mail')
                    }}</label>
                    <div class="col-lg-12">
                      <input
                        type="email"
                        v-model="vEmailId"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group row">
                    <label class="col-form-label"
                      >{{ $t('contact.message') }}
                    </label>
                    <div class="col-lg-12">
                      <textarea
                        rows="8"
                        cols="5"
                        v-model="txDescription"
                        class="form-control"
						required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-center">
                <button type="submit" class="btn btn-blue">
                  {{ $t('contact.submit') }}
                </button>
              </div>
            </form>
          </div>
          <div  :class="$i18n.locale == 'ar'? 'location-div col-md-6 tow-rtl': 'location-div col-md-6'" >
					<div class="padding-loc location-drive d-flex">
						<i class=" Location fa-solid fa-location-dot"></i>
						<div :class="$i18n.locale == 'ar'? 'loc': ''" >
							<h4 class="location-h" > {{ $t('contact.reach-us') }}</h4>
							<p class="location-p">{{settingObj?.address}}</p>
						</div>
					</div>
					<div class="location-drive d-flex">
						<i class="Location fa-solid fa-envelope"></i>
						<div class="loc">
							<h4 class="location-h">  {{ $t('contact.email-us') }}</h4>
							<p class="location-p"> {{ settingObj?.Email}}</p>
						</div>
					</div>
					<div class="location-drive d-flex padding-loc1">
						<i class="Location fa-solid fa-mobile-screen-button"></i>
						<div class="loc ">
							<h4 class="location-h" >  {{ $t('contact.call-us') }}</h4>
							<p class="location-p">{{ settingObj?.phone}}</p>
						</div>
					</div>
				</div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import CONTACT_API from '@/services/apis/contact_api'
import seoMeta from '@/services/seoMeta.js'

export default {
  head: (app) => {
	 return  seoMeta.renderMeta('default',app?._i18n?.locale)
  },
  data() {
    return {
      vName: '',
      vEmailId: '',
      txDescription: '',
    }
  },
  computed:{
   settingObj() {
	   return this.$store.state.setting.allsetting;
    },
  },
  methods:{
    async SubmitContact() {
	try{	
      const res = await CONTACT_API.postContactUs({vName: this.vName,
								vEmailId: this.vEmailId,txDescription: this.txDescription})
	      this.$toast.success(res.data.responseMessage)
	    }catch (error) {
          this.$toast.error('server error ...!')
      }
    },
  },
}
</script>