<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: []
    }
  },
  methods: {
    loadCategories(limit) {
      axios
          .get("http://localhost:15000/categories?limit=" + limit)
          .then(response => {
            console.log(response)
            this.categories = response.data.data
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
          <ul class="card-text text-start" v-for="category in categories">
            <a href="#">{{ category.name }} ({{ category.blog_count }})</a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>