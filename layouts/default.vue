<template>
  <div :style="$i18n.locale == 'en' ? 'direction: ltr' : 'direction: rtl'">
    <Header />
    <Nuxt />
    <Footer :settingObj="settingObj" />
  </div>
</template>

<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'

export default {
  name: 'Layout',
  components: { Header, Footer },
  computed:{
   settingObj() {
	   return this.$store.state.setting.allsetting;
    },
  },
  methods: {
      getSettingData(){
		this.$store.dispatch('setting/fetchSetting').then((data) => {
	 		console.log(data);
         })
         .catch((e) => {
         })
	  }
  },
  mounted() {
	  this.getSettingData();
  },
}
</script>
<style>
@font-face {
  font-family: 'cairo';
  src: url('../assets/fonts/Cairo-Regular.ttf');
}
#app {
  font-family: cairo !important;
}
</style>