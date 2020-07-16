<template>
  <div class="container">     

      <v-layout row wrap mx-auto justify-center>
          <v-card class="pa-10">

              <v-divider></v-divider>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="signUp"
            >
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>

                <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
                ></v-text-field>
                
                <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4 white--text"
                type="submit"
                >
                Sign Up
                </v-btn>
                <router-link to="login" style="text-decoration:none" class=""> Login</router-link>
            </v-form>
          </v-card>
      </v-layout>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 7) || 'Password must be graete than 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      signUp(){
          const cred = {
              email : this.email,
              password : this.password
          };
          //reach the store
          this.email = ''
          this.password = ''
      }
    },
  }
</script>