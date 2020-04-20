<template>
  <div id="app">
    <v-btn @click="fetchUsers">FETCH</v-btn>
 </div>
</template>

<script>
export default {
  name: "Test",
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: function () {
      const baseURI = 'https://raw.githubusercontent.com/poxyx/vue/master/e.json'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
        console.log(result.data.emblem[0].data)
      })
    }
  }
}
</script>

<style>

</style>