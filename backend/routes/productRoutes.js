const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
    try {
        const { 
            name, 
            description, 
            reward, 
            submittedReports,
            category,
            brand,
            images,
            isFeatured,
            isPublished,
            tags,
            sku,
        } = req.body;

        const product = new Product({ 
            name, 
            description, 
            reward, 
            submittedReports,
            category,
            brand,
            images,
            isFeatured,
            isPublished,
            tags,
            sku,
            user: req.user._id, // Reference to the admin user who created it
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


// @route PUT /api/products/:id
// @desc Update an existing product ID
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
    try {
        const { 
            name, 
            description, 
            reward, 
            submittedReports,
            category,
            brand,
            images,
            isFeatured,
            isPublished,
            tags,
            sku,
        } = req.body;

        // Find product by ID
        const product = await Product.findById(req.params.id);

        if (product) {
            // Update product fields
            product.name = name|| product.name;
            product.description = description|| product.description;
            product.reward = reward|| product.reward;
            product.submittedReports = submittedReports|| product.submittedReports;
            product.category = category|| product.category;
            product.brand = brand|| product.brand;
            product.images = images|| product.images;
            product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
            product.tags = tags|| product.tags;
            product.sku = sku|| product.sku;

            // Save the updated product
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
    try {
        // Find the product by ID
        const product = await Product.findById(req.params.id);

        if (product) {
            // Remove the product from DB
            await product.deleteOne();
            res.json({ message: "Product removed" })
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public
router.get("/", async (req, res) => {
    try {
        const { search, category, brand, limit, sortBy, minReward, maxReward } = req.query;

        let query = {};

        // Filter logic
        if (category && category.toLocaleLowerCase() !== "all") {
            query.category = category;
        }

        if (brand && brand.toLocaleLowerCase() !== "all") {
            query.brand = brand;
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
            ];
        }

        if (minReward || maxReward) {
            if (minReward) {
                query['reward.0'] = { $gte: Number(minReward) };
            }

            if (maxReward) {
                query['reward.1'] = { $lte: Number(maxReward) };
            }
        }



        let sort = {};
        // Sort Logic
        if (sortBy) {
            switch (sortBy) {
                case 'minRewardAsc':
                    sort['reward.0'] = 1;
                    break;
                case 'minRewardDesc':
                    sort['reward.0'] = -1;
                    break;
                case 'maxRewardAsc':
                    sort['reward.1'] = 1;
                    break;
                case 'maxRewardDesc':
                    sort['reward.1'] = -1;
                    break;
                default:
                    break;
            }
        }

        // Fetch products and apply sorting and limit
        let products = await Product.find(query)
            .sort(sort)
            .limit(Number(limit) || 0);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// @route GET /api/products/best-seller
// @desc Retrieve the product with highest rating
// @access Public
router.get("/best-seller", async (req, res) => {
    try {
        const bestSeller = await Product.findOne().sort({ submittedReports: -1 });
        if (bestSeller) {
            res.json(bestSeller);
        } else {
            res.status(404).json({ message: "No best seller found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// @route GET /api/products/new-arrivals
// @desc Retrieve latest 8 products - Creation date
// @access Public
router.get("/new-arrivals", async (req, res) => {
    try {
        // Fetch latest 8 products
        const newArrivals = await Product.find().sort({ createdAt: -1}).limit(8);
        res.json(newArrivals);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})

// @route GET /api/products/:id
// @desc Get a single product by ID
// @access Public
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product Not Found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route GET /api/products/similar/:id
// @desc Retrieve similar products based on the current category and brand
// @access Public
router.get("/similar/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found"});
        }

        const similarProducts = await Product.find({
            _id: { $ne: id },
            category: product.category
        }).limit(4);

        res.json(similarProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

module.exports = router;