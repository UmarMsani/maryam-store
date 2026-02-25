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
            regularPrice: 3700,
            size: "Kwata",
            // EXAMPLE: image: "https://i.ibb.co/abc123/lactorch.jpg",
            image: "images/Lactorch milk.jpeg",
            description: "Quality milk powder for tea and beverages",
            badge: "Popular"
        },
        {
            id: 2,
            name: "Lactorch Milk",
            category: "milk",
            promoPrice: 14000,
            regularPrice: 14800,
            size: "Tiya",
            image: "images/Lactorch milk.jpeg",
            description: "Bulk of Lactorch milk powder",
            badge: "Bulk Save"
        },
        {
            id: 3,
            name: "Kremela",
            category: "milk",
            promoPrice: 1600,
            regularPrice: 1700,
            size: "Per pack",
            image: "images/Kremela.jpeg",
            description: "Creamy milk for tea and coffee",
            badge: null
        },
        {
            id: 4,
            name: "Condensed Milk",
            category: "milk",
            promoPrice: 2500,
            regularPrice: 2600,
            size: "Per tin",
            image: "images/Condense milk.jpeg",
            description: "Sweet condensed milk for beverages",
            badge: null
        },
        {
            id: 4,
            name: "Complan Milk",
            category: "milk",
            promoPrice: 2500,
            regularPrice: 2000,
            size: "Per pack",
            image: "images/Milk complan.jpeg",
            description: "Sweet young champs milk",
            badge: null
        },
        {
            id: 5,
            name: "Milkcose",
            category: "milk",
            promoPrice: 1100,
            regularPrice: 1300,
            size: "Kwata",
            image: "images/",
            description: "Affordable milk powder",
            badge: null
        },
        {
            id: 5,
            name: "Cocopops",
            category: "milk",
            promoPrice: 500,
            regularPrice: 600,
            size: "Kwata",
            image: "images/Cocopops.jpeg",
            description: "Affordable milk powder",
            badge: null
        },
        
        // BREAKFAST
        {
            id: 6,
            name: "Chocolate Tea",
            category: "breakfast",
            promoPrice: 2400,
            regularPrice: 2500,
            size: "Kwata",
            image: "images/Chokolate tea.jpeg",
            description: "Rich chocolate tea mix",
            badge: null
        },
        {
            id: 7,
            name: "Cornflakes",
            category: "breakfast",
            promoPrice: 2200,
            regularPrice: 2400,
            size: "Tiya",
            image: "images/Cornflask.jpeg",
            description: "Crispy breakfast cereal",
            badge: null
        },
        {
            id: 8,
            name: "Quaker Oats",
            category: "breakfast",
            promoPrice: 1300,
            regularPrice: 1400,
            size: "Kwata",
            image: "images/Quaker oats.jpeg",
            description: "Healthy oatmeal breakfast",
            badge: "Healthy"
        },
        {
            id: 9,
            name: "Indomie Noodles",
            category: "breakfast",
            promoPrice: 2600,
            regularPrice: 2800,
            size: "Tiya",
            image: "images/Indomie.jpeg",
            description: "Instant noodles - quick meal",
            badge: null
        },
        
        // GRAINS & PASTA
        {
            id: 10,
            name: "Couscous",
            category: "grains",
            promoPrice: 900,
            regularPrice: 1000,
            size: "Kwata",
            image: "images/Couscous.jpeg",
            description: "Fine couscous for meals",
            badge: null
        },
        {
            id: 11,
            name: "Tafiyoka",
            category: "grains",
            promoPrice: 1300,
            regularPrice: 1400,
            size: "Kwata",
            image: "images/Tafiyoka.jpeg",
            description: "Premium pasta product",
            badge: null
        },
        
        // SPICES & SEASONING
        {
            id: 12,
            name: "Bama Shawarma Mix",
            category: "spices",
            promoPrice: 2700,
            regularPrice: 2800,
            size: "Per pack",
            image: "images/Bama.jpeg",
            description: "Special shawarma seasoning",
            badge: null
        },
        {
            id: 13,
            name: "Sugar",
            category: "spices",
            promoPrice: 900,
            regularPrice: 900,
            size: "Jikka",
            image: "imeages/Sugar.jpeg",
            description: "Refined white sugar",
            badge: null
        },
        {
            id: 14,
            name: "Sugar",
            category: "spices",
            promoPrice: 18500,
            regularPrice: 18500,
            size: "jikka 20",
            image: "imeages/Sugar.jpeg",
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
            regularPrice: 1600,
            size: "Kwata",
            image: "images/Maggi star.jpeg",
            description: "Star Maggi cubes",
            badge: null
        },
        {
            id: 18,
            name: "Maggi Yinka",
            category: "spices",
            promoPrice: 1500,
            regularPrice: 1600,
            size: "50 pieces",
            image: "images/Maggi yinka.jpeg",
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
            image: "images/Cheese balls.jpeg",
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
            regularPrice: 250,
            size: "Small",
            image: "images/Aljalal halawa.jpeg",
            description: "Sweet halawa candy",
            badge: null
        },
        {
            id: 22,
            name: "Aljalal Halawa",
            category: "snacks",
            promoPrice: 5600,
            regularPrice: 5800,
            size: "30 pieces",
            image: "images/Aljalal halawa.jpeg",
            description: "Carton of halawa sweets",
            badge: null
        },
        {
            id: 23,
            name: "Lookma Cake",
            category: "snacks",
            promoPrice: 150,
            regularPrice: 200,
            size: "per one",
            image: "images/Lookma cake.jpeg",
            description: "Delicious Lookma cakes",
            badge: null
        },
        {
            id: 23,
            name: "Lookma Cake",
            category: "snacks",
            promoPrice: 7000,
            regularPrice: 7200,
            size: "Kwali",
            image: "images/Lookma cake.jpeg",
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
            regularPrice: 2500,
            size: "Small bunch",
            image: "images/Yam small.jpeg",
            description: "Fresh yams - various sizes",
            badge: null
        },
        {
            id: 27,
            name: "Doya (Yams)",
            category: "produce",
            promoPrice: 3500,
            regularPrice: 3500,
            size: "Medium bunch",
            image: "images/Yam medium.jpeg",
            description: "Fresh yams - various sizes",
            badge: null
        },
        {
            id: 28,
            name: "Doya (Yams)",
            category: "produce",
            promoPrice: 4500,
            regularPrice: 5000,
            size: "Large bunch",
            image: "images/Yam big.jpeg",
            description: "Fresh yams - various sizes",
            badge: null
        }
    ]

};



