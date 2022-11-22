// 组装模块并导出 store 的地方
import {createApp} from 'vue'
import {createStore} from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state: {
        commands: [
            "123", "233", "2333"
        ]
    },
    actions: {
        save(context) {
            context.commit('increment')
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
export default store