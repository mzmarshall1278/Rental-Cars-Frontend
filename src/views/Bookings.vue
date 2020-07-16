<template>
    <div class="container">
        <div class="mine mb-3 pa-3">
            <h3 class="headline text-center white--text primary">My Bookings</h3>
            <v-card v-for="(booking, key) in myBookings" :key="key" class="mb-1">
                <v-card-title>{{booking.createdAt}}</v-card-title>
                <v-card-text class="subtitle">{{booking.car.name}} - {{booking.completed ? 'Completed' : 'Active'}}</v-card-text>
                <v-card-actions>
                    <v-btn class="primary white--text" @click="loadThis(booking._id)">view </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <hr>
        <div class="others mt-3 pa-3">
            <h3 class="headline text-center white--text primary">Other Bookings</h3>
            <v-card v-for="(booking, key) in otherBookings" :key="key" class="mb-1">
                <v-card-title>{{booking.createdAt}} - {{booking.user.name}}</v-card-title>
                <v-card-text>{{booking.car.name}} - {{booking.completed ? 'Completed' : 'Active'}}</v-card-text>
                <v-card-actions>
                    <v-btn class="primary white--text" @click="loadThis(booking._id)">view </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        myBookings(){
            return this.$store.getters.myBookings
        },
        otherBookings(){
            return this.$store.getters.otherBookings
        }
    },
    methods: {
        loadThis(id){
            this.$router.push(`bookings/${id}`)
        }
    }
}
</script>
