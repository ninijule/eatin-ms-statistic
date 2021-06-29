import express from "express";
import statisticController from "../controller/statisticController";

const router = express.Router();

//Statistic
router.get(
  "/:restaurantId",

  statisticController.getRestaurantStatistic
);

export default router;
