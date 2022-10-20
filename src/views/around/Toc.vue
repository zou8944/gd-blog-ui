<script>
export default {
  props: ["toc"],
  data() {
    return {
      activeAnchor: ""
    }
  },
  methods: {
    loadScroll() {
      // 找出当前屏幕显示的最顶部的标题
      let actualOffsetTop = document.documentElement.scrollTop || document.body.scrollTop;
      let articleElement = document.getElementById("article-content")
      let fixOffsetTop = articleElement.offsetTop + articleElement.parentElement.offsetTop
      let anchors = document.getElementsByClassName("anchor")
      for (let i = anchors.length - 1; i >= 0; i--) {
        if (actualOffsetTop >= anchors[i].offsetTop + fixOffsetTop + 50) {
          this.activeAnchor = anchors[i].textContent
          break
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.loadScroll, true)
  }
}
</script>
<template>
  <div class="row py-2 position-fixed start-0" v-if="toc" style="top: 30% !important; left: 1% !important; z-index: -1">
    <div class="col">
      <div class="card">
        <h5 class="card-title">目录</h5>
        <div class="card-body text-start toc-content">
          <div class="card-text"  v-for="item in toc">
            <div v-if="item.text == this.activeAnchor" :class="'toc-heading-' + item.level" class="toc-active">
              <a :href="'#' + item.anchor">{{ item.text }}</a>
            </div>
            <div v-else :class="'toc-heading-' + item.level">
              <a :href="'#' + item.anchor">{{ item.text }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.toc-content li {
  position: relative;
  display: table;
}

.toc-content ul {
  padding-left: 20px;
}

.toc-content .toc-active {
  font-weight: bold;
}

.toc-content a {
  text-decoration: none;
  color: #333;
}

.toc-heading-1 {
  margin-left: 0em;
}

.toc-heading-2 {
  margin-left: 1em;
}

.toc-heading-3 {
  margin-left: 2em;
}

.toc-heading-4 {
  margin-left: 3em;
}

.toc-heading-5 {
  margin-left: 4em;
}

.toc-heading-6 {
  margin-left: 5em;
}

</style>