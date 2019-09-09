<template>
  <div id="app">
    <Recaptcha />
  </div>
</template>

<script>
import Recaptcha from './components/Recaptcha';

export default {
  name: 'app',
  components: {
    Recaptcha
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
