<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'

export default {
  name: 'Layout',
  components: { Header, Footer },
  mounted() {},
}
</script>