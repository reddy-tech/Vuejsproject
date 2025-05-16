<template>
 
  

    <div v-for="prop of property" :key="prop.id">
        <!-- <Singleproperty/> -->
        <Singleproperty :prop="prop"/>
    </div>
     
</template>
  
  <script>
  
  import Singleproperty from './Singleproperty.vue'
  
   
  
  export default {
    name: 'PropertyBox',
    components:{
      Singleproperty
    },
    props: {
        property: Array
    }

  }
  
  
  
  
  </script>
  
  
  <style>
  
  
  </style>