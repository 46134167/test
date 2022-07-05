import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import HomeComponent from './components/HomeComponent';
import ResearchComponent from './components/ResearchComponent';
import PublicationComponent from './components/PublicationComponent';
import ServiceComponent from './components/ServiceComponent';
import SupervisionComponent from './components/SupervisionComponent';
import TeachingComponent from './components/TeachingComponent'
import HomePage from './components/HomePage'


const routes = [
    { path: '/',
      component: HomePage,
      children:[
          {
              path:'',
              component:HomeComponent,
          },
          {
              path:'Home',
              component:HomeComponent,
          },
          {
              path:'Research',
              component:ResearchComponent,
          },
          {
              path:'Publications',
              component:PublicationComponent,
          },
          {
              path:'Services',
              component:ServiceComponent,
          },
          {
              path:'Supervision',
              component:SupervisionComponent,
          },
          {
              path:'Teaching',
              component:TeachingComponent,
          },
      ]},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(HomeComponent);
app.use(ResearchComponent);
app.use(PublicationComponent);
app.use(ServiceComponent);
app.use(SupervisionComponent);
app.use(TeachingComponent);
app.use(router);
app.use(Antd).mount('#app');