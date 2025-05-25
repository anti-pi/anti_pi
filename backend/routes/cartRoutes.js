const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Helper function to get a cart by user Id or guest ID
const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
}

// @router POST /api/cart
// @desc Add a product to the cart for a guest or logged in user
// @access Public
// ERROR PRONE
router.post("/", async (req, res) => {
    const { productId, guestId, userId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        // Determine if the user is logged in or guest
        let cart = await getCart(userId, guestId);

        // If the cart exists, update it
        if (cart) {
            const productIndex = cart.products.findIndex(
                (p) => p.productId.toString() === productId
            );

            if (productIndex === -1)  {
                // add new product
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    reward: product.reward,
                });
            } else {
                return res.status(404).json({ message: "Already in cart"});
            }
            await cart.save();
            return res.status(200).json(cart);
        } else {
            // Create a new cart for guest or user
            const newCart = await Cart.create({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [
                    {
                        productId,
                        name: product.name,
                        image: product.images[0].url,
                        reward: product.reward,
                    },
                ],
            });
            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// @route PUT /api/cart
// @desc Update product quantity in the cart for a guest or logged-in user
// @access Public
router.put("/", async (req, res) => {
    const { productId, guestId, userId } = req.body;

    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const productIndex = cart.products.findIndex((p) => {
            p.productId.toString() === productId
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error"})
    }
});

// @route DELETE /api/cart
// @desc Remove a product from the cart
// @access Public
router.delete("/", async (req, res) => {
    const { productId, guestId, userId } = req.body;
    try {
        let cart = await getCart(userId, guestId);

        if (!cart) return res.status(404).json({ message: "cart not found" });
        
        const productIndex = cart.products.findIndex(
            (p) => p.productId.toString() === productId
        );

        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);
        } else {
            return res.status(404).json({ message: "Product not found in cart" });
        }
        await cart.save();

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// @route GET /api/cart
// @desc logged-in user's or guest user's cart
// @access Public
router.get("/", async (req, res) => {
    const { userId, guestId } = req.query;

    try {
        const cart = await getCart(userId, guestId);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
});

// @route POST /api/cart/merge
// @desc Merge guest cart into user cart on login
// @access Private
router.post("/merge", protect, async (req, res) =>{
    const { guestId } = req.body;

    try {
        // Find the guest cart and user cart
        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ userId: req.user._id });

        if (guestCart) {
            if (guestCart.products.length === 0) {
                return res.status(400).json({ message: "Guest cart is empty"});
            }

            if (userCart) {
                // Merge guest cart into user cart
                guestCart.products.forEach((guestItem) => {
                    const productIndex = userCart.products.findIndex((item) => item.productId.toString() === guestItem.productId.toString());

                    if (productIndex > -1) {
                        // If the item exists in the user cart, update the quantity
                        userCart.products[productIndex].quantity += guestItem.quantity;
                    } else {
                        // Otherwise, add the guest item to cart
                        userCart.products.push(guestItem);
                    }
                });
                await userCart.save();

                // Remove the guest cart after merging
                try {
                    await Cart.findOneAndDelete({ guestId });
                } catch (error) {
                    console.error("Error deleting guest cart:", error)
                }
                res.status(200).json(userCart);
            } else{
                // If the user has no existing cart, assign the guest cart to user
                guestCart.user = req.user._id;
                guestCart.guestId = undefined;
                await guestCart.save();

                res.status(200).json(guestCart);
            }
        } else {
            if (userCart) {
                // Guest cart has already been merged, return user cart
                return res.status(200).json(userCart);
            }
            res.status(404).json({ message: "Guest cart not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
});

module.exports = router;