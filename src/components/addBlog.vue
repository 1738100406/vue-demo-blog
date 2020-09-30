<template>
  <div class="main">
    <div class="addBlog">
      <h3 class="title">添加博客</h3>
      <h3 v-if="submited">添加博客成功</h3>
      <form @submit.prevent="addblog" v-if="!submited">
        <label>博客标题</label><input v-model="blog.title" type="text" />
        <label>博客内容</label>
        <textarea v-model="blog.content" name="" id=""></textarea>
        <div class="checkboxs">
          <label>Vue.js</label>
          <input v-model="blog.categorites" type="checkbox" value="vue.js" />
          <label>Node.js</label>
          <input v-model="blog.categorites" type="checkbox" value="Node.js" />
          <label>React.js</label>
          <input v-model="blog.categorites" type="checkbox" value="React.js" />
          <label>Angualar.js</label>
          <input
            v-model="blog.categorites"
            type="checkbox"
            value="Angualar.js"
          />
        </div>
        <div class="select">
          作者
          <select v-model="authors">
            <option value="xiaoming">xiaoming</option>
            <option value="zhangsan">zhangsan</option>
            <option value="lisi">lisi</option>
          </select>
          <button type="submit">添加博客</button>
        </div>
      </form>
      <div class="preview">
        <h3>博客总览</h3>
        <label>博客标题:{{ blog.title }}</label>
        <label>博客内容</label>
        <p>{{ blog.content }}</p>
        <label>博客分类</label>
        <ul>
          <li v-for="(item, i) in blog.categorites" :key="i">{{ item }}</li>
        </ul>
        <label>作者</label>
        <p>{{ authors }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categorites: [],
      },
      authors: "",
      submited: false,
    };
  },
  methods: {
    async addblog() {
      let data = await this.$axios.post(
        "http://jsonplaceholder.typicode.com/posts",
        { userId: "1", title: this.blog.title, body: this.blog.content }
      );
      this.submited = true;
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addBlog {
  margin: 0 auto;
  padding: 10px;
  display: inline-block;
  .title {
    text-align: center;
    margin: 0 auto;
  }
  textarea,
  label,
  select {
    display: block;
  }
  textarea {
    width: 300px;
    height: 100px;
  }
  select,
  input[type="text"] {
    width: 300px;
  }
  label {
    margin: 0 10px 0 0;
  }
  .checkboxs {
    display: flex;
    input {
      margin-top: 5px;
    }
  }
  .preview {
    width: 300px;
    border: 1px solid #ccc;
    margin-top: 40px;
    padding: 10px;
  }
}
</style>