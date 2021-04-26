<template>
  <div>
    <h2>Child_Update</h2>
    {{ userId }}
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
};
</script>

<style>
</style>