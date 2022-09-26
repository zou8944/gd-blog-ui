<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      page: {
        currentNo: 0,
        count: 1,
        size: 10,
      }
    }
  },
  methods: {
    loadArticles(pageSize, pageNo) {
      axios
          .get("http://localhost:15000/blogs?pageSize=" + pageSize + "&pageNo=" + pageNo)
          .then(response => {
            console.log(response)
            this.articles = response.data.data.articles
            this.page.count = Math.ceil(response.data.data.articleCount / this.page.size)
            this.page.currentNo = pageNo
          })
          .catch(error => {
            console.log(error)
          })
    },
    generateArticleUrl(id) {
      return "/blogs/" + id
    }
  },
  mounted() {
    this.loadArticles(this.page.size, this.page.currentNo + 1)
  }
}
</script>
<template>
  <div class="row">
    <div class="col">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link disabled" v-if="page.currentNo == 1">&lt;&lt;</a>
            <a class="page-link" @click="loadArticles(page.size, page.currentNo - 1)" v-else>&lt;&lt;</a>
          </li>
          <li class="page-item" v-for="no in page.count">
            <a class="page-link" @click="loadArticles(page.size, no)" v-if="no != page.currentNo">{{ no }}</a>
            <a class="page-link active" aria-current="page" v-else>{{ no }}</a>
          </li>
          <li class="page-item">
            <a class="page-link disabled" v-if="page.currentNo == page.count">&gt;&gt;</a>
            <a class="page-link" @click="loadArticles(page.size, page.currentNo + 1)" v-else>&gt;&gt;</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="row py-2" v-for="article in articles">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="card-text text-start">{{ article.summary }}</p>
          <router-link :to="generateArticleUrl(article.id)" class="btn btn-primary">查看全文 ...</router-link>
        </div>
      </div>
    </div>
  </div>
</template>