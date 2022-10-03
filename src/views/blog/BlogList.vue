<script>
import * as marked from 'marked'
import hljs from "highlight.js";
import {fetchBlogList} from "@/api/query";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, {language}).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  xhtml: true
});

export default {
  data() {
    return {
      loadSucceed: false,
      placeHolderCount: 3,
      articles: [],
      page: {
        currentNo: 0,
        count: 1,
        size: 10,
      }
    }
  },
  methods: {
    loadArticles(cid, pageSize, pageNo) {
      fetchBlogList(cid, pageSize, pageNo)
          .then(response => {
            console.log(response)
            this.articles = response.data.data.articles
            this.page.count = Math.ceil(response.data.data.articleCount / this.page.size)
            this.page.currentNo = pageNo
            this.loadSucceed = true
            window.scrollTo(0, 0)
          })
          .catch(error => {
            console.log(error)
          })
    },
    parseMarkdown(content) {
      return marked.parse(String(content))
    },
    generateArticleUrl(id) {
      return "/blogs/" + id
    }
  },
  created() {
    let cid = this.$route.query.cid
    this.loadArticles(cid, this.page.size, this.page.currentNo + 1)
  },
  beforeRouteUpdate(to, from, next) {
    let cid = this.$route.query.cid
    this.loadArticles(cid, this.page.size, this.page.currentNo + 1)
    next()
  }
}
</script>
<template>
  <!-- 未加载完成时显示占位符 -->
  <div class="row py-2" v-if="loadSucceed == false" v-for="n in placeHolderCount">
    <div class="col">
      <div class="card">
        <div class="card-body placeholder-glow">
          <h5 class="card-title placeholder col-4"></h5>
          <p class="card-text text-start"><span class="placeholder col-12"></span></p>
          <p class="card-text text-start"><span class="placeholder col-10"></span></p>
        </div>
      </div>
    </div>
  </div>
  <div class="row py-2" v-for="article in articles">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="text-start markdown-list" v-html="parseMarkdown(article.summary)"></p>
          <router-link :to="generateArticleUrl(article.id)" class="btn btn-primary">查看全文 ...</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="row" v-if="loadSucceed">
    <div class="col">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link disabled" v-if="page.currentNo == 1">&lt;&lt;</a>
            <a class="page-link" @click="loadArticles(0, page.size, page.currentNo - 1)" v-else>&lt;&lt;</a>
          </li>
          <li class="page-item" v-for="no in page.count">
            <a class="page-link" @click="loadArticles(0, page.size, no)" v-if="no != page.currentNo">{{ no }}</a>
            <a class="page-link active" aria-current="page" v-else>{{ no }}</a>
          </li>
          <li class="page-item">
            <a class="page-link disabled" v-if="page.currentNo == page.count">&gt;&gt;</a>
            <a class="page-link" @click="loadArticles(0, page.size, page.currentNo + 1)" v-else>&gt;&gt;</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
.markdown-list h1, .markdown-list h2, .markdown-list h3, .markdown-list h4 {
  font-size: 1em;
  font-weight: bold;
}
</style>