<template>
  <div class="main-input-dev">
    <el-input
        v-model="input"
        placeholder=""
        size="large"
        class="main-input"
        @input="inputChange"
    >
      <template #prepend>
        <el-button>
          <el-icon>
            <Search/>
          </el-icon>
        </el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "MainInput",
  data() {
    return {
      input: ""
    }
  },
  methods: {
    inputChange(){
      console.log(2333)
    }
  }
}
</script>

<style scoped>
.main-input {
  text-align: center;
  width: 780px;
}
</style>