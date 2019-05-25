<template>
 <div>
    <table border="1">
        <tr v-for="body in payload.data">
          <td v-for="(item, index)  in body">
            <img v-if="index == 'avatar'" :src="item">
            <span v-else>  {{index + "--" + item }}</span>
          </td>
        </tr>

    </table>
 </div>
</template>

<script>
export default {
  data() {
    return{
      payload: null
    }
  },
  mounted() {
    fetch('https://reqres.in/api/users?page=2').then((res)=> {
      return res.json();
    }).then((data) => {
      console.log(data)
      this.payload = data;
    })
  }
}
</script>

<style>

</style>
