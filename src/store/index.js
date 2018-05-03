import Vue from 'vue'
import Vuex from 'vuex'

import headImg from '@/assets/head.jpg'
import headBg from '@/assets/head-bg.jpg'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        headImg,
        headBg,
        menuData: [
            {
                name: 'Home 首页',
                src: '/',
                icon: 'home',
                open: false,
                haveChild: false
            },
            // {
            //     name: 'Forms 表单元素',
            //     icon: 'collection-text',
            //     open: true,
            //     childs: [
            //         {
            //             name: 'Input 输入框',
            //             src: '/input'
            //         }
            //         , {
            //             name: 'Buttons 按钮',
            //             src: '/buttons'
            //         }
            //         , {
            //             name: 'Checkbox/Radio 单选/多选',
            //             src: '/check'
            //         }
            //     ],
            //     haveChild: true
            // },
        ]
    }
})

export default store