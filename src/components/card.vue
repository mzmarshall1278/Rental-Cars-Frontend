<template>
      <v-flex xs6 sm4 md3 lg2 pa-1>
        <v-card
          class="mx-auto my-3"
          max-width="374"
          elevation="5"
        >
            <v-img
            height="250"
            :src="car.imageUrl"
            class="pt-3"
          ></v-img>

          <v-card-title class="subtitle-2 primary--text" >{{car.model}}</v-card-title>

          <v-card-text>
            
            <div class=" subtitle-1 red--text" style="font-family:courier">
              {{car.name}}
            </div>
                      

          <h5 class="primary--text headline">NGN {{car.price}}<sup class="red--text">99</sup></h5>
            
            
             <h5>Available : {{car.available ? 'Yes' : 'No'}}</h5>
            <h5>Year : {{car.year}}</h5>
          </v-card-text>

          <v-card-actions>            
            <v-btn
              color="primary"
              text 
              @click="loadThis"
            >
              View Car
            </v-btn>
          </v-card-actions>
        </v-card>
        
    </v-flex>
</template>
<script>
  export default {
    props:['car'],
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
        this.$router.push(`/cars/${this.car.name}/${this.car._id}`)
      },
    },
  }
</script>
<style>
.vendor{
  color : red
}
</style>