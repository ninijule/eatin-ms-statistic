import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

import getStatistic from "../use_cases/getStatistic";

import GetStatisticRequest from "../types/requests/getStatisticRequest";


export default {
  getRestaurantStatistic: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const request: GetStatisticRequest = {
        restaurantId: req.params.restaurantId,
      };

      return res.status(200).json((await getStatistic(request)));
    } catch (error) {
      next(error);
    }
  },
};
