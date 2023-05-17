<template>
  <section>
    <div class="pt-5 pb-5 mt-5 container">
      <div class="row tow-rtl">
        <div class="cl-md-12">
          <h3 style="color: #012cda">{{ $t('blogs.title') }}</h3>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div
            class="card mb-3"
            v-for="(blog, i) in blogs.data"
            :key="i"
          >
            <div class="row g-0" style="height: 100%">
              <div class="col-md-4">
                <img
                  :src="blog.vImage"
                  class="img-fluid rounded-start"
                  alt="..."
                  style="height: 100%"
                />
              </div>
              <div class="col-md-8">
                <div  :class="$i18n.locale == 'en' ? 'card-body text-left' : 'card-body text-right'">
                  <h5 class="card-title pt-3 pb-3">
                    {{ blog.vTitle }}
                  </h5>
                  <p class="mb-3">
                    <span>{{ $t('blogs.publish') }}</span
                    ><span> {{ blog.created_at }}</span>
                  </p>
                  <p
                    class="card-text pb-4 blog-content"
                    v-html="blog.txContent.substring(0,180)+'..'"
                  > </p>
				  
                  <nuxt-link
                    href="#"
                    clnuxt-linkss="card-text"
                    :to="localePath(`/blogs/${blog.slug}`)"
                    ><span class="text-muted"
                      >{{ $t('blogs.read_more') }}
                    </span>
                  </nuxt-link>
                  <i :class="$i18n.locale == 'en' ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-left'"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="w-100">
            <div class="mx-auto row mt-2">
              <b-pagination
                v-model="page"
                :total-rows="blogs.totalRecord"
                :per-page="blogs.limit"
                class="mx-auto"
              ></b-pagination>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <ul class="nav nav-tabs nav-tabs-top">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#top-tab1"
                        data-toggle="tab"
                        >{{ $t('blogs.popular') }}</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#top-tab2" data-toggle="tab">
                        {{ $t('blogs.trending') }}</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane show active" id="top-tab1">
                      <div
                        class="tab-pane show active"
                        v-for="(pop_blog, k) in popularblogs"
                        :key="k"
                      >
                        <div class="card card-buttom mb-3" style="border: none">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                :src="pop_blog.vImage"
                                class="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div class="col-md-8">
                              <div :class="$i18n.locale == 'en' ? 'card-body text-left' : 'card-body text-right'">
                               <nuxt-link
								href="#"
								clnuxt-linkss="card-text"
								:to="localePath(`/blogs/${pop_blog.slug}`)"
								>
							    <h6 class="card-title">
                                  {{ pop_blog.vTitle }}
                                </h6></nuxt-link>
                                <p class="mb-3">
                                  {{ pop_blog.created_at }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="tab-pane" id="top-tab2">
                      <div
                        class="tab-pane show active"
                        v-for="(trend_blog, k) in trendblogs"
                        :key="k"
                      >
                        <div class="card card-buttom mb-3" style="border: none">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                :src="trend_blog.vImage"
                                class="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
								<nuxt-link
									href="#"
									clnuxt-linkss="card-text"
									:to="localePath(`/blogs/${trend_blog.slug}`)"
									>
                                <h6 class="card-title">
                                  {{ trend_blog.vTitle }}
                                </h6></nuxt-link>
                                <p class="mb-3">
                                  {{ trend_blog.created_at }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
  name: 'all-blogs',
  data() {
    return {
      blogs: [],
      page: 1,
      trendblogs: [],
      popularblogs: [],
    }
  },
  
  methods: {
    async getdata() {
      this.blogs = (await blogs_api.getBlogs()).responseData
    },
    async getPopulardata() {
      this.popularblogs = (
        await blogs_api.getPopularBlog()
      ).responseData.popular_blogs
      this.trendblogs = (
        await blogs_api.getPopularBlog()
      ).responseData.trending_blogs
    },
  },
  created() {
    this.getdata()
    this.getPopulardata()
  },
}
</script>
<style>
.blog-content {
  max-height: 7rem !important;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>