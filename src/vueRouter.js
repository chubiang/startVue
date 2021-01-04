import VueRouter from "vue-router";
import Login from "./components/Login";
import Hello from "./components/HelloWorld";

const router = new VueRouter({
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/hello", name: "hello", component: Hello }
  ]
});

export { router as routers };
