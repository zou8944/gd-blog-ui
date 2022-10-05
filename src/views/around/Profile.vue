<script>
import {fetchSiteInfo} from "@/api/query";

export default {
  data() {
    return {
      author: {},
      statistics: {}
    }
  },
  methods: {
    requestProfile() {
      fetchSiteInfo()
          .then(res => {
            this.author = res.data.data.author
            this.statistics = res.data.data.statistics
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.requestProfile()
  }
}
</script>
<template>
  <div class="row py-2 author_profile" style="font-size: 80%; color: #555555">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row py-1">
            <div class="col">
              <img :src="author.avatar" alt="头像" style="border-radius: 20px;"/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              {{ author.desc }}
            </div>
          </div>
          <div class="row py-1">
            <div class="col" style="border-right: solid">
              <div>{{ statistics.blog_count }}</div>
              <div>写作</div>
            </div>
            <div class="col" style="border-right: solid">
              <div>{{ statistics.category_count }}</div>
              <div>分类</div>
            </div>
            <div class="col">
              <div>{{ statistics.tag_count }}</div>
              <div>标签</div>
            </div>
          </div>
          <div class="row py-1">
            <div class="col" style="font-size: 80%;">
              <a :href="author.csdn" style="text-decoration: none; color: #1a1e21;">低质博客平台</a>
            </div>
            <div class="col" style="font-size: 80%;">
              <a :href="author.github" style="text-decoration: none; color: #1a1e21;">同性交友网站</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>