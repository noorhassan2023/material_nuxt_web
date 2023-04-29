<template>
<div class="container" style="min-height:400px; margin-top: 100px;">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center">
            <h1>404</h1>
            <p>{{$t("main_page.error")}}</p>
				<NuxtLink :to="localePath('/')" class="btn btn-primary">
				   {{$t("main_page.go_to_homepage")}}
				</NuxtLink>
          </div>
        </div>
      </div>
</template>