<script>
import {fetchTagList} from "@/api/query";

export default {
  data() {
    return {
      tags: []
    }
  },
  methods: {
    loadTags(limit) {
      fetchTagList(limit)
          .then(response => {
            this.tags = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.loadTags(10)
  }
}
</script>
<template>
  <div class="row py-2">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">标签</h5>
          <ul class="card-text text-start" v-for="tag in tags">
            <a href="#">{{ tag.name }} ({{ tag.blog_count }})</a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>