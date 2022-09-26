<script>
import axios from "axios";
import * as marked from 'marked'
import hljs from "highlight.js";

export default {
  data() {
    return {
      article: {}
    }
  },
  computed: {
    compileHtml() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, {language}).value;
        },
        langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      return marked.parse(String(this.article.content))
    }
  },
  created() {
    console.log(this.$route.params.id)
    axios
        .get("http://localhost:15000/blogs/" + this.$route.params.id)
        .then(response => {
          console.log(response)
          this.article = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>
<template>
  <div class="card">
    <h1 class="card-title">{{ this.article.title }}</h1>
    <div class="card-body text-start">
      <div id="article-content" class="article-content" v-html="compileHtml">
      </div>
    </div>
  </div>
</template>