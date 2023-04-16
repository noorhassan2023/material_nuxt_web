<template>
<div :dir="$dir()">
	<header class="header">
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-2 float-left">
						<div class="logo">
							<a href="index.html"><img alt="Logo" src="~/assets/img/logo.png" width="56" height="50"></a>
						</div>
					</div>
					<div class="col-md-10">
						<nav class="navbar navbar-expand-md p-0">
							<div class="navbar-collapse collapse" id="navbar">
								<ul class="nav navbar-nav main-nav float-right ml-auto">
									<li class="active nav-item">
										<NuxtLink :to="localePath('/')" class="nav-link">{{$t('main_page.home')}}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink :to="localePath('/about-us')" class="nav-link">{{$t('main_page.about')}}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink :to="localePath('/products')"  class="nav-link">{{$t('main_page.products')}}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink :to="localePath('/contact')" class="nav-link">{{$t('main_page.contact')}}</NuxtLink>
									</li>

									<li class="dropdown nav-item" >
										<nuxt-link class="nav-link"
											v-for="locale in availableLocales"
												:key="locale.code"
												:to="switchLocalePath(locale.code)"
												>
												 <a @click="changeLocale(locale.code)">{{ locale.code.toUpperCase() }}</a> </nuxt-link>

									</li>
								</ul>
								

							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
	</div>
</template>

<script>
	export default {
	name: "Header",
   computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		},
    },
	methods: {
		 changeLanguage() {
           // handleLangaugeChange(this, this.$i18n.locale === 'ar' ? 'en' : 'ar', true)
        },
	}
	};
</script>
