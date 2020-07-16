<template>
  <div class="home">
    <h1 class="primary--text headline text-center my-2 ">Home</h1>
    <v-layout row wrap class="mx-auto">
      <card v-for="(car, key) in cars" :key="key" :car="car"/>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card'
export default {
  name: 'Home',
  components: {card},
  computed: {
    cars(){
      return this.$store.state.cars
    }
  }
}
</script>
