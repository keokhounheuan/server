<template >
<div  class="container">
 <div v-if="Users">
     <h1>{{Users.name}}</h1>
     <div v-html="Users.age"></div>

 </div>
   <h1>ujhgfdidfif</h1>
      <form>
          <label for="titel">jdhdelfg</label>
          <input id="titel" type="text">
           <label for="content">content</label>
           <vue-editor id="cntent" />
          <input  type="submit" value="create ">
      </form>
 </div >
</template>

<script>
import gql from 'graphql-tag';
export default {
apollo: {
  Users:{
    query: gql`
    query Users($id:Int!) {
        Users(where: {id: $id}) {
          name
          age
        }
    }   
    `,
    Users(){
        return {id: parseInt(this.$route.params.id) }
    },
  }   ,          
} , 
}
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
</style>