// ==========================================
// Maryam STORES - CONFIGURATION FILE
// EDIT THIS FILE TO UPDATE PRODUCTS, PRICES, PROMO
// ==========================================

const STORE_CONFIG = {
    // ==========================================
    // PROMO SETTINGS - CHANGE DATES HERE
    // ==========================================
    promo: {
        // Set to false to turn off promo completely
        enabled: true,
        
        // Format: YYYY-MM-DD
        startDate: "2026-02-19",
        endDate: "2026-02-23",
        
        // Promo display text
        title: "🌙 RAMADAN PROMO SALE! 🌙",
        subtitle: "✨ Ramadan Special Prices! ✨",
        notice: "RAMADAN PROMO PRICES ACTIVE - SAVE BIG! - ENDS FEB 23",
        
        // Countdown text
        countdownText: "Ends in:"
    },
    
    // ==========================================
    // STORE INFORMATION
    // ==========================================
    store: {
        name: "Maryam's Store",
        phone: "0706506735",
        phoneWithCountryCode: "2347065056735",
        location: "Katsina Dustin Safe Lowcost",
        hours: "Open Daily: 8am - 8pm",
        
        // WhatsApp default message
        whatsappMessage: "Hello! I want to place an order"
    },
    
    // ==========================================
    // SOCIAL LINKS
    // ==========================================
    social: {
        whatsapp: "https://wa.me/2347065056735",
        // Add more if needed: facebook, instagram, etc.
    },
    
    // ==========================================
    // CATEGORIES - Add or remove as needed
    // ==========================================
    categories: [
        { id: "all", name: "All Products" },
        { id: "milk", name: "Milk & Dairy" },
        { id: "breakfast", name: "Breakfast" },
        { id: "grains", name: "Grains & Pasta" },
        { id: "spices", name: "Spices & Seasoning" },
        { id: "snacks", name: "Snacks & Sweets" },
        { id: "produce", name: "Fresh Produce" }
    ],
    
    // ==========================================
    // PRODUCTS - ADD/EDIT/REMOVE HERE
    // ==========================================
    // For images: Upload to imgbb.com or postimages.org
    // Copy the direct link and paste below
    products: [
        // MILK & DAIRY
        {
            id: 1,
            name: "Lactorch Milk",
            category: "milk",
            promoPrice: 3500,
            regularPrice: 4000,
            size: "Kwata",
            // EXAMPLE: image: "https://i.ibb.co/abc123/lactorch.jpg",
            image: "images/cat3.jpg", // <-- REPLACE null WITH YOUR IMAGE URL
            description: "Quality milk powder for tea and beverages",
            badge: "Popular"
        },
        {
            id: 2,
            name: "Lactorch Milk",
            category: "milk",
            promoPrice: 14000,
            regularPrice: 16000,
            size: "Tiya",
            image: "images/cat1.jpg",
            description: "Bulk of Lactorch milk powder",
            badge: "Bulk Save"
        },
        {
            id: 3,
            name: "Kremela",
            category: "milk",
            promoPrice: 1600,
            regularPrice: 1800,
            size: "Per pack",
            image: "images/cat2.jpg",
            description: "Creamy milk for tea and coffee",
            badge: null
        },
        {
            id: 4,
            name: "Condensed Milk",
            category: "milk",
            promoPrice: 2600,
            regularPrice: 2900,
            size: "Per tin",
            image: "images/cat5.jpg",
            description: "Sweet condensed milk for beverages",
            badge: null
        },
        {
            id: 5,
            name: "Milkcose",
            category: "milk",
            promoPrice: 1100,
            regularPrice: 1300,
            size: "Kwata",
            image: "images/dog1.JPG",
            description: "Affordable milk powder",
            badge: null
        },
        
        // BREAKFAST
        {
            id: 6,
            name: "Chocolate Tea",
            category: "breakfast",
            promoPrice: 2400,
            regularPrice: 2700,
            size: "Kwata",
            image: "images/dog1.PNG",
            description: "Rich chocolate tea mix",
            badge: null
        },
        {
            id: 7,
            name: "Cornflakes",
            category: "breakfast",
            promoPrice: 2200,
            regularPrice: 2500,
            size: "Tiya",
            image: "images/dog2.JPG",
            description: "Crispy breakfast cereal",
            badge: null
        },
        {
            id: 8,
            name: "Quaker Oats",
            category: "breakfast",
            promoPrice: 1300,
            regularPrice: 1500,
            size: "Kwata",
            image: "images/photo.jpeg",
            description: "Healthy oatmeal breakfast",
            badge: "Healthy"
        },
        {
            id: 9,
            name: "Indomie Noodles",
            category: "breakfast",
            promoPrice: 2600,
            regularPrice: 2900,
            size: "Tiya",
            image: null,
            description: "Instant noodles - quick meal",
            badge: null
        },
        
        // GRAINS & PASTA
        {
            id: 10,
            name: "Couscous",
            category: "grains",
            promoPrice: 900,
            regularPrice: 1100,
            size: "Kwata",
            image: null,
            description: "Fine couscous for meals",
            badge: null
        },
        {
            id: 11,
            name: "Tafiyoka",
            category: "grains",
            promoPrice: 1300,
            regularPrice: 1500,
            size: "Kwata",
            image: null,
            description: "Premium pasta product",
            badge: null
        },
        
        // SPICES & SEASONING
        {
            id: 12,
            name: "Bama Shawarma Mix",
            category: "spices",
            promoPrice: 2700,
            regularPrice: 3000,
            size: "Per pack",
            image: null,
            description: "Special shawarma seasoning",
            badge: null
        },
        {
            id: 13,
            name: "Sugar",
            category: "spices",
            promoPrice: 900,
            regularPrice: 1000,
            size: "Jikka",
            image: null,
            description: "Refined white sugar",
            badge: null
        },
        {
            id: 14,
            name: "Sugar",
            category: "spices",
            promoPrice: 18500,
            regularPrice: 20000,
            size: "jikka 20",
            image: null,
            description: "Large bag of sugar",
            badge: "Bulk 20 sugar packs"
        },
        {
            id: 16,
            name: "Farin Maggi",
            category: "spices",
            promoPrice: 1500,
            regularPrice: 1700,
            size: "Kwata",
            image: null,
            description: "Original Maggi seasoning",
            badge: null
        },
        {
            id: 17,
            name: "Maggi Star",
            category: "spices",
            promoPrice: 1500,
            regularPrice: 1700,
            size: "Kwata",
            image: null,
            description: "Star Maggi cubes",
            badge: null
        },
        {
            id: 18,
            name: "Maggi Yinka",
            category: "spices",
            promoPrice: 1500,
            regularPrice: 1700,
            size: "50 pieces",
            image: null,
            description: "50 cubes of Maggi Yinka",
            badge: null
        },
        
        // SNACKS & SWEETS
        {
            id: 19,
            name: "Cheese Balls",
            category: "snacks",
            promoPrice: 800,
            regularPrice: 1000,
            size: "Tiya",
            image: null,
            description: "Crunchy cheese snacks",
            badge: null
        },
        {
            id: 20,
            name: "Cincin",
            category: "snacks",
            promoPrice: 700,
            regularPrice: 800,
            size: "Kwata",
            image: null,
            description: "Traditional crunchy snacks",
            badge: null
        },
        {
            id: 21,
            name: "Aljalal Halawa",
            category: "snacks",
            promoPrice: 230,
            regularPrice: 280,
            size: "Small",
            image: null,
            description: "Sweet halawa candy",
            badge: null
        },
        {
            id: 22,
            name: "Aljalal Halawa",
            category: "snacks",
            promoPrice: 5600,
            regularPrice: 6000,
            size: "Kwali (Carton)",
            image: null,
            description: "Carton of halawa sweets",
            badge: null
        },
        {
            id: 23,
            name: "Lookma Cake",
            category: "snacks",
            promoPrice: 7000,
            regularPrice: 7500,
            size: "Kwali",
            image: null,
            description: "Delicious Lookma cakes",
            badge: null
        },
        
        // FRESH PRODUCE
        {
            id: 24,
            name: "Dankali (Sweet Potatoes)",
            category: "produce",
            promoPrice: 2600,
            regularPrice: 2900,
            size: "Tiya",
            image: null,
            description: "Fresh sweet potatoes",
            badge: "Fresh"
        },
        {
            id: 25,
            name: "Dankali (Sweet Potatoes)",
            category: "produce",
            promoPrice: 15000,
            regularPrice: 16500,
            size: "Bucket",
            image: null,
            description: "Full bucket of fresh dankali",
            badge: "Bulk"
        },
        {
            id: 26,
            name: "Doya (Yams)",
            category: "produce",
            promoPrice: 2500,
            regularPrice: 2800,
            size: "Small bunch",
            image: null,
            description: "Fresh yams - various sizes",
            badge: null
        },
        {
            id: 27,
            name: "Doya (Yams)",
            category: "produce",
            promoPrice: 3500,
            regularPrice: 3800,
            size: "Medium bunch",
            image: null,
            description: "Fresh yams - various sizes",
            badge: null
        },
        {
            id: 28,
            name: "Doya (Yams)",
            category: "produce",
            promoPrice: 5000,
            regularPrice: 5500,
            size: "Large bunch",
            image: null,
            description: "Fresh yams - various sizes",
            badge: null
        }
    ]

};
