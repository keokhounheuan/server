<template>
  <div class="container">
  

    <div>
       <ul>
         <li v-for="post in Users " :key="post.id" >
         <nuxt-link to="/post/_id"> {{ post.name }}</nuxt-link> 

        <p>ອາຍຸ: {{ post.age }}</p>
        <p>ອີແມລ: {{ post.email }}</p>
        <p>ປະເທດ: {{ post.nationlity }}</p>
       
      </li> 
      </ul>
    </div>
    
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
apollo: {
  Users:{
    query: gql`
    query {
      Users {
        id
        name
        age
        email
        nationlity
       }   
    } 
    `,
  }   ,      
       
} ,    
  name: 'IndexPage'
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  color: #000;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
