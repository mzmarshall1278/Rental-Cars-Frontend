<template>
      <v-flex xs6 sm4 md3 lg2 pa-1>
        <v-card
          class="mx-auto my-3"
          max-width="374"
          elevation="5"
        >
            <!-- <v-img
            height="250"
            :src="car.imageUrl"
          ></v-img> -->

          <v-card-title class="title-2 primary--text" >{{company.name}}</v-card-title>


          <v-card-actions>            
            <v-btn
              color="primary"
              text 
              @click="loadThis"
            >
              View models
            </v-btn>
          </v-card-actions>
        </v-card>
        
    </v-flex>
</template>
<script>
  export default {
    props:['company'],
    data: () => ({
      //image: require('~/assets/images/burger.jpeg'),
    }),
    computed:{
      // Singlecar(){
      //   return this.$store.getters.getCar(this.car._id)
      // }
    },
    methods: {
      loadThis(){
        this.$router.push(`/cars/${this.company.name}`)
      },
    },
  }
</script>
<style>
.vendor{
  color : red
}
</style>