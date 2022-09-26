<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">果冻</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">博客</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">关于</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="输入你想查找的内容" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">搜</button>
        </form>
      </div>
    </div>
  </nav>
</template>