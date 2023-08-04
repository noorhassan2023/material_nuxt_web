<template>
  <section class="blog-details mt-16">
    <v-container v-if="singleBlog && isBlogs">
     
    </v-container>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "dddddddddd"
    }
  },

  components: {

  },
  data() {
    return {
      img: '@/assets/img/global/Avatar.png',
      panelShow: [1, 0],
	  singleBlog:Object,
	  isBlog:false
    }
  },
  computed: {
  },
  methods: {
  
  },
  created() {
    // if (!this.isBlogs) {
    //   this.$router.push(this.localePath(`/`))
    // } else {
    //   this.$store
    //     .dispatch('website/blogs/getSingleBlog', this.$route.params.id)
    //     .then(() => {
    //       this.initReplyForm()
    //       if (this.allBlogs == 0) {
    //         this.$store.dispatch('website/blogs/fetchBlogs', { page: 1 })
    //       }
    //     })
    // }
  },
}
</script>
<style scoped lang="scss">
.v-list {
  background: transparent !important;
}
.v-card {
  overflow: hidden;
  position: relative;
  border: none;
  border-radius: 7px;
  box-shadow: 5px 6px 5px 1px rgb(0 0 0 / 75%) !important;
  border: 2px solid transparent;
  background: transparent;
  height: auto;
}

.nuxt-link-exact-active.nuxt-link-active .v-card {
  box-shadow: 1px 1px 5px 1px rgb(159 118 43 / 75%) !important;
}

.panel-header {
  background: transparent;
  color: #ffffff !important;
  box-shadow: none !important;
  text-transform: uppercase;
  font-weight: 500;
}

.active-replies {
  min-width: 100%;
  box-shadow: 5px 6px 5px 1px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
}

.form-reply-container .v-expansion-panel-content__wrap {
  padding: 0rem !important;
}
.title {
  background: transparent !important;
}
.v-expansion-panel-content .v-expansion-panel-content__wrap {
  padding: 0rem !important;
}
.art-title {
  padding: 0px 10px;
  cursor: pointer;
  position: relative;
  color: #6c6c6c;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    background: #9f762b;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    left: -3px;
    transform: translate(-50%, -50%);
  }
}
.art-title.dir_left {
  &:after {
    left: unset;
    right: -14px;
  }
}
</style>
