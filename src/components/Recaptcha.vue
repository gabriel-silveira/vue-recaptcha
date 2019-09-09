<template>
  <div class="recaptcha-wrapper">
    <vue-recaptcha 
      sitekey="6LcDgLcUAAAAAC5zfyZvuN6zVvTUMmujlgVXZ36y" 
      @verify="onVerify" />
    <div>
      <button v-if="this.verified" type="button" @click="resetRecaptcha()">Reiniciar</button>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'Recaptcha',
  components: { VueRecaptcha },
  methods: {
    onVerify(response) {
      console.log(response);
      this.$parent.verified = true;
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset();
    }
  },
  data: function() {
    return ({
      verified: false    
    });
  },
}
</script>

<style>
.recaptcha-wrapper {
  position: relative;
  display: inline-block;
  width: 310px;
}
</style>
