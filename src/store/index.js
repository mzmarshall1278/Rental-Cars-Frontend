import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {_id: '03'},
    cars:[
      {_id: '01', name: 'Rolls Royce', model: 'Ghost', year: '2020', price: 3000, imageUrl: require('@/assets/cars/rrWhite.jpg'), available: true, color: "White", tint: "none"},
      {_id: '02', name: 'Bentley', model: 'Mulsannne', year: '2020', price: 2800, imageUrl: require('@/assets/cars/bentleyWhite.jpg'), available: true, color: "White", tint: "super dark"},
      {_id: '03', name: 'Audi', model: 'A8', year: '2019', price: 2000, imageUrl: require('@/assets/cars/audiBlack.jpg'), available: true, color: "ash", tint: "light"},
      {_id: '04', name: 'Range Rover', model: 'Velar', year: '2019', price: 2200, imageUrl: require('@/assets/cars/roverBlack.jpg'), available: true, color: "black", tint: "super dark"},
      {_id: '05', name: 'Nissan', model: 'A One', year: '2020', price: 2500, imageUrl: require('@/assets/cars/nissanWhite.jpg'), available: false, color: "milk", tint: "super dark"},
      {_id: '06', name: 'Rolls Royce', model: 'Cullinan', year: '2020', price: 4000, imageUrl: require('@/assets/cars/rrCamo.jpg'), available: true, color: "Black and White Camouflage", tint: "Dark"},
      {_id: '07', name: 'Rolls Royce', model: 'Ghost', year: '2020', price: 3000, imageUrl: require('@/assets/cars/rrPeach.jpg'), available: false, color: "peach", tint: "none"},
    ],
    companies: [
      {_id: "01", name: "Rolls Royce", },
      {_id: "02", name: "Audi", },
      {_id: "03", name: "Mercedes Benz", },
      {_id: "04", name: "Ferrari", },
      {_id: "05", name: "Bentley", },
      {_id: "06", name: "Range Rover", },
      {_id: "07", name: "Nissan", },
      {_id: "08", name: "Porsche", },
      {_id: "09", name: "Lamborghini", },
      {_id: "10", name: "Lexus", },
    ],
    bookings: [
      {_id: '1', completed: true, createdAt: '12/11/2020', days: 7, updatedAt: '19/11/2020', user : {_id: '01', name: 'Marshall'}, car: {_id: '07', name: 'Rolls Royce', model: 'Ghost', year: '2020', price: 3000, imageUrl: require('@/assets/cars/rrPeach.jpg'), available: false, color: "peach", tint: "none"} },

    {_id: '2', completed: true, createdAt: '15/11/2020', days: 5, updatedAt: '20/11/2020', user : {_id: '02', name: 'Harris'}, car: {_id: '05', name: 'Nissan', model: 'A One', year: '2020', price: 2500, imageUrl: require('@/assets/cars/nissanWhite.jpg'), available: false, color: "milk", tint: "super dark"}},
      
    {_id: '3', completed: false, createdAt: '22/09/2020', days: 3, updatedAt: '22/09/2020', user : {_id: '03', name: 'Me'}, car: {_id: '01', name: 'Rolls Royce', model: 'Ghost', year: '2020', price: 3000, imageUrl: require('@/assets/cars/rrWhite.jpg'), available: true, color: "White", tint: "none"} },

    {_id: '4', completed: true, createdAt: '15/09/2020', days: 7, updatedAt: '22/09/2020', user : {_id: '03', name: 'Me'}, car: {_id: '02', name: 'Bentley', model: 'Mulsannne', year: '2020', price: 2800, imageUrl: require('@/assets/cars/bentleyWhite.jpg'), available: true, color: "White", tint: "super dark"}},
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getSingleCar(state){
      return carId => {
        return state.cars.find(car => {
          return car._id === carId
        })
      }
    },
    //sort in the server
    sortedCompanies(state){
      return state.companies.sort((compA,compB) => {
        return compA.name > compB.name
      })
    },
    getCompany(state){
      return name => {
        return state.cars.filter(car => {
          return car.name === name
        })
      }
    },
    myBookings(state){
        return state.bookings.filter(booking => {
          return booking.user._id === state.user._id
        })
    },
    otherBookings(state){
        return state.bookings.filter(booking => {
          return booking.user._id !== state.user._id
        })
    },
    getBooking(state){
      return id => {
        return state.bookings.find(booking => {
          return booking._id === id
        })
      }
    }
  },
  modules: {
  }
})
