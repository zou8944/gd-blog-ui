<script setup>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Container from './components/Container.vue';
import Profile from './components/Profile.vue';
import Category from './components/Category.vue';
import Tag from './components/Tag.vue';
import Footer from './components/Footer.vue';
</script>
<script>
import BlogList from './components/BlogList.vue';
import BlogPost from './components/BlogPost.vue';

const routes = {
  "/": BlogList,
  "/detail": BlogPost
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    selectedContentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}

</script>

<template>
  <Header></Header>
  <Container>
    <template #menu>
      <Menu></Menu>
    </template>
    <template #content>
      <component :is="selectedContentView"/>
    </template>
    <template #side-card>
      <Profile></Profile>
      <Category></Category>
      <Tag></Tag>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </Container>
</template>

