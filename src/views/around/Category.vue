<script>
import axios from "axios";
import {fetchCategoryList} from "@/api/query";

export default {
  data() {
    return {
      placeHolderCount: 3,
      loadSucceed: false,
      categories: []
    }
  },
  methods: {
    loadCategories(limit) {
      fetchCategoryList(limit)
          .then(response => {
            console.log(response)
            this.categories = response.data.data
            this.loadSucceed = true
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.loadCategories(10)
  }
}
</script>
<template>
  <div class="row py-2">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">分类</h5>
          <ul class="card-text text-start" v-if="loadSucceed" v-for="category in categories">
            <a href="#">{{ category.name }} ({{ category.blog_count }})</a>
          </ul>
          <ul class="card-text text-start placeholder-glow" v-else v-for="_ in placeHolderCount">
            <span class="placeholder col-12"></span>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>