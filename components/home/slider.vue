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
            <h2 class="text-white">{{ $t('main_page.slogan') }}</h2>
            <h2 class="text-white pb-3">{{ $t('main_page.slogan_sub') }}</h2>

            <div class="row">
              <div class="col-md-6">
                <div class="btn-test">
                  <div class="">
                    <div class="location1 d-flex">
                      <span class="subheading" style="margin-right: 10px">
                        <a
                          href="https://apps.apple.com/us/app/%D9%85%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7%D9%84/id1626095299"
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
                          href="https://play.google.com/store/apps/details?id=com.material.customer"
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
          <img class="hero" src="~/assets/img/Rectangle_51.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media only screen and (max-width: 400px) {
  .banner-content {
    text-align: center !important;
  }
}
</style>