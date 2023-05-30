<template>
  <section class="section home-banner row-middle" style="height: 430px">
    <div class="inner-bg"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div
            :class="
              $i18n.locale == 'en'
                ? 'text-left banner-content'
                : 'text-right banner-content'
            "
          >
            <h2 class="text-white">{{ settingObj?.vSolgan }}</h2>

            <div class="row">
              <div class="col-md-6">
                <div class="btn-test">
                  <div class="">
                    <div class="location1 d-flex">
                      <span class="subheading" style="margin-right: 10px">
                        <a
                          :href="settingObj?.app_store"
                          target="_blank"
                        >
                          <img
                            src="~/assets/img/appstore.svg"
                            alt=""
                            class="test-10"
                            style="margin-bottom: 10px"
                        /></a>
                      </span>
                      <span class="mb-3 subheading" style="margin-right: 10px">
                        <a
                          :href="settingObj?.google_play"
                          target="_blank"
                        >
                          <img
                            class="test-10"
                            src="~/assets/img/googleplay.svg"
                            alt=""
                        /></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img class="hero" :src="settingObj && settingObj.vImage != '' ? settingObj.vImage : require('~/assets/img/Rectangle_51.png') " alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {	
  computed:{
   settingObj() {
	   return this.$store.state.setting.allsetting;
    },
  },
}
</script>
<style scoped>
@media only screen and (max-width: 400px) {
  .banner-content {
    text-align: center !important;
  }
}
</style>

