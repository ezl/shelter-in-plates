const restaurants = {
    'blankslatenyc': {
        cityName: "New York",
        headerImageUrl:"/img/restaurants/blankslatenyc/BlankSlate_Background.png",
        title: "Blank Slate",
        restaurantFontClass: 'blankslatenycFont',
        subTitleOverride: 'Join Blank Slate in Helping Hospitals & Essential Workers Fight Covid-19',
        name: "Blank Slate",
        slug: "blankslatenyc",
        link: "https://www.blankslatenyc.com/",
        logoUrl: "/img/restaurants/blankslatenyc/BlankSlate_Logo.png",
        openGraphImageUrl: "/img/restaurants/blankslatenyc/blank-slate-preview-b.png",
        menuItems: [{
            imageUrl: "/img/restaurants/blankslatenyc/BlankSlate_FoodPicture_1.png",
            name: "Buy a meal for a healthcare worker: Once",
            type: "once",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in New York on your behalf.",
            price: 10.00,
            stripeProductId: "sku_H9Q6ZxerZbHoGv"
        },{
            imageUrl: "/img/restaurants/blankslatenyc/BlankSlate_FoodPicture_2.png",
            name: "Buy a meal for a healthcare worker: Weekly",
            type: "weekly",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in New York on your behalf.",
            price: 10.00,
            stripeProductId: "plan_H9Q8NSpgtXOt11"
        }],
        bottomMessage: "",
        owner: "Ashley Jaffe & Zach Israel",
        signImageUrl: "/img/restaurants/blankslatenyc/BlankSlate_Signature_Teal.png",
        topCopyOverride: "" +
        "<p>" +
            "Hospital staff and essential workers in New York - and all over the world - are our heroes!" +
        "</p>" +
        "<p>" +
            "Imagine that instead of “distancing” right now you were leaving home each day to interact with hundreds of people who all have in common the fact that they are sick.</p>" +
         "</p>" +
        "<p>" +
            "The doctors, nurses, techs and administrators do their work with care, with professionalism, and with selflessness. But they’re not immune to anxiety and they certainly feel overwhelmed during intense times like these." +
         "</p>",
        bottomCopyOverride: null
    },
    'donate': {
        cityName: "town",
        headerImageUrl:"/img/photos/bg-croissant.jpg",
        title: "❤️ Buy A Meal For A Healthcare Hero",
        restaurantFontClass: 'sipFont',
        name: "Shelter-In-Plates",
        slug: "donate",
        link: "https://www.shelter-in-plates.com/",
        logoUrl: "/img/restaurants/donate/logo-spot-min.png",
        openGraphImageUrl: "/img/default-preview.png",
        menuItems: [{
            imageUrl: "/img/restaurants/donate/food-2.png",
            name: "Buy a meal for a healthcare worker: Once",
            type: "once",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker on your behalf.",
            price: 10.00,
            stripeProductId: "sku_H9GWsH07hrUtfn"
        },{
            imageUrl: "/img/restaurants/donate/food-1.png",
            name: "Buy a meal for a healthcare worker: Weekly",
            type: "weekly",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker on your behalf.",
            price: 10.00,
            stripeProductId: "plan_H9GYYJijpyOwYX"
        }],
        bottomMessage: "",
        owner: "The Shelter-In-Plates Team ❤️",
        signImageUrl: null
    },
    'rooh': {
        cityName: "Chicago",
        headerImageUrl:"/img/restaurants/rooh/rooh-background.png",
        title: "ROOH",
        restaurantFontClass: 'roohFont',
        name: "ROOH",
        slug: "rooh",
        link: "https://www.roohchicago.com/",
        logoUrl: "/img/restaurants/rooh/rooh-logo.png",
        openGraphImageUrl: "/img/default-preview.png",
        menuItems: [{
            imageUrl: "/img/restaurants/rooh/rooh-1.png",
            name: "Buy a meal for a healthcare worker: Once",
            type: "once",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
            price: 14.00,
            stripeProductId: "sku_H7M4OPS9nnwB3o"
        },{
            imageUrl: "/img/restaurants/rooh/rooh-2.png",
            name: "Buy a meal for a healthcare worker: Weekly",
            type: "weekly",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
            price: 14.00,
            stripeProductId: "plan_H7MCLxBa8rN6Td"
        }],
        bottomMessage: "",
        owner: "Manish & Rina Mallick",
        signImageUrl: "/img/restaurants/rooh/rooh-signature.png"
    },
    irazu: {
        cityName: "Chicago",
        headerImageUrl:"/img/restaurants/irazu/irazu-background.png",
        title: "Irazú: Costa Rican Restaurant",
        name: "Irazú",
        slug: "irazu",
        link: "http://irazuchicago.com/",
        logoUrl: "/img/restaurants/irazu/logo.png",
        openGraphImageUrl: "/img/restaurants/irazu/irazu-preview.png",
        menuItems: [{
            imageUrl: "/img/restaurants/irazu/irazu-1.png",
            name: "Buy a meal for a healthcare worker: Once",
            type: "once",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
            price: 10.00,
            stripeProductId: "sku_H22PTicjZnGInj"
        },{
            imageUrl: "/img/restaurants/irazu/irazu-2.png",
            name: "Buy a meal for a healthcare worker: Weekly",
            type: "weekly",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
            price: 10.00,
            stripeProductId: "plan_H22Vwju9g8N0TZ"
        }],
        bottomMessage: "",
        owner: "Henry Cerdas",
        signImageUrl: "/img/restaurants/irazu/henry-signature.png"
    },
    'spoke-and-bird': {
        cityName: "Chicago",
        headerImageUrl:"/img/restaurants/spoke-and-bird/spoke-and-bird-background.png",
        title: "Spoke & Bird",
        restaurantFontClass: 'spokeAndBirdFont',
        name: "Spoke & Bird",
        slug: "spoke-and-bird",
        logoUrl: "/img/restaurants/spoke-and-bird/logo.png",
        link: "https://www.spokeandbird.com",
        openGraphImageUrl: "/img/restaurants/spoke-and-bird/spoke-and-bird-preview.png",
        menuItems: [{
            imageUrl: "/img/restaurants/spoke-and-bird/spoke-and-bird-2.png",
            name: "Buy a meal for a healthcare worker: Once",
            type: "once",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
            price: 10.00,
            stripeProductId: "sku_H2ULIbt8AAT8Is"
        },{
            imageUrl: "/img/restaurants/spoke-and-bird/spoke-and-bird-1.png",
            name: "Buy a meal for a healthcare worker: Weekly",
            type: "weekly",
            description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
            price: 10.00,
            stripeProductId: "plan_H2UNsOcyLYMf8R"
        }],
        bottomMessage: "",
        owner: "Alicia & Scott",
        signImageUrl: "/img/restaurants/spoke-and-bird/spoke-and-bird-signature.svg"
    }
}

export default restaurants
