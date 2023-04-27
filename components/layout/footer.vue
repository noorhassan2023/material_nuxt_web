<template>
  <footer class="footer" >
    <div class="footer-top ">
      <div class="container">
        <div class="row footer-edit" >
          <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="footer-widget">
              <div class="about-clinic text-center">
                <img class="ml-auto" src="~/assets/img/Logo-2.png" alt="" style="width: 60%" />
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-md-4 text-center" >
            <div class="footer-widget">
              <h4 class="footer-title">{{ $t('main_page.material') }}</h4>
              <ul class="footer-menu">
                <li>
                  <NuxtLink :to="localePath('/about-us')">{{
                    $t('main_page.about')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/products')">{{
                    $t('main_page.products')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/blogs')">{{
                    $t('main_page.blogs')
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-md-4 text-center">
            <div class="footer-widget">
              <h4 class="footer-title">{{ $t('main_page.help') }}</h4>
              <ul class="footer-menu">
                <li>
                  <NuxtLink :to="localePath('/faqs')">{{
                    $t('main_page.faqs')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/terms-conditions')">{{
                    $t('main_page.terms_conditions')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/privacy-policy')">{{
                    $t('main_page.privacy_policy')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/contact')">{{
                    $t('main_page.contact')
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom" style="border: none;">
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-12">
              <div class="copy-text text-center">
                <div class="appointment-btn">
                  <ul class="social-icons clearfix">
                    <li>
                      <a href="#" target="_blank" title="twitter"
                        ><i class="fab fa-twitter"></i
                      ></a>
                    </li>

                    <li>
                      <a href="#" target="_blank" title="instagram"
                        ><i class="fab fa-instagram"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="linkedin-in"
                        ><i class="fab fa-linkedin-in"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>