<template>
  <div class="container"> 
      <h1>ujhgfdidfif</h1>
      <form>
          <label for="titel">jdhdelfg</label>
          <input id="titel" type="text">
           <label for="content">content</label>
           <vue-editor id="cntent" />
          <input  type="submit" value="create ">
      </form>
  </div>
</template>

<script>
export default {
 middleware: 'auth',
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