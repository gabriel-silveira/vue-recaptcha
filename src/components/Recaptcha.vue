<template>
  <div class="recaptcha-wrapper">
    <vue-recaptcha 
      sitekey="6LcDgLcUAAAAAC5zfyZvuN6zVvTUMmujlgVXZ36y" 
      @verify="onVerify" />
    <div>
      <button v-if="verified" type="button" @click="resetRecaptcha()">Reiniciar</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'Recaptcha',
  components: { VueRecaptcha },
  methods: {
    onVerify(response) {
      console.log(response);
      this.$store.dispatch('recaptchaModule/setVerified', true);
    },
    resetRecaptcha() {
      //this.$refs.recaptcha.reset();
      this.$store.dispatch('recaptchaModule/setVerified', false);
    }
  },
  computed: {
    ...mapGetters('recaptchaModule', [
      'verified'
    ])
  }
}
</script>

<style>
.recaptcha-wrapper {
  position: relative;
  display: inline-block;
  width: 310px;
}
</style>
