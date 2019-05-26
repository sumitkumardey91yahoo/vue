<template>
  <div id="app">
    <!-- <router-view/> -->
    <hello></hello>
  </div>
</template>

<script>
import HelloWorld from '@/components/restAPI'
export default {
  name: 'App',
  components: {
    'hello' : HelloWorld
  }
}

</script>

<style>

</style>
