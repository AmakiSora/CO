<template>
  <div class="command-storage">
    <el-button v-for="command in commands" @click="selectCommand(command.name)" round>
      {{ command.name }}
    </el-button>
    <el-button type="plain" @click="saveCommand" round>+</el-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "CommandStorage",
  data() {
    return {
      // commands: localStorage.getItem('commands'),
    }
  },
  methods: {
    // 保存命令到本地
    saveCommand() {
      const commands = localStorage.getItem('commands');
      // const c = [{assss:2}]
      // c.push({name: '244',command:})
      localStorage.setItem('commands', 233)
    },
    selectCommand(name) {
      this.$store.state.changeCommand()
    }
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    commands: state => state.commands

    // 传字符串参数 'count' 等同于 `state => state.count`
    // countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  })
}
</script>

<style scoped>
.command-storage {
  margin: 20px;
}
</style>