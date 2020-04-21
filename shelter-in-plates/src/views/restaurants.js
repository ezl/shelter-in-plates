const restaurants = {
    'rooh': {
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
        signImageUrl: "/img/restaurants/spoke-and-bird/spoke-and-bird-signature.svg"
    },
    irazu: {
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
