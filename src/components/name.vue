<template>
  <div>
    <h2 v-for="i in age"> i am name  {{i}} </h2>
    <button type="button" @click="iamclick()"> next page </button>
  </div>
</template>

<script>
export default {
 data () {
   return {
       age: [ 1,2,3,4,5]
   }
 },
 methods: {
   iamclick() {
     this.$router.push({name: 'HelloWorld'})
   }
 },
  mounted () {
    console.log("mounted");
  },
  created () {
    console.log("created")
  }
}
</script>

<style>

</style>


