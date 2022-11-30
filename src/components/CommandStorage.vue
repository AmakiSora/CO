<template>
  <div class="command-storage">
    <el-button v-for="(command,name) in commands" @click="showCmd(name)" round>
      {{ name }}
    </el-button>
    <el-button type="plain" @click="saveCommand" round>+</el-button>
  </div>
</template>

<script>
import {store} from "../store/store";
import {ElMessageBox, ElNotification} from 'element-plus'

export default {
  name: "CommandStorage",
  data() {
    return {
      commands: {}
    }
  },
  //初始化
  mounted() {
    store.initCmdList()
    this.commands = store.cmdMap
  },
  methods: {
    // 保存命令到本地
    saveCommand() {
      if (store.cmdText===null || store.cmdText === ''){
        ElNotification.error({
          title: '命令不能为空!',
          showClose: false
        })
        return
      }
      ElMessageBox.prompt('', {
        title: '命令另存为',
        message: '',
        type: 'info',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '存储标签不能为空!',
        center: true,
        showClose: false
      })
          .then(({value}) => {
            store.saveCmd(value)
            ElNotification.success({
              title: '已保存命令',
              showClose: false
            })
          })
      // .catch(() => {
      // ElMessage({
      //   type: 'info',
      //   message: 'Input canceled',
      // })
      // })
    },
    //展示命令
    showCmd(name) {
      const cmd = store.getCmdByName(name)
      this.$parent.ChangeInputText(cmd)
    }
  }
}
</script>

<style scoped>
.command-storage {
  margin: 20px;
}
</style>