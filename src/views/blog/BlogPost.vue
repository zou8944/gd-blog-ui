<script>
import * as marked from 'marked'
import hljs from "highlight.js";
import {fetchBlogDetail} from "@/api/query";

export default {
  methods: {
    updateToc(toc) {
      this.$emit("changeToc", toc)
    }
  },
  data() {
    return {
      loadSucceed: false,
      article: {}
    }
  },
  computed: {
    compileHtml() {
      const toc = [];
      const renderer = (function () {
        const renderer = new marked.Renderer();
        renderer.heading = function (text, level, raw) {
          const anchor = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w\\u4e00-\\u9fa5]]+/g, '-');
          toc.push({
            anchor: anchor,
            level: level,
            text: text
          });
          return '<h' + level + ' class="anchor" id="' + anchor + '">' + text + '</h' + level + '>\n';
        }
        return renderer
      })();
      marked.setOptions({
        renderer: renderer,
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
      let contentHtml = marked.parse(String(this.article.content))
      this.updateToc(toc)
      return contentHtml
    }
  },
  created() {
    fetchBlogDetail(this.$route.params.id)
        .then(response => {
          this.article = response.data.data
          this.loadSucceed = true
        })
        .catch(error => {
          console.log(error)
        })
  },
  beforeUnmount() {
    this.updateToc("")
  }
}
</script>
<template>
  <div class="row py-2" v-if="loadSucceed == false">
    <div class="col">
      <div class="card placeholder-glow">
        <h1 class="card-title">
          <span class="placeholder col-6"></span>
        </h1>
        <div class="card-body text-start">
          <span class="placeholder col-12"></span>
          <span class="placeholder col-12"></span>
          <span class="placeholder col-6"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="row py-2" v-else>
    <div class="col">
      <div class="card">
        <h2 class="card-title">{{ this.article.title }}</h2>
        <div class="card-body text-start">
          <div id="article-content" class="article-content" v-html="compileHtml">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  padding-top: 1em;
}

#article-content img {
  max-width: 100%;
}

#article-content h1 {
  font-size: 1.6em;
}

#article-content h2 {
  font-size: 1.4em;
}

#article-content h3 {
  font-size: 1.2em;
}

#article-content h4 {
  font-size: 1.0em;
}
</style>