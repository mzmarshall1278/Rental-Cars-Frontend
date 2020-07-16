<template>
    <div class="container">
        <h3 class="title text-center primary--text">Booking - {{id}}</h3>
        <v-card>
            <v-img :src="booking.car.imageUrl" width="150" class="ml-3"/>
            <v-card-title class="primary--text"> Car: {{booking.car.name}}</v-card-title>
            <v-card-text class="subtitle">
                <p>Model: {{booking.car.model}}</p>
                <p>Booked Date: {{booking.createdAt}}</p>
                <p v-if="booking.completed">Returned Date: {{booking.updatedAt}}</p>
                <p>Color: {{booking.car.color}}</p>
                <p>User: {{booking.user.name}}</p>
            </v-card-text>
            <v-card-actions>
                <v-btn class="primary white--text" v-if="!booking.completed">complete booking</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    props:['id'],
    computed: {
        booking(){
            return this.$store.getters.getBooking(this.id)
        }
    }
}
</script>
