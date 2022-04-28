<template>
<div >
    <Header />
    <main>
          <Nuxt />
    </main>
  
</div>
</template>

<script>
import header from '../components/header.vue'
export default {
  components: { header },
 name: 'Default'
}
</script>

<style>
</style>