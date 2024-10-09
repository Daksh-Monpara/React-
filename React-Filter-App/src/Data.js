const category = [
    {
        id : 1,
        name : "iPhone"
    },
    {
        id :2,
        name : "Watch"
    },
    {
        id : 3,
        name : "AirPods"
    },
    {
        id : 4,
        name : "Mac"
    }

]

const Item = [
    {
        id : 1,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312",
        name : "iPhone 15 pro",
        price : "1,44,900",
        category : "iPhone"
    },
    {
        id : 2,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s9-202403?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1707857916163",
        name : "Apple Watch Series 9",
        price : "41,999",
        category : "Watch"
    },
    {
        id : 3,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005",
        name : "AirPods 2nd generation",
        price : "1,29,000",
        category : "AirPods"
    },
    {
        id : 4,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-m2-m3-202402?wid=1400&hei=1000&fmt=p-jpg&qlt=95&.v=1707259317253",
        name : "MacBook Air",
        price : "99,900",
        category : "Mac"
    },
    {
        id : 5,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1697229623322",
        name : "iMac",
        price : "1,34,900",
        category : "Mac"
    },
    {
        id : 6,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
        name : "AirPods 3rd generation",
        price : "19,900",
        category : "AirPods"
    },
    {
        id : 7,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202403_GEO_IN?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1708673881190",
        name : "Apple Watch Ultra 2",
        price : "89,900",
        category : "Watch"
    },
    {
        id : 8,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-se-202403?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1707857916288",
        name : "Apple Watch SE",
        price : "29,900",
        category : "Watch"
    },
    {
        id : 9,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559",
        name : "iPhone 15",
        price : "85,900",
        category : "iPhone"
    },
    {
        id : 10,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290654",
        name : "iPhone 14",
        price : "78,999",
        category : "iPhone"
    },
    {
        id : 11,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014867061",
        name : "AirPods Pro (USB-C)",
        price : "24,900",
        category : "AirPods"
    },
    {
        id : 12,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692912410963",
        name : "iPhone 13",
        price : "69,990",
        category : "iPhone"
    },
    {
        id : 13,
        img : "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX466_.jpg",
        name : "AirPods Max",
        price : "59,900",
        category : "AirPods"
    },
    {
        id : 14,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/45-nc-alum-starlight-sport-loop-starlight-s9?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1693282090261",
        name : "Apple Watch",
        price : "41,900",
        category : "Watch"
    },
    {
        id : 15,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670549737872",
        name : "Mac Mini",
        price : "54,990",
        category : "Mac"
    },
    {
        id : 16,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1699558878477",
        name : "MacBook Pro",
        price : "1,69,900",
        category : "Mac"
    },
    {
        id : 17,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        name : "iPhone SE",
        price : "41,900",
        category : "iPhone"
    },
    {
        id : 18,
        img : "https://m.media-amazon.com/images/I/41xRYjiTO3L._SX300_SY300_QL70_FMwebp_.jpg",
        name : "Apple Ultra 6",
        price : "32,990",
        category : "Watch"
    },
    {
        id : 19,
        img : "https://m.media-amazon.com/images/I/61PVDnnOXEL._SX679_.jpg",
        name : "Airpods pro",
        price : "19,500",
        category : "AirPods"
    },
    {
        id : 20,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645558306366",
        name : "Studio Display",
        price : "1,59,900",
        category : "Mac"
    },
    {
        id : 21,
        img : "https://m.media-amazon.com/images/I/41Sv26QVyrL._SX300_SY300_QL70_FMwebp_.jpg",
        name : "Apple Watch Series 8",
        price : "39,499",
        category : "Watch"
    },
    {
        id : 22,
        img : "https://m.media-amazon.com/images/I/41lpiu-GMXL._SY445_SX342_QL70_FMwebp_.jpg",
        name : "Apple 2022 MacBook",
        price : "89,990",
        category : "Mac"
    },
    {
        id : 23,
        img : "https://m.media-amazon.com/images/I/3144jXPtX4L._SY445_SX342_QL70_FMwebp_.jpg",
        name : "iPhone 12 Pro",
        price : "52,000",
        category : "iPhone"
    },
    {
        id : 24,
        img : "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg",
        name : "iPhone 12",
        price : "49,546",
        category : "iPhone"
    },
    {
        id : 25,
        img : "https://m.media-amazon.com/images/I/71Dh450OVpL._AC_UY218_.jpg",
        name : "MacBook Pro",
        price : "1,16,000",
        category : "Mac"
    },
]

export {category, Item}