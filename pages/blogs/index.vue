<template>
<div>
	 
	     <Blogs />
	 
  </div>
</template>


<script>
import Blogs from "@/components/blogs/index.vue";
import Layout from "@/layouts/main/index.vue";

export default {
  name: "Blogs",
  components: { Blogs ,Layout },
};
</script>