<script>
export default {
  methods: {
    alertBlogAddress() {
      alert('确实是瞎写的🤔')
    }
  }
}
</script>
<template>
  <p>粤ICP不需要备案</p>
  <p>由<b id="blogAddress" @click="alertBlogAddress()">果冻瞎写的博客</b>强力驱动</p>
  <br/>
</template>
<style scoped>
p {
  font-size: 12px;
  margin: 2px;
}

#blogAddress:hover {
  cursor: pointer;
}
</style>