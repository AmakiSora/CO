<script>
import {RouterLink, RouterView} from 'vue-router'
import {ref} from 'vue'
import MainInput from "./components/MainInput.vue";
import CommandStorage from "./components/CommandStorage.vue";
export default {
  components: {CommandStorage, MainInput}
}
</script>

<template>
  <MainInput></MainInput>
  <CommandStorage></CommandStorage>
</template>

<style scoped>
</style>
