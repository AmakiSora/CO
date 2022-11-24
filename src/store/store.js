import { reactive } from 'vue'

export const store = reactive({
    cmdName: '',
    cmdText: '',
    cmdList: [

    ],
    //变更命令内容
    changeText(text) {
        this.cmdText = text
    },
    //保存命令
    saveCmd(name){
    }
})