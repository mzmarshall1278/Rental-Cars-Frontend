<template>
    <div class="container">
        <h3>Featured Companies</h3>
    <v-layout row wrap class="mx-auto">
        <card v-for="(company, key) in companies" :key="key" :company="company"/>
    </v-layout>    
    </div>
</template>
<script>
import card from '@/components/companiesCard'
export default {
    components:{card},
    data() {
        return {
            
        }
    },
    computed: {
        companies(){
            return this.$store.getters.sortedCompanies
        }
    }
}
</script>
