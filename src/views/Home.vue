<template>
  <div>
    <blogHeader></blogHeader>
    <!-- <addBlog></addBlog> -->
    <router-view></router-view>
  </div>
</template>

<script>
import blogHeader from "@/components/blogHeader";
import addBlog from "@/components/addBlog";
import showBlog from "@/components/showBlog";
export default {
  components: {
    addBlog,
    showBlog,
    blogHeader,
  },
};
</script>
