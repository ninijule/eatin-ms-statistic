import Restaurant from "../repositories/restaurant";
import Order from "../repositories/order";
import ResourceNotFoundError from "../types/errors/resourceNotFoundError";
import GetStatisticRequest from "../types/requests/getStatisticRequest";

export default async (request: GetStatisticRequest) => {
  const restaurant = Restaurant.findById(request.restaurantId);

  if (!restaurant) {
    throw new ResourceNotFoundError("Restaurant");
  }

  const order = Order.aggregate([
    {
      $group: {
        _id: {
          $week: "$created_at",
        },
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  return order;
};
