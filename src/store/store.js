import {reactive} from 'vue'

export const store = reactive({
    cmdName: '',
    cmdText: '',
    cmdMap: {
        cmdName: ''
    },
    //初始化cmdList
    initCmdList() {
        let map = localStorage.getItem('cmdMap')
        console.log(map)
        if (map === null) {
            this.cmdMap = {}
        } else {
            this.cmdMap = JSON.parse(map)
        }
    },
    //变更命令内容
    changeText(text) {
        this.cmdText = text
    },
    //保存命令
    saveCmd(name) {
        this.cmdMap[name] = this.cmdText
        localStorage.setItem('cmdMap', JSON.stringify(this.cmdMap))
    },
    //获取命令
    getCmdByName(name) {
        this.cmdText = this.cmdMap[name]
        return this.cmdText
    }
})