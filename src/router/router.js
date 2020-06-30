import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";
import Shipment from "../components/Shipment";
import Payment from "../components/Payment";


Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: Catalog,
      props: true
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      props: true
    },
    { path: "/shipment", name: "shipment", component: Shipment },
    { path: "/payment", name: "payment", component: Payment }
  ]
});

export default router;
