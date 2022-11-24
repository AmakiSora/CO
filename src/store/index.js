// 组装模块并导出 store 的地方
import {createStore} from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state: {
        command: 'docker ps1',
        commands: [
            {name: '命令1', command: 'docker ps'},
            {name: '命令2', command: 'docker run'},
        ]
    },
    actions: {
        changeCommand(context,text) {
            console.log(2222222222222)
            context.commit('changeCommand',text)
        }
    },
    mutations: {
        changeCommand1(state, command) {
            state.command = command
        },
        addCommand(state, name, command) {
            state.commands.push({name: name, command: command})
        }
    }
})
export default store