import RouterConfig from "../types/utils/routerConfig";
import statisticRouter from "./statistic";

const statistic: RouterConfig = {
  router: statisticRouter,
  path: "/statistic",
};

export default [statistic];