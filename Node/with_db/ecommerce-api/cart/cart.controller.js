import express from "express";
import { isBuyer } from "../middleware/authentication.middleware.js";
import validateReqBody from "../middleware/validate.req.body.js";
import { addCartItemValidationSchema } from "./cart.validation.js";
import checkMongoIdValidity from "../utils/mongo.id.validity.js";
import Product from "../product/product.model.js";
import Cart from "./cart.model.js";
import validateMongoIdFromParams from "../middleware/validate.mongo.id.js";

const router = express.Router();

// * add item to cart
router.post(
  "/cart/add/item",
  isBuyer,
  validateReqBody(addCartItemValidationSchema),
  (req, res, next) => {
    // validate product id from req.body
    const { productId } = req.body; // ! this equals const productId = req.body.productId

    // check mongo id validity for productId
    const isValidId = checkMongoIdValidity(productId);

    // if not valid mongo id, throw error
    if (!isValidId) {
      return res.status(400).send({ message: "Invalid mongo id" });
    }

    // call next function
    next();
  },
  async (req, res) => {
    // extract cart item data from req.body
    const { productId, orderedQuantity } = req.body;

    // find product using productId
    const product = await Product.findOne({ _id: productId });

    // if not product, throw error
    if (!product) {
      return res.status(404).send({ message: "Product does not exits!" });
    }

    // check if ordered quantity does not exceed product quantity
    if (orderedQuantity > product.quantity) {
      return res
        .status(403)
        .send({ message: "Ordered quantity exceeds the product quantity" });
    }

    // add item to cart
    await Cart.create({
      buyerId: req.loggedInUserId,
      productId,
      orderedQuantity,
    });

    // send res
    return res
      .status(200)
      .send({ message: "Item is added to the cart successfully" });
  }
);

// * flush cart / remove all items from the cart
router.delete("/cart/flush", isBuyer, async (req, res) => {
  // extract buyerId from req.loggedInUserId
  const buyerId = req.loggedInUserId;

  // remove all items from cart for that buyer
  await Cart.deleteMany({ buyerId: buyerId }); // ! or in { buyerId } only

  // send res
  return res.status(200).send({ message: "Cart is cleared successfully!" });
});

// * remove single item from cart
router.delete(
  "/cart/item/delete/:id",
  isBuyer,
  validateMongoIdFromParams,
  async (req, res) => {
    // extract cartId from req.params
    const cartId = req.params.id;

    // check cart ownership
    const cart = await Cart.findOne({
      _id: cartId,
      buyerId: req.loggedInUserId,
    });

    // if not cart, throw error
    if (!cart) {
      return res
        .status(403)
        .send({ message: "You are not the owner of this cart" });
    }

    // delete cart
    await Cart.deleteOne({ _id: cartId, buyerId: req.loggedInUserId });

    //send res
    return res
      .status(200)
      .send({ message: "Cart item is removed successfully" });
  }
);

export default router;

// ! CTRL+T => to go to other js file instead of navigation in big projects
