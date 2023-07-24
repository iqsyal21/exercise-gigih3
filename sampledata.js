const videos = [
  {
    video_url: "https://youtu.be/ztn3DZuTwHw",
    img_url: "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
    category: "electronics",
    comment_list: [],
  },
  {
    video_url: "https://youtu.be/8DPRQdhhyzo",
    img_url: "https://i.ytimg.com/vi/4d6dyE3bE0Q/maxresdefault.jpg",
    category: "sports",
    comment_list: [],
  },
  {
    video_url: "https://youtu.be/1IL2XQGhUFA",
    img_url: "https://i.ytimg.com/vi/UmWhzWDq-pg/maxresdefault.jpg",
    category: "fashions",
    comment_list: [],
  },
  {
    video_url: "https://youtu.be/a30Hnuzgr6s",
    img_url:
      "https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg",
    category: "electronics",
    comment_list: [],
  },
  {
    video_url: "https://youtu.be/Rsi7Hk0ZsR4",
    img_url: "https://i.ytimg.com/vi/4UEZXQMThfY/hqdefault.jpg",
    category: "fashions",
    comment_list: [],
  },
];

const products = [
  {
    link: "https://tokopedia.link/QJF5g9TxFBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg",
    title: "Google TV 65 inch 4K UHD",
    category: "electronic",
    price: 6727500,
  },
  {
    link: "https://tokopedia.link/ZiHNWc6xFBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/hDjmkQ/2021/12/20/6a872390-c365-468e-8d3f-640d3a51147d.jpg",
    title: "Philips Blender 5000 Series",
    category: "electronic",
    price: 884000,
  },
  {
    link: "https://tokopedia.link/1sdvE28xFBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/product-1/2021/6/4/10869538/10869538_c459c06a-77a5-41ae-a46a-d4b21e696c32.jpg",
    title: "kipas angin COSMOS 16 inch",
    category: "electronic",
    price: 274050,
  },
  {
    link: "https://tokopedia.link/Mb7M7ndyFBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/22/af4cd1be-e27c-402a-8e24-08930373d0bd.jpg",
    title: "Cosmos Magic Com - CRJ-3232",
    category: "electronic",
    price: 265000,
  },
  {
    link: "https://tokopedia.link/e4RDatlyFBb",
    img_url:
      "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/9/4c3d2adf-e7f5-47b9-b2c4-e974a58d6699.jpg",
    title: "Nokia E3100 Plus True Wireless Earbuds",
    category: "electronic",
    price: 191000,
  },
  {
    link: "https://tokopedia.link/eBpJ5TxTGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/5/11/944a2d9c-ea8c-4d01-af3d-85d19126118f.jpg",
    title: "Tas Sepatu Olahraga Shoe Bag",
    category: "sports",
    price: 265300,
  },
  {
    link: "https://tokopedia.link/5KqCBApTGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/4/1/19930c43-777a-4746-9d1f-1b6e26449476.jpg",
    title: "Speed - Aksa Hitam Putih - Sepatu Futsal Olahraga",
    category: "sports",
    price: 209900,
  },
  {
    link: "https://tokopedia.link/1t8YshITGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/28/e56be54a-b540-4aad-aa2b-9b59e523dde5.png",
    title: "BOLA BASKET MOLTEN BG4500",
    category: "sports",
    price: 137500,
  },
  {
    link: "https://tokopedia.link/z09PUwTTGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/4/10/4afa3cb4-2625-4852-a22f-957451aee042.jpg",
    title: "Raket Bulutangkis Badminton Adidas Spieler E Stark Sky Rush",
    category: "sports",
    price: 429000,
  },
  {
    link: "https://tokopedia.link/pEcYknYTGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/2/28/ba28d743-35b2-4812-a838-97b481c8cebe.jpg",
    title: "Senar Raket Badminton / Senar Yonex BG 65",
    category: "sports",
    price: 75000,
  },
  {
    link: "https://tokopedia.link/fstAPz7TGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/19/73529a0c-6506-4a35-a85f-c9a8bb87f194.png",
    title: "kemeja tactical putih lengan pendek",
    category: "fashions",
    price: 169000,
  },
  {
    link: "https://tokopedia.link/OqkMHagUGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/7/ffdb7948-6719-417f-aaf3-edaf5f5f6f4f.jpg",
    title: "KAOS BAJU INDONESIA MERAH PUTIH",
    category: "fashions",
    price: 85000,
  },
  {
    link: "https://tokopedia.link/pxfsKblUGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/4/3/2469d335-16d7-4327-8be7-1b7a49f8ff94.jpg",
    title: "Dreeland - Celana Jeans Panjang Pria",
    category: "fashions",
    price: 172000,
  },
  {
    link: "https://tokopedia.link/R4S209qUGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/7/13/fc3e226f-4d6d-4e47-8bb5-748d7d7d5689.jpg",
    title:
      "Dear Me - Infinite Bracelet (925 Sterling Silver) Gelang Wanita Perak",
    category: "fashions",
    price: 385000,
  },
  {
    link: "https://tokopedia.link/RYmZXDAUGBb",
    img_url:
      "https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/3/2/c80e0611-27dd-4489-9890-5079dcf33692.jpg",
    title:
      "CASIO LTP-V002GL-7B3UDF Jam Tangan Wanita Analog Kulit Kuning Coklat",
    category: "fashions",
    price: 345000,
  },
];

module.exports = { videos, products };
