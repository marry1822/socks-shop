import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";
import Shipment from "../components/Shipment";
import Payment from "../components/Payment";
import Contacts from "../components/Contacts";

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
    { path: "/payment", name: "payment", component: Payment },
    { path: "/contacts", name: "contacts", component: Contacts }
  ]
});

export default router;
