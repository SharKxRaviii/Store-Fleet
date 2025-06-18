// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  const {
    shippingInfo,
    orderedItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  try {
    if (
      !shippingInfo ||
      !orderedItems ||
      !paymentInfo ||
      !itemsPrice ||
      !taxPrice ||
      !shippingPrice ||
      !totalPrice
    ) {
      return next(new ErrorHandler("Please provide all required fields", 400));
    }

    const orderData = {
      shippingInfo,
      orderedItems,
      user: req.user._id,
      paymentInfo,
      paidAt: Date.now(),
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    };

    const newOrder = await createNewOrderRepo(orderData);
    res
      .status(201)
      .json({ success: true, message: "Order placed successfully", newOrder });
  } catch (error) {
    return next(new ErrorHandler(500, error));
  }
};
