<template>
  <div class="command-storage">
    <!--    <el-button v-for="command in commands" @click="selectCommand(command.name)" round>-->
    <!--      {{ command.name }}-->
    <!--    </el-button>-->
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
      commands: localStorage.getItem('commands'),
    }
  },
  mounted() {
    console.log(`the component is now mounted.`)
    store.initCmdList()
  },
  methods: {
    // 保存命令到本地
    saveCommand() {
      // const commands = localStorage.getItem('commands');
      // const c = [{assss:2}]
      // c.push({name: '244',command:})
      // localStorage.setItem('commands', 233)
      console.log(store.cmdText)
      // store.changeText('2322')
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
    }
  }
}
</script>

<style scoped>
.command-storage {
  margin: 20px;
}
</style>