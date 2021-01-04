<template>
  <div>
    <form>
      <input type="text" name="id" v-model="id" />
      <input type="password" name="pw" v-model="pw" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  props: {
    id: String,
    pw: String
  }
}
</script>
<style scoped>
</style>