import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPages from '../pages/PostIdPages';
import Login from '../pages/Login';

export const privateRoutes = [
  {path: '/about', component: About, exact: true, id: 1},
  {path: '/posts', component: Posts, exact: true, id: 2},
  {path: '/posts/:id', component: PostIdPages, exact: true, id: 3},
]

export const publicRoutes = [
  {path: '/login', component: Login, exact: true, id: 1},
]