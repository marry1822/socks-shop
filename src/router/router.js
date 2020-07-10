import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../components/Catalog";

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
      component: () => import("../components/Cart.vue"),
      props: true
    },
    {
      path: "/shipment",
      name: "shipment",
      component: () => import("../components/Shipment.vue")
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../components/Payment.vue")
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../components/Contacts.vue")
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../components/Auth.vue")
    }
  ]
});

export default router;
