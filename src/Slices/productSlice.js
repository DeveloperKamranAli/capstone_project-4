// productSlice.js
import { createSlice } from "@reduxjs/toolkit";
const products1 = [
  {
    id: 1,
    name: "Audionic Airbud 550",
    brand: "Audionic",
    price: 3811,
    retailPrice: 9990,
    discount: "62% OFF",
    rating: 4.8,
    reviews: 538,
    imageUrl: "https://images.priceoye.pk/audionic-airbud-550-pakistan-priceoye-o6fve-270x270.webp",
    description: "High-quality wireless earbuds with a comfortable fit and impressive sound clarity.",
  },
  {
    id: 2,
    name: "Anker R50i Earbuds",
    brand: "Anker",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.7,
    reviews: 30,
    imageUrl: "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
    description: "Experience premium audio quality with long battery life and fast charging capabilities.",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Buds 6 Lite",
    brand: "Xiaomi",
    price: 5899,
    retailPrice: 6999,
    discount: "16% OFF",
    rating: 4.4,
    reviews: 11,
    imageUrl: "https://images.priceoye.pk/xiaomi-redmi-buds-6-lite-wireless-earbuds-pakistan-priceoye-c4dfa-270x270.webp",
    description: "Lightweight earbuds featuring advanced noise cancellation and seamless connectivity.",
  },
  {
    id: 4,
    name: "QCY T13 ANC 2",
    brand: "QCY",
    price: 4549,
    retailPrice: 7399,
    discount: "39% OFF",
    rating: 4.1,
    reviews: 14,
    imageUrl: "https://images.priceoye.pk/qcy-t13-anc-2-pakistan-priceoye-uvlbc-270x270.webp",
    description: "Affordable earbuds with active noise cancellation and crystal-clear audio quality."
  },
  {
    id: 5,
    name: "Redmi Buds 6  Wireless Earbuds",
    brand: "Xiaomi",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.5,
    reviews: 60,
    imageUrl: "https://images.priceoye.pk/redmi-buds-6-active-wireless-earbuds-pakistan-priceoye-h6kkk-270x270.webp",
    description: "Durable and stylish earbuds offering superb sound quality for music and calls."
  },
  {
    id: 6,
    name: "Soundpeats Wireless Earbuds",
    brand: "Soundpeats",
    price: 10518,
    retailPrice: 14000,
    discount: "25% OFF",
    rating: 3.7,
    reviews: 6,
    imageUrl: "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
    description: "Engineered for bass enthusiasts with dual drivers and ergonomic design."
  },
];

const products2 = [
  {
    id: 7,
    name: "Soundpeats  Earbuds",
    brand: "Soundpeats",
    price: 10518,
    retailPrice: 41400,
    discount: "25% OFF",
    rating: 4.6,
    reviews: 13,
    imageUrl: "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
    description: "High-quality wireless earbuds with a comfortable fit and impressive sound clarity."
  },
  {
    id: 8,
    name: "Imiki MT2 Wireless Earbuds",
    brand: "Imiki",
    price: 4299,
    retailPrice: 69999,
    discount: "39% OFF",
    rating: 4.9,
    reviews: 38,
    imageUrl: "https://images.priceoye.pk/imilab-imiki-mt2-wireless-erbuds-pakistan-priceoye-obxhu-270x270.webp",
    description: "Experience premium audio quality with long battery life and fast charging capabilities."
  },
  {
    id: 9,
    name: "Realme T100 Wireless Earbuds",
    brand: "Realme",
    price: 9999,
    retailPrice: 15999,
    discount: "42% OFF",
    rating: 4.9,
    reviews: 42,
    imageUrl: "https://images.priceoye.pk/realme-t100-wireless-earbuds-pakistan-priceoye-tq6ud-270x270.webp",
    description: "Lightweight earbuds featuring advanced noise cancellation and seamless connectivity."
  },
  {
    id: 10,
    name: "Anker R50i Earbuds",
    brand: "Anker",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.7,
    reviews: 31,
    imageUrl: "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
    description: "Durable earbuds offering superb sound quality for music and calls."
  },
  {
    id: 11,
    name: "Audionic Airbud 590  Earbuds",
    brand: "Audionic",
    price: 3499,
    retailPrice: 4999,
    discount: "58% OFF",
    rating: 4.8,
    reviews: 45,
    imageUrl: "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description: "Affordable earbuds engineered for bass enthusiasts with ergonomic design."
  },
  {
    id: 12,
    name: "Xiaomi Wireless Earbuds", // Updated company name to Xiaomi
    brand: "Xiaomi", 
    price: 9499,
    retailPrice: 9499,
    discount: "58% OFF",
    rating: 4.8,
    reviews: 45,
    imageUrl: "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description: "Durable and stylish earbuds offering superb sound quality for music and calls."
  },
];
const products3 = [
  {
    id: 13,
    name: "Huawei Watch 2 Pro",
    brand: "Huawei",
    price: 5799,
    retailPrice: 7500,
    discount: "23% OFF",
    rating: 4.1,
    reviews: 14,
    imageUrl: "https://images.priceoye.pk/ultra-smart-watch-7-in-1-pakistan-priceoye-3ybh3-270x270.webp",
   description: "Sophisticated smart watch with exceptional battery life."
  },
  {
    id: 14,
    name: "Ultra Smart Watch with 7 Straps",
    brand: "Generic",
    price: 1679,
    retailPrice: 8079,
    discount: "79% OFF",
    rating: 4.7,
    reviews: 199,
    imageUrl: "https://images.priceoye.pk/yolo-ultron-smart-watch-pakistan-priceoye-0jv0u-270x270.webp",
    description: "Stylish and versatile smart watch with 7 interchangeable straps."
  },
  {
    id: 15,
    name: "YOLO Ultra Smart Watch",
    brand: "YOLO",
    price: 7999,
    retailPrice: 17999,
    discount: "56% OFF",
    rating: 4.4,
    reviews: 10,
    imageUrl: "https://images.priceoye.pk/huawei-band-9-pakistan-priceoye-9kqv0-270x270.webp",
    description: "Feature-packed smart watch with advanced functionality."
  },
  {
    id: 16,
    name: "Huawei Band 9",
    brand: "Huawei",
    price: 9899,
    retailPrice: 20551,
    discount: "51% OFF",
    rating: 5.0,
    reviews: 26,
    imageUrl: "https://images.priceoye.pk/xiaomi-haylou-watch-2-pro-pakistan-priceoye-4n3ao-270x270.webp",
    description: "High-performance fitness band with robust features."
  },
  {
    id: 17,
    name: "G-Tide R1 Smart Watch",
    brand: "G-Tide",
    price: 9100,
    retailPrice: 18200,
    discount: "50% OFF",
    rating: 4.5,
    reviews: 60,
    imageUrl: "https://images.priceoye.pk/g-tide-r1-smart-watch-pakistan-priceoye-xlubt-270x270.webp",
    description: "Durable and reliable smart watch for everyday use."
  },
  {
    id: 18,
    name: "Apple Watch Ultra 49mm",
    brand: "Apple",
    price: 224999,
    retailPrice: 300000,
    discount: "25% OFF",
    rating: 4.7,
    reviews: 245,
    imageUrl: "https://images.priceoye.pk/apple-watch-ultra-49mm-pakistan-priceoye-7zgtj-270x270.webp",
    description: "Premium smart watch with cutting-edge technology and design."
  },

];

const products4 = [
  {
    id: 19,
    name: "HK9 Pro Max Plus Smart Watch",
    brand: "HK9",
    price: 5799,
    retailPrice: 8000,
    discount: "27% OFF",
    rating: 4.8,
    reviews: 17,
    imageUrl: "https://images.priceoye.pk/hk9-pro-max-plus-smartwatch-pakistan-priceoye-4n0i7-270x270.webp",
    description: "An advanced smartwatch offering health monitoring and multi-sport tracking features."
  },
  {
    id: 20,
    name: "Realme Smart Watch",
    brand: "Realme",
    price: 3499,
    retailPrice: 14999,
    discount: "77% OFF",
    rating: 4.9,
    reviews: 28,
    imageUrl: "https://images.priceoye.pk/realme-watch-pakistan-priceoye-g61ky-270x270.webp",
    description: "A stylish smartwatch with long battery life and high-resolution display."
  },
  {
    id: 21,
    name: "Mibro Watch Lite 3 with Dual Strap",
    brand: "Mibro",
    price: 11999,
    retailPrice: 22500,
    discount: "47% OFF",
    rating: 4.7,
    reviews: 33,
    imageUrl: "https://images.priceoye.pk/mibro-watch-lite-3-pakistan-priceoye-nq89u-270x270.webp",
    description: "A durable and feature-packed smartwatch with a sleek design."
  },
  {
    id: 22,
    name: "Xiaomi Redmi Watch 5 Active",
    brand: "Xiaomi",
    price: 6999,
    retailPrice: 18000,
    discount: "52% OFF",
    rating: 4.3,
    reviews: 36,
    imageUrl: "https://images.priceoye.pk/xiaomi-redmi-watch-5-active-pakistan-priceoye-n4ewq-270x270.webp",
    description: "A lightweight smartwatch with fitness tracking and water resistance."
  },
  {
    id: 23,
    name: "Apple Watch SE 44mm",
    brand: "Apple",
    price: 75999,
    retailPrice: 189999,
    discount: "60% OFF",
    rating: 4.5,
    reviews: 102,
    imageUrl: "https://images.priceoye.pk/apple-watch-se-44mm-pakistan-priceoye-0n7w6-270x270.webp",
    description: "Premium smartwatch with advanced features and seamless Apple ecosystem integration."
  },
  {
    id: 24,
    name: "Huawei Fit 2 Smartwatch",
    brand: "Huawei",
    price: 27799,
    retailPrice: 49999,
    discount: "44% OFF",
    rating: 4.9,
    reviews: 99,
    imageUrl: "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description: "A modern fitness smartwatch with personalized health insights and a vibrant display."
  }
];

const products5 = [
  {
    id: 25,
    name: "Examine Redmi S3X",
    brand: "Xiaomi",
    price: 16299,
    retailPrice: 20999,
    discount: "22% OFF",
    rating: 4.8,
    reviews: 138,
    imageUrl: "https://images.priceoye.pk/xiaomi-redmi-a3x-pakistan-priceoye-g7ueo-270x270.webp",
    description: "Affordable mobile with excellent features and sleek design.",
  },
  {
    id: 26,
    name: "Tecno Spark Charity",
    brand: "Tecno",
    price: 36999,
    retailPrice: 39999,
    discount: "8% OFF",
    rating: 5.0,
    reviews: 101,
    imageUrl: "https://images.priceoye.pk/tecno-spark-30-pakistan-priceoye-rcs5e-270x270.webp",
    description: "Budget-friendly smartphone with great performance.",
  },
  {
    id: 27,
    name: "Vivo V40e",
    brand: "Vivo",
    price: 89999,
    retailPrice: 99999,
    discount: "10% OFF",
    rating: 5.0,
    reviews: 50,
    imageUrl: "https://images.priceoye.pk/vivo-v40e-pakistan-priceoye-gylye-270x270.webp",
    description: "High-quality camera and performance, perfect for daily use.",
  },
  {
    id: 28,
    name: "Idle S24",
    brand: "Itel",
    price: 25299,
    retailPrice: 33999,
    discount: "26% OFF",
    rating: 4.8,
    reviews: 110,
    imageUrl: "https://images.priceoye.pk/itel-s24-pakistan-priceoye-sabyj-270x270.webp",
    description: "Stylish design and reliable performance at a great price.",
  },
  {
    id: 29,
    name: "Examine Redmi S3",
    brand: "Xiaomi",
    price: 19299,
    retailPrice: 23999,
    discount: "20% OFF",
    rating: 4.8,
    reviews: 295,
    imageUrl: "https://images.priceoye.pk/xiaomi-redmi-a3-pakistan-priceoye-z5m8c-270x270.webp",
    description: "Durable and powerful mobile for everyday tasks.",
  },
  {
    id: 30,
    name: "Apple iPhone 16 Pro",
    brand: "Apple",
    price: 425500,
    retailPrice: 446000,
    discount: "5% OFF",
    rating: 4.8,
    reviews: 500,
    imageUrl: "https://images.priceoye.pk/apple-iphone-16-pro-pakistan-priceoye-u4pw9-270x270.webp",
    description: "Premium smartphone with cutting-edge features and luxury feel.",
  },
];

const products6 = [
  {
    id: 31,
    name: "XAML POCO C75",
    brand: "Xiaomi",
    price: 31999,
    retailPrice: 36999,
    discount: "14% OFF",
    rating: 5.0,
    reviews: 11,
    imageUrl: "https://images.priceoye.pk/xiaomi-poco-c75-pakistan-priceoye-aowis-270x270.webp",
    description: "A powerful smartphone with a sleek design and excellent performance for everyday use."
  },
  {
    id: 32,
    name: "Samsung Galaxy",
    brand: "Samsung",
    price: 22999,
    retailPrice: 26999,
    discount: "15% OFF",
    rating: 4.9,
    reviews: 46,
    imageUrl: "https://images.priceoye.pk/samsung-galaxy-a06-pakistan-priceoye-lagde-270x270.webp",
    description: "A budget-friendly smartphone with a vibrant display and reliable performance."
  },
  {
    id: 33,
    name: "Realme C75",
    brand: "Realme",
    price: 42899,
    retailPrice: 49999,
    discount: "14% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl: "https://images.priceoye.pk/realme-c75-pakistan-priceoye-spltg-270x270.webp",
    description: "A feature-packed smartphone offering excellent value for money."
  },
  {
    id: 34,
    name: "Samsung Galaxy A16",
    brand: "Samsung",
    price: 51699,
    retailPrice: 54999,
    discount: "6% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl: "https://images.priceoye.pk/samsung-galaxy-a16-pakistan-priceoye-qqcnx-270x270.webp",
    description: "A reliable smartphone with long battery life and a modern design."
  },
  {
    id: 35,
    name: "Realme C6",
    brand: "Realme",
    price: 19400,
    retailPrice: 32999,
    discount: "11% OFF",
    rating: 4.9,
    reviews: 25,
    imageUrl: "https://images.priceoye.pk/realme-c61-pakistan-priceoye-v5h3g-270x270.webp",
    description: "An affordable smartphone with a sleek design and efficient performance."
  },
  {
    id: 36,
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    price: 499999,
    retailPrice: 526999,
    discount: "5% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl: "https://images.priceoye.pk/apple-iphone-16-pro-max-pakistan-priceoye-v0q3c-270x270.webp",
    description: "A premium smartphone with cutting-edge technology and unmatched performance."
  }
];


const products7 = [
  {
    id: 37,
    name: "VG0T Blade Trimmer",
    brand: "VGR",
    price: 2559,
    retailPrice: 5500,
    discount: "53% OFF",
    rating: 3.7,
    reviews: 71,
    imageUrl: "https://images.priceoye.pk/vgr-zero-t-blade-trimmer-v-030-pakistan-priceoye-c2lke-270x270.webp",
    description: "Precision blade trimmer for clean and sharp styling with a compact design."
  },
  {
    id: 38,
    name: "Stainless Steel Blade Trimmer",
    brand: "VGR",
    price: 2499,
    retailPrice: 6000,
    discount: "58% OFF",
    rating: 4.7,
    reviews: 79,
    imageUrl: "https://images.priceoye.pk/vgr-stainless-steel-blade-trimmer-v-031-pakistan-priceoye-qyjpu-270x270.webp",
    description: "Durable stainless steel trimmer for effortless grooming and precision cuts."
  },
  {
    id: 39,
    name: "Personal Groomer Kit PG180",
    brand: "Remington",
    price: 5899,
    retailPrice: 6900,
    discount: "15% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl: "https://images.priceoye.pk/remington-pilot-personal-groomer-kit-pg180-pakistan-priceoye-i31xi-270x270.webp",
    description: "All-in-one grooming kit for professional and home use with multiple attachments."
  },
  {
    id: 40,
    name: "Grooming Kit Shaving Machine",
    brand: "Kemei",
    price: 3699,
    retailPrice: 7000,
    discount: "47% OFF",
    rating: 4.0,
    reviews: 29,
    imageUrl: "https://images.priceoye.pk/kemei-7-in-1-grooming-kit-shaving-machine-set-km-580-pakistan-priceoye-xu1d2-270x270.webp",
    description: "Multi-purpose grooming kit for versatile shaving and trimming needs."
  },
  {
    id: 41,
    name: "Hair and Beard Trimmer",
    brand: "Kemei",
    price: 1799,
    retailPrice: 3700,
    discount: "53% OFF",
    rating: 4.1,
    reviews: 102,
    imageUrl: "https://images.priceoye.pk/kemei-km-6330-hair-beard-trimmer-3-in-1-pakistan-priceoye-kge42-270x270.webp",
    description: "Compact and lightweight trimmer ideal for hair and beard grooming."
  },
  {
    id: 42,
    name: "Graphite Series  Kit",
    brand: "Remington",
    price: 11399,
    retailPrice: 11900,
    discount: "4% OFF",
    rating: 5.0,
    reviews: 1942,
    imageUrl: "https://images.priceoye.pk/remington-g4-graphite-series-multi-grooming-kit-pg4000-pakistan-priceoye-9nbmc-270x270.webp",
    description: "Premium multi-grooming kit with graphite-coated blades for superior performance."
  },

];


const products8 = [
  {
    id: 43,
    name: "Rechargeable Electric Shaver",
    brand: "Kemei",
    price: 1749,
    retailPrice: 3700,
    discount: "53% OFF",
    rating: 4.2,
    reviews: 102,
    imageUrl: "https://images.priceoye.pk/kemei-3-in-1-rechargeable-electric-shaver-trimmer-km-6332-pakistan-priceoye-l0abn-270x270.webp",
    description: "Ergonomic electric shaver with rechargeable battery for hassle-free grooming."
  },
  {
    id: 44,
    name: "USB Charging Grooming Kit",
    brand: "Kemei",
    price: 1849,
    retailPrice: 3000,
    discount: "38% OFF",
    rating: 4.5,
    reviews: 72,
    imageUrl: "https://images.priceoye.pk/dinglong-professional-beard-and-hair-trimmer-rf-609-pakistan-priceoye-gu6ki-270x270.webp",
    description: "Portable grooming kit with USB charging for convenience and easy handling."
  },
  {
    id: 45,
    name: "Professional Hair Clipper",
    brand: "Dinglong",
    price: 2259,
    retailPrice: 4500,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 88,
    imageUrl: "https://images.priceoye.pk/dinglong-professional-beard-and-hair-trimmer-rf-609-pakistan-priceoye-gu6ki-270x270.webp",
    description: "Professional-grade hair clipper with sharp blades and powerful motor."
  },
  {
    id: 46,
    name: "Multi-Purpose Grooming Kit",
    brand: "Kemei",
    price: 3559,
    retailPrice: 7000,
    discount: "49% OFF",
    rating: 4.8,
    reviews: 143,
    imageUrl: "https://images.priceoye.pk/dingling-professional-rf-608b-pakistan-priceoye-47iad-270x270.webp",
    description: "High-performance grooming kit for all-around grooming needs."
  },
  {
    id: 47,
    name: "Advanced Shaving Machine",
    brand: "Mi",
    price: 4499,
    retailPrice: 7500,
    discount: "40% OFF",
    rating: 4.9,
    reviews: 111,
    imageUrl: "https://images.priceoye.pk/mi-hair-clipper-pakistan-priceoye-nwoxh-270x270.webp",
    description: "State-of-the-art shaving machine with smooth operation and durability."
  },
  {
    id: 48,
    name: "Professional Hair Clipper 702B",
    brand: "Kemei",
    price: 3999,
    retailPrice: 8000,
    discount: "50% OFF",
    rating: 5.0,
    reviews: 142,
    imageUrl: "https://images.priceoye.pk/kemei-km-702b-hair-clipper-pakistan-priceoye-qw191-270x270.webp",
    description: "Advanced hair clipper with precision trimming and efficient performance."
  },
  ];
  
const initialProducts = [
  // Combine all products (products1 to products8)
  ...products1,
  ...products2,
  ...products3,
  ...products4,
  ...products5,
  ...products6,
  ...products7,
  ...products8,
];

const productSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    // Add reducers if needed for updating products, e.g., addProduct, removeProduct
  },
});

export default productSlice.reducer;
