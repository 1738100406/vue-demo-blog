<template>
  <div class="showBlog">
    <h3>博客总览</h3>
    <input type="text" v-model="search" placeholder="请输入你要搜索的内容" />
    <div class="article" v-for="(item, i) in searchBlogs" :key="i">
      <router-link :to="'/blog/' + item.id">
        <h4 v-rainbow>{{ item.title | toupcase }}</h4>
        <article>{{ item.body | sinpp }}</article>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {
    async getbloglist() {
      let { data } = await this.$axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );

      console.log(data.splice(0, 10));
      this.blogs = data.splice(0, 10);
    },
  },
  created() {
    this.getbloglist();
  },
  computed: {
    //博客内容搜索
    searchBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.showBlog {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  .article {
    padding: 10px;
    margin: 10px 0;
    background-color: #eee;
  }
}
</style>