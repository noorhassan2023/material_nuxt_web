<template>
  <section style="background: #f7f7f7">
    <div class="top-edit pt-5 pb-5 container">
      <div class="container">
        <div class="row">
          <div class="cl-md-12">
            <h3 style="color: #8b8b8b">
              Blog <i class="fa-solid fa-angle-right"></i>
              <span style="color: #012cda">{{ blog.blogDetail?.vTitle }}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="padding-img col-md-4">
                <div>
                  <img
                    :src="blog?.blogDetail?.vImage"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
              <div class="padding-img col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ blog.blogDetail?.vTitle }}</h5>
                  <p class="mb-3">
                    Posted on {{ blog.blogDetail?.created_at }}
                  </p>
                  <p class="card-text" v-html="blog.blogDetail?.txContent"></p>
                  <p
                    class="card-text pt-5 pb-5"
                    v-html="blog.blogDetail?.txMetaDescription"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import blogs_api from '~/services/apis/blogs_api'

export default {
  head(){
    return this.headers_data
  },
  computed: {
    headers_data() {
      return {
        title: this.blog.vTitle,
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            name: "description",
            content: this.blog.txMetaDescription
          },
        ],
      }
    },
  },
  data() {
    return {
      blog: {},
    }
  },
  methods: {
    async fetchBlog() {
      this.blog = (await blogs_api.getBlog(this.$route.params.id)).responseData
    },
  },
  created() {
    this.fetchBlog()
  },
}
</script>