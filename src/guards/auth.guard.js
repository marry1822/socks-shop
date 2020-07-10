import router from "@/router/router";

export default function authGuard() {
  const isAuth = false;
  const authRoutes = ["auth"];
  router.beforeEach((to, from, next) => {
    if (authRoutes.includes(to.name) && isAuth) {
      return next({ name: "catalog" });
    }
    if (!authRoutes.includes(to.name) && !isAuth) {
      return next({ name: "auth" });
    }
    return next();
  });
}
