import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data) => {
  // Write your code here for placing a new order
  const newOrder = new OrderModel(data);

  return await newOrder.save();

};
