<template>
    <nav>
        <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="info"
      dark
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      class="info"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title class="logo" v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="login" class="mr-2"
      >
        <v-icon>mdi-account-key</v-icon> login
      </v-btn>
    </v-app-bar>
    </nav>
</template>
<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'home',
          to: '/'
        },
        {
          icon: 'mdi-kodi',
          title: 'Cars',
          to: '/cars'
        },
        {
          icon: 'mdi-bowl',
          title: 'my bookings',
          to: '/bookings'
        },
        
      ],
      miniVariant: false,
      title: 'Marshall\'s Rental Cars'
    }
  },
  methods : {
    login(){
      this.$router.push('/auth/login');
    }
  }
}
</script>
<style>
.logo{
  color: rgb(4, 50, 255);
  text-shadow: 0 0 3px azure,
               0 0 6px azure,
               0 0 9px azure,
               0 0 12px azure,
               0 0 15px azure,
               0 0 18px azure,
               0 0 21px azure;
  font-size: 1.5em;
  font-weight: bolder;  
  padding: 10px;  
         
}
</style>