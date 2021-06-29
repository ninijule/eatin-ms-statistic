import express from "express";
import statisticController from "../controller/statisticController";

const router = express.Router();

//Statistics
router.get(
  "/:restaurantId",

  statisticController.getRestaurantStatistic
);

export default router;
