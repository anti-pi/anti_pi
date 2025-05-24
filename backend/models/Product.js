const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        reward: {
            type: [Number],
            required: true,
        },
        submittedReports: {
            type: Number,
            required: true,
            default: 0,
        },
        sku: {
            type: String,
            unique: true,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
        },
        images: [
            {
                url: {
                    type: String,
                    required: true,
                },
                altText: {
                    type: String,
                },
            },
        ],
        isFeatured: {
            type: Boolean,
            default: false,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
        tags: [String],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        metaTitle: {
            type: String,
        },
        metaDescription: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);