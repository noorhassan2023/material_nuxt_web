<template>
  <div>
    <header class="header">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-md-2 float-left">
              <div class="logo">
                <NuxtLink :to="localePath('/')">
                  <img alt="Logo" src="~/assets/img/logo.png"
                /></NuxtLink>
              </div>
            </div>
            <div class="col-md-10">
              <nav class="navbar navbar-expand-md p-0">
                <div class="navbar-collapse collapse" id="navbar">
                  <ul
                    :class="
                      $i18n.locale == 'en'
                        ? 'nav navbar-nav main-nav float-right ml-auto'
                        : 'nav navbar-nav main-nav float-left mr-auto'
                    "
                  >
                    <li class="active nav-item">
                      <NuxtLink :to="localePath('/')" class="nav-link">{{
                        $t('main_page.home')
                      }}</NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink
                        :to="localePath('/about-us')"
                        class="nav-link"
                        >{{ $t('main_page.about') }}</NuxtLink
                      >
                    </li>
                    <li class="nav-item">
                      <NuxtLink
                        :to="localePath('/products')"
                        class="nav-link"
                        >{{ $t('main_page.products') }}</NuxtLink
                      >
                    </li>
                    <li class="nav-item">
                      <NuxtLink :to="localePath('/contact')" class="nav-link">{{
                        $t('main_page.contact')
                      }}</NuxtLink>
                    </li>

                    <li class="dropdown nav-item custom_btn">
                      <div
                        class="nav-link a"
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        @click="changeLocale()"
                      >
                        <b>{{ locale.code.toUpperCase() }}</b>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

    <header class="mobile-header">
      <div class="panel-control-left">
        <a class="toggle-menu" href="#" v-b-toggle.sidebar-1
          ><i class="fas fa-bars"></i
        ></a>
        <!-- <a class="toggle-menu" href="#side_menu"><i class="fas fa-bars"></i></a> -->
      </div>
      <div class="page_title">
        <NuxtLink :to="localePath('/')">
          <img
            src="~/assets/img/logo.png"
            alt="Logo"
            class="img-fluid"
            width="60"
            height="60"
        /></NuxtLink>
      </div>
    </header>

    <!-- <div class="sidebar sidebar-menu" id="side_menu">-->
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="sidebar-inner slimscroll">
        <a id="close_menu" href="#"><i class="fas fa-times"></i></a>
        <ul class="mobile-menu-wrapper" style="display: block">
          <li class="active">
            <div class="mobile-menu-item clearfix">
              <NuxtLink :to="localePath('/')">{{
                $t('main_page.home')
              }}</NuxtLink>
            </div>
          </li>
          <li>
            <div class="mobile-menu-item clearfix">
              <NuxtLink :to="localePath('/about-us')">{{
                $t('main_page.about')
              }}</NuxtLink>
            </div>
          </li>
          <li>
            <div class="mobile-menu-item clearfix">
              <NuxtLink :to="localePath('/products')">{{
                $t('main_page.products')
              }}</NuxtLink>
            </div>
          </li>
          <li>
            <div class="mobile-menu-item clearfix">
              <NuxtLink :to="localePath('/contact')">{{
                $t('main_page.contact')
              }}</NuxtLink>
            </div>
          </li>

          <li class="mobile-menu-item clearfix custom_btn">
            <div
              class="nav-link a"
              style="font-weight: bold"
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="changeLocale()"
            >
              {{ locale.code.toUpperCase() }}
            </div>
          </li>
        </ul>
      </div>
    </b-sidebar>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    changeLocale() {
      this.$i18n.locale == 'en'
        ? (this.$i18n.setLocale('ar'), localStorage.setItem('locale', 'ar'))
        : (this.$i18n.setLocale('en'), localStorage.setItem('locale', 'en'))
    },
  },
}
</script>
