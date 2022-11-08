<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {ref} from 'vue'

const input = ref('233')
console.log(input.value)
</script>

<template>
  <div class="main-input-dev">
    <el-input
        v-model="input"
        placeholder="Please input"
        size="large"
        class="main-input"
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

<style scoped>
.main-input {
  text-align: center;
  width: 780px;
}
</style>
