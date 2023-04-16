<template>
  <div>
    <Header />
     <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'

export default {
  name: 'Layout',
  components: { Header, Footer },
  mounted(){
    console.log("hello")
  }
}
</script>