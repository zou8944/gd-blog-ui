<script setup>
import Header from './views/around/Header.vue';
import Menu from './views/around/Menu.vue';
import Layout from './layout/Layout.vue';
import Profile from './views/around/Profile.vue';
import Category from './views/around/Category.vue';
import Footer from './views/around/Footer.vue';
import Toc from "@/views/around/Toc.vue";
</script>
<script>
export default {
  data() {
    return {
      toc: ""
    }
  },
  methods: {
    changeToc(toc) {
      this.toc = toc
    }
  }
}
</script>

<template>
  <Header></Header>
  <Layout>
    <template #menu>
      <Menu></Menu>
    </template>
    <template #content>
      <router-view :key="$route.fullPath" @changeToc="changeToc"></router-view>
    </template>
    <template #side-card>
      <Profile></Profile>
      <Toc :toc="toc"></Toc>
      <Category></Category>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </Layout>
</template>

