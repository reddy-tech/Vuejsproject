<template>


  <!-- Step 3: use the component -->

  <MyHeader propertyName="Smart Property Scout"/>
  <PropertyBox :property="property"/>
  

</template>

<script>

// Step 1 import the componenet
import MyHeader from './components/MyHeader.vue'
import PropertyBox from './components/PropertyBox.vue'

export default {
  name: 'App',
//Step 2 register the component
  components:{
    MyHeader,
    PropertyBox
  },

  data(){
  return {
    property: []
  }
  },
  methods: {
     async fetchproperty(){
      const res = await fetch("https://nodejs-yashwanth-9738.up.railway.app/api")
      const data = await res.json()
      console.log(data)
      return data
     }

  },
  async created(){
    this.property = await this.fetchproperty()
  },

}
  






</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.6;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  color: #2c3e50;
  text-align: center;
  font-size: 2.2rem;
  margin: 20px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
}
</style>
