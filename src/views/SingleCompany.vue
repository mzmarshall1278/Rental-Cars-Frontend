<template>
  <div class="home">
    <h1 class="primary--text headline text-center my-2 ">{{comp}}</h1>
    <v-layout row wrap class="mx-auto">
        <p class="ml-3 info--text" v-if="!cars.length">There is no car from the {{comp}} company.</p>
      <card v-for="(car, key) in cars" :key="key" :car="car"/>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card'
export default {
  name: 'Home',
  props:['comp'],
  components: {card},
  data() {
      return {

      }
  },
  computed: {
    cars(){
      return this.$store.getters.getCompany(this.comp)
    }
  }
}
</script>
