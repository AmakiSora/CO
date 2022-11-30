<template>
  <MainInput ref="mainInput"></MainInput>
  <CommandStorage></CommandStorage>
</template>

<script>
import MainInput from "../components/MainInput.vue";
import CommandStorage from "../components/CommandStorage.vue";

export default {
  name: "CMD",
  components: {CommandStorage, MainInput},
  methods: {
    ChangeInputText(cmd){
      this.$refs.mainInput.ChangeText(cmd)
    }
  }
}
</script>

<style scoped>

</style>