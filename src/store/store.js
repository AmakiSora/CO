import {reactive} from 'vue'

export const store = reactive({
    cmdName: '',
    cmdText: '',
    cmdList: [
        {cmdName: '', cmdText: ''}
    ],
    //初始化cmdList
    initCmdList() {
        let list = localStorage.getItem('cmdList')
        console.log(list)
        if (list === null) {
            this.cmdList = []
        } else {
            this.cmdList = JSON.parse(list)
        }

    },
    //变更命令内容
    changeText(text) {
        this.cmdText = text
    },
    //保存命令
    saveCmd(name) {
        let map = {cmdName: name, cmdText: this.cmdText}
        this.cmdList.push(map)
        localStorage.setItem('cmdList', JSON.stringify(this.cmdList))
    }
})