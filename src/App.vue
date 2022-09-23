<script setup>
import BlogList from './components/BlogList.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Container from './components/Container.vue';
import Profile from './components/Profile.vue';
import Category from './components/Category.vue';
import Tag from './components/Tag.vue';
import Footer from './components/Footer.vue';
import BlogPost from './components/BlogPost.vue';

</script>

<template>
  <Header></Header>
  <Container>
    <template #menu>
      <Menu></Menu>
    </template>
    <template #content>
      <!-- <BlogList></BlogList> -->
      <BlogPost></BlogPost>
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

