<script>

function build(coll, k, level, ctx) {
  if (k >= coll.length || coll[k].level <= level) {
    return k;
  }
  let node = coll[k];
  ctx.push("<li><a href='#" + node.anchor + "'>" + node.text + "</a>");
  k++;
  let childCtx = [];
  k = build(coll, k, node.level, childCtx);
  if (childCtx.length > 0) {
    ctx.push("<ul>");
    childCtx.forEach(function (idm) {
      ctx.push(idm);
    });
    ctx.push("</ul>");
  }
  ctx.push("</li>");
  k = build(coll, k, level, ctx);
  return k;
}

export default {
  props: ["toc"],
  computed: {
    tocHtml: function () {
      let ctx = [];
      build(this.toc, 0, 0, ctx);
      ctx.push("</ul>");
      return ctx.join("")
    }
  }
}
</script>
<template>
  <div class="row py-2" v-if="toc">
    <div class="col">
      <div class="card">
        <h5 class="card-title">目录</h5>
        <div class="card-body text-start toc-content" v-html="tocHtml">
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.toc-content {
  text-wrap: none;
}
.toc-content a {
  text-decoration: none;
  color: #333;
}
</style>