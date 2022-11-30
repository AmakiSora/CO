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
      ElMessageBox.prompt('', {
        title: '命令另存为',
        message: '',
        type: 'info',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
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