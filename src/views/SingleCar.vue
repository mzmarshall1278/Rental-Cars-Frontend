<template>
    <div class="container">
        
         <v-card class="primary">
             <v-img
            width="500"
            :src="car.imageUrl"
            class="mx-auto"
          ></v-img>
          <h1 class="white--text text-center title">{{car.name}} - {{car.model}}</h1>   
          <v-card-text class="white--text text-center">
              <p> Rent Fee: ${{car.price}}</p>
              <p>Year: {{car.year}}</p>
              <p>Color: {{car.color}}</p>
              <p>Tint: {{car.tint}}</p>
              <p>Available: {{car.available ? 'Yes' : 'No'}}</p>
          </v-card-text>      
          <v-card-actions>
              <v-btn class="light mx-auto" :disabled="!car.available">Book</v-btn>
          </v-card-actions>
          </v-card>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {

        }
    },
    computed: {
        car(){
        return this.$store.getters.getSingleCar(this.id)
    }
    }
}
</script>
