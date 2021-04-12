import { createApp } from 'vue'
import App from './App.vue'

import { Button, Col, Row, NavBar, Tabbar, TabbarItem ,Swipe, SwipeItem} from 'vant';
import 'vant/lib/index.css';

createApp(App).use(Button).use(Col).use(Row).use(NavBar).use(Tabbar).use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.mount('#app')
