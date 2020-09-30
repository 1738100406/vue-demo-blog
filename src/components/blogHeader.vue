<template>
  <div>
    <ul class="header">
      <router-link to="/" exact>
        <li>博客</li>
      </router-link>
      <router-link to="/addblog" exact>
        <li>写博客</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  background-color: #dd1b3f;
}
.header li {
  padding: 10px;
  margin: 10px;
  text-align: center;
  line-height: 15px;

  cursor: pointer;
  color: #fff;
}
.header li:hover {
  color: skyblue;
}
.router-link-active {
  padding: 10px;
  border-radius: 5px;
  background-color: pink;
}
</style>