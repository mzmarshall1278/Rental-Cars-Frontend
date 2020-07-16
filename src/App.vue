<template>
  <v-app>
  <nav-bar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import navBar from './components/navBar';

export default {
  name: 'App',

  components: {
    navBar,
  },

  data: () => ({
    //
  }),
};
</script>
