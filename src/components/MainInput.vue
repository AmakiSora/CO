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
      <template v-if="showAppendButton" #append>
        <!--        <el-button v-model="saveCommand">-->
        <!--          <el-icon><CirclePlus /></el-icon>-->
        <!--        </el-button>-->
        <el-button @click="doCopy">
          <el-icon>
            <CopyDocument/>
          </el-icon>
        </el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
import {ElNotification} from "element-plus";

export default {
  name: "MainInput",
  data() {
    return {
      input: "",
      showAppendButton: false
    }
  },
  methods: {
    //输入框内容变更
    inputChange() {
      this.showAppendButton = this.input !== '';
      this.$store.state.changeCommand('command', this.input)
    },
    //保存命令到本地
    // saveCommand() {
    //   localStorage.setItem('command1',this.input)
    // },
    //复制输入框内容
    doCopy: function () {
      this.$copyText(this.input).then(function (e) {
        //弹窗
        ElNotification.success({
          title: '已复制命令',
          showClose: false
        })
      }, function (e) {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
.main-input {
  text-align: center;
  width: 780px;

}

/*输入框前缀*/
:deep(.el-input-group__prepend) {
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}

/*输入框后缀*/
:deep(.el-input-group__append) {
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}

/*输入框本体*/
:deep(.el-input__wrapper) {
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}

</style>