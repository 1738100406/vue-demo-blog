<template>
  <div>
    <article>
      <h3>{{ blog.title }}</h3>
      <p>{{ blog.body }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$axios
      .get(`http://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((res) => {
        console.log(res.data);
        this.blog = res.data;
        // console.log(this.$route.params.id);
      });
  },
};
</script>

<style scoped>
article {
  width: 300px;
  height: 200px;
  margin: 10px auto;
  padding: 20px;
  background-color: #eee;
  border-radius: 5px;
}
article h3 {
  text-align: center;
  margin: 10px 0;
}
article p {
  text-indent: 1em;
}
</style>