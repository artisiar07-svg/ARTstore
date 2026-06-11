export const categories = [
  { id: 'phones', name: 'Смартфоны', image: '/images/iphone2025.webp' },
  { id: 'tablets', name: 'Планшеты', image: 'images/pro_11_2024_space_black_01-170x170.jpg' },
  { id: 'laptops', name: 'Ноутбуки', image: '/images/air_15_2024_midnight_01-170x170.jpg' },
  { id: 'watches', name: 'Часы', image: '/images/AWU_Black_Titanium_Milanese_Loop_Black1-170x170.png' },
  { id: 'audio', name: 'Наушники', image: '/images/airpods 3-170x170.jpg' },
  { id: 'accessories', name: 'Аксессуары', image: '/images/accnew-2.png' },
];

export const products = [
  // ====== СМАРТФОНЫ (10 шт.) ======
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    category: 'phones',
    brand: 'Apple',
    description: 'Самый большой и мощный iPhone. A18 Pro, титан, 5× зум.',
    specs: { 'Дисплей': '6.9" Super Retina XDR', 'Процессор': 'A18 Pro', 'Камера': '48 Мп + 12 Мп + 12 Мп (5×)', 'Аккумулятор': 'до 33 часов видео', 'ОС': 'iOS 18' },
    variants: [
      { sku: 'ip16pm-256-nat', color: 'Натуральный титан', storage: '256 ГБ', price: 149990, image: '/images/images1/16_pro_natural_01-450x450.jpg' },
      { sku: 'ip16pm-512-nat', color: 'Натуральный титан', storage: '512 ГБ', price: 169990, image: '/images/images1/16_pro_natural_02-450x450.jpg' },
      { sku: 'ip16pm-256-blue', color: 'черный титан', storage: '256 ГБ', price: 149990, image: '/images/images1/16_pro_black_01-450x450.jpg' },
      { sku: 'ip16pm-256-blue', color: 'черный титан', storage: '512 ГБ', price: 169990, image: '/images/images1/16_pro_black_02-450x450.jpg' },
    ]
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    category: 'phones',
    brand: 'Apple',
    description: 'Профессиональная камера с 3× зумом. A18 Pro.',
    specs: { 'Дисплей': '6.3" Super Retina XDR', 'Процессор': 'A18 Pro', 'Камера': '48 Мп + 12 Мп + 12 Мп (3×)', 'Аккумулятор': 'до 27 часов видео', 'ОС': 'iOS 18' },
    variants: [
      { sku: 'ip16pm-256-nat', color: 'Натуральный титан', storage: '256 ГБ', price: 129990, image: '/images/images1/16_pro_natural_01-450x450.jpg' },
      { sku: 'ip16pm-512-nat', color: 'Натуральный титан', storage: '512 ГБ', price: 149990, image: '/images/images1/16_pro_natural_02-450x450.jpg' },
      { sku: 'ip16pm-256-blue', color: 'черный титан', storage: '256 ГБ', price: 129990, image: '/images/images1/16_pro_black_01-450x450.jpg' },
      { sku: 'ip16pm-256-blue', color: 'черный титан', storage: '512 ГБ', price: 149990, image: '/images/images1/16_pro_black_02-450x450.jpg' },
    ]
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    category: 'phones',
    brand: 'Apple',
    description: 'Яркие цвета, Dynamic Island, A18.',
    specs: { 'Дисплей': '6.1" Super Retina XDR', 'Процессор': 'A18', 'Камера': '48 Мп + 12 Мп', 'Аккумулятор': 'до 22 часов видео', 'ОС': 'iOS 18' },
    variants: [
      { sku: 'ip16-128-ultra', color: 'Ультрамарин', storage: '128 ГБ', price: 89990, image: '/images/images1/16_ultramarine_02-450x450.jpg' },
      { sku: 'ip16-256-ultra', color: 'Ультрамарин', storage: '256 ГБ', price: 104990, image: '/images/images1/16_ultramarine_03-450x450.jpg' },
      { sku: 'ip16-128-pink', color: 'Розовый', storage: '128 ГБ', price: 89990, image: '/images/images1/16_pink_02-450x450.jpg' },
      { sku: 'ip16-256-pink', color: 'Розовый', storage: '256 ГБ', price: 104990, image: '/images/images1/16_pink_03-450x450.jpg' },
    ]
  },
  {
    id: 'samsung-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra',
    category: 'phones',
    brand: 'Samsung',
    description: '200 Мп камера, S Pen, Galaxy AI+.',
    specs: { 'Дисплей': '6.9" Dynamic AMOLED 2X', 'Процессор': 'Snapdragon 8 Gen 4', 'Камера': '200 Мп + 50 Мп + 12 Мп + 10 Мп', 'Аккумулятор': '5000 мАч', 'ОС': 'Android 15' },
    variants: [
      { sku: 's26u-256-black', color: 'белый', storage: '256 ГБ', price: 119990, image: '/images/images1/white1-450x450.png' },
      { sku: 's26u-512-black', color: 'белый', storage: '512 ГБ', price: 134990, image: '/images/images1/white3-450x450.png' },
      { sku: 's26u-256-black', color: 'черный', storage: '256 ГБ', price: 119990, image: '/images/images1/black1-450x450.png' },
      { sku: 's26u-512-black', color: 'черный', storage: '512 ГБ', price: 134990, image: '/images/images1/black5-450x450.png' },
    ]
  },
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    category: 'phones',
    brand: 'Apple',
    description: 'Самый большой и мощный iPhone. A19 Pro, титан, 5× зум.',
    specs: { 'Дисплей': '6.9" Super Retina XDR', 'Процессор': 'A19 Pro', 'Камера': '48 Мп + 12 Мп + 12 Мп (5×)', 'Аккумулятор': 'до 35 часов видео', 'ОС': 'iOS 19' },
    variants: [
      { sku: 'ip17pm-256-nat', color: 'оранжевый ', storage: '256 ГБ', price: 159990, image: '/images/images1/17_pro_cosmic_orange_01-450x450.png' },
      { sku: 'ip17pm-512-nat', color: 'оранжевый ', storage: '512 ГБ', price: 179990, image: '/images/images1/17_pro_cosmic_orange_01-450x450.png'},
      { sku: 'ip17pm-256-nat', color: 'синий ', storage: '256 ГБ', price: 159990, image: '/images/images1/17_pro_deep_blue_01-450x450.png' },
      { sku: 'ip17pm-512-nat', color: 'синий ', storage: '512 ГБ', price: 179990, image: '/images/images1/17_pro_deep_blue_01-450x450.png'},
      { sku: 'ip17pm-256-black', color: 'серебристый', storage: '256 ГБ', price: 159990, image: '/images/images1/17_pro_silver_01-450x450.png'},
      { sku: 'ip17pm-256-white', color: 'серебристый', storage: '512 ГБ', price: 179990, image: '/images/images1/17_pro_silver_01-450x450.png' },
    ]
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    category: 'phones',
    brand: 'Apple',
    description: 'Профессиональная камера с 3× зумом. A19 Pro.',
    specs: { 'Дисплей': '6.3" Super Retina XDR', 'Процессор': 'A19 Pro', 'Камера': '48 Мп + 12 Мп + 12 Мп (3×)', 'Аккумулятор': 'до 29 часов видео', 'ОС': 'iOS 19' },
    variants: [
      { sku: 'ip17p-256-nat', color: 'оранжевый ', storage: '256 ГБ', price: 139990, image: '/images/images1/17_pro_cosmic_orange_01-450x450.png' },
      { sku: 'ip17p-512-nat', color: 'оранжевый ', storage: '512 ГБ', price: 159990, image: '/images/images1/17_pro_cosmic_orange_01-450x450.png' },
      { sku: 'ip17p-256-nat', color: 'синий ', storage: '256 ГБ', price: 139990, image: '/images/images1/17_pro_deep_blue_01-450x450.png' },
      { sku: 'ip17p-512-nat', color: 'синий ', storage: '512 ГБ', price: 159990, image: '/images/images1/17_pro_deep_blue_01-450x450.png' },
      { sku: 'ip17p-256-black', color: 'серебристый', storage: '256 ГБ', price: 139990, image: '/images/images1/17_pro_silver_01-450x450.png' },
      { sku: 'ip17p-256-black', color: 'серебристый', storage: '512 ГБ', price: 159990, image: '/images/images1/17_pro_silver_01-450x450.png' },

    ]
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    category: 'phones',
    brand: 'Apple',
    description: 'Яркие цвета, Dynamic Island, A19.',
    specs: { 'Дисплей': '6.1" Super Retina XDR', 'Процессор': 'A19', 'Камера': '48 Мп + 12 Мп', 'Аккумулятор': 'до 24 часов видео', 'ОС': 'iOS 19' },
    variants: [
      { sku: 'ip17-128-ultra', color: 'чёрный', storage: '128 ГБ', price: 94990, image: '/images/images1/17_black_01-450x450.png' },
      { sku: 'ip17-256-ultra', color: 'чёрный', storage: '256 ГБ', price: 109990, image: '/images/images1/17_black_01-450x450.png' },
      { sku: 'ip17-128-ultra', color: 'зелёный', storage: '128 ГБ', price: 94990, image: '/images/images1/17_sage_01-450x450.jpg' },
      { sku: 'ip17-256-ultra', color: 'зелёный', storage: '256 ГБ', price: 109990, image: '/images/images1/17_sage_01-450x450.jpg' },
      { sku: 'ip17-128-ultra', color: 'голубой', storage: '128 ГБ', price: 94990, image: '/images/images1/17_mist_blue_01-450x450.jpg' },
      { sku: 'ip17-256-ultra', color: 'голубой', storage: '256 ГБ', price: 109990, image: '/images/images1/17_mist_blue_01-450x450.jpg' },
    ]
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    category: 'phones',
    brand: 'Apple',
    description: 'Dynamic Island, A16 Bionic, USB-C.',
    specs: { 'Дисплей': '6.1" Super Retina XDR', 'Процессор': 'A16 Bionic', 'Камера': '48 Мп + 12 Мп', 'Аккумулятор': 'до 20 часов видео', 'ОС': 'iOS 19' },
    variants: [
      { sku: 'ip15-128-black', color: 'Чёрный', storage: '128 ГБ', price: 79990, image: '/images/images1/bb772a7351a411eeb2ca3cecef20832b_45564def578011eeb2ca3cecef20832b-thumbnail-440x440.png' },
      { sku: 'ip15-256-black', color: 'Чёрный', storage: '256 ГБ', price: 94990, image: '/images/images1/bb772a7351a411eeb2ca3cecef20832b_45564dee578011eeb2ca3cecef20832b-thumbnail-440x440.png' },
    ]
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    category: 'phones',
    brand: 'Apple',
    description: 'A15 Bionic, двойная камера, надёжный выбор.',
    specs: { 'Дисплей': '6.1" Super Retina XDR', 'Процессор': 'A15 Bionic', 'Камера': '12 Мп + 12 Мп', 'Аккумулятор': 'до 20 часов видео', 'ОС': 'iOS 19' },
    variants: [
      { sku: 'ip14-128-blue', color: 'Синий', storage: '128 ГБ', price: 69990, image: '/images/images1/14_blue_01-450x450.jpeg' },
      { sku: 'ip14-256-blue', color: 'Синий', storage: '256 ГБ', price: 84990, image: '/images/images1/14_blue_02-450x450.jpeg' },
      { sku: 'ip14-256-purple', color: 'Фиолетовый', storage: '128 ГБ', price: 69990, image: '/images/images1/14_purple_01-450x450.jpeg' },
      { sku: 'ip14-256-purple', color: 'Фиолетовый', storage: '256 ГБ', price: 84990, image: '/images/images1/14_purple_02-450x450.jpeg' },
    ]
  },
  {
    id: 'iphone-13-',
    name: 'iPhone 13 ',
    category: 'phones',
    brand: 'Apple',
    description: 'Компактный и мощный. A15 Bionic.',
    specs: { 'Дисплей': '5.4" Super Retina XDR', 'Процессор': 'A15 Bionic', 'Камера': '12 Мп + 12 Мп', 'Аккумулятор': 'до 17 часов видео', 'ОС': 'iOS 19' },
    variants: [
      { sku: 'ip13m-128-green', color: 'Зелёный', storage: '128 ГБ', price: 59990, image: '/images/images1/13_green_01-450x450.jpg' },
      { sku: 'ip13m-128-green', color: 'Зелёный', storage: '256 ГБ', price: 74990, image: '/images/images1/13_green_01-450x450.jpg' },
      { sku: 'ip13m-256-pink', color: 'Розовый', storage: '128 ГБ', price: 59990, image: '/images/images1/13_pink_01-450x450.jpg' },
      { sku: 'ip13m-256-pink', color: 'Розовый', storage: '256 ГБ', price: 74990, image: '/images/images1/13_pink_01-450x450.jpg' },
    ]
  },

  // ====== ПЛАНШЕТЫ () ======
  {
    id: 'ipad-pro-m4-13',
    name: 'iPad Pro 13" (M4)',
    category: 'tablets',
    brand: 'Apple',
    description: 'Самый тонкий и мощный iPad. M4, Ultra Retina XDR.',
    specs: { 'Дисплей': '13" Ultra Retina XDR', 'Процессор': 'Apple M4', 'Память': '256 ГБ / 512 ГБ / 1 ТБ / 2 ТБ' },
    variants: [
       { sku: 'ippro13-512-space', color: 'Чёрный', storage: '512 ГБ', price: 154990, image: '/images/images2/pro_13_2024_space_black_01-450x450.jpg' },
      { sku: 'ippro13-1-space', color: 'Чёрный', storage: '1 ТБ', price: 189990, image: '/images/images2/pro_13_2024_space_black_04-450x450.jpg' },
    ]
  },
  {
    id: 'ipad-air-m2-13',
    name: 'iPad Air 13" (M2)',
    category: 'tablets',
    brand: 'Apple',
    description: 'Большой Air с чипом M2. Liquid Retina.',
    specs: { 'Дисплей': '13" Liquid Retina', 'Процессор': 'Apple M2', 'Память': '128 ГБ / 256 ГБ / 512 ГБ' },
    variants: [
      { sku: 'ipair13-256-space', color: 'Серый космос', storage: '256 ГБ', price: 99990, image: '/images/images2/air_13_2024_space_gray_01-450x450.jpg'},
      { sku: 'ipair13-256-space', color: 'Серый космос', storage: '512 ГБ', price: 119990, image: '/images/images2/air_13_2024_space_gray_03-450x450.jpg'},
      { sku: 'ipair13-512-blue', color: 'Голубой', storage: '256 ГБ', price: 99990, image: '/images/images2/air_13_2024_blue_01-450x450.jpg' },
      { sku: 'ipair13-512-blue', color: 'Голубой', storage: '512 ГБ', price: 119990, image: '/images/images2/air_13_2024_blue_03-450x450.jpg' },

    ]
  },
  {
    id: 'ipad-air-m2-11',
    name: 'iPad Air 11" (M2)',
    category: 'tablets',
    brand: 'Apple',
    description: 'Производительность M2 в тонком корпусе.',
    specs: { 'Дисплей': '11" Liquid Retina', 'Процессор': 'Apple M2', 'Память': '128 ГБ / 256 ГБ / 512 ГБ' },
    variants: [
      { sku: 'ipair11-256-blue', color: 'Голубой', storage: '256 ГБ', price: 84990, image: '/images/images2/air_11_2024_blue_01-450x450.jpg' },
      { sku: 'ipair11-512-blue', color: 'Голубой', storage: '512 ГБ', price: 104990, image: '/images/images2/air_11_2024_blue_03-450x450.jpg' },
      { sku: 'ipair11-256-purple', color: 'Фиолетовый', storage: '256 ГБ', price: 84990, image: '/images/images2/air_11_2024_purple_cellular_01-450x450.png' },
      { sku: 'ipair11-512-purple', color: 'Фиолетовый', storage: '512 ГБ', price: 104990, image: '/images/images2/air_11_2024_purple_cellular_03-450x450.jpg' },

    ]
  },
  {
    id: 'ipad-mini-7',
    name: 'iPad mini (7-го поколения)',
    category: 'tablets',
    brand: 'Apple',
    description: 'Компактный и мощный. A17 Pro, Apple Intelligence.',
    specs: { 'Дисплей': '8.3" Liquid Retina', 'Процессор': 'A17 Pro', 'Память': '128 ГБ / 256 ГБ' },
    variants: [
      { sku: 'ipadmini7-128-space', color: 'Серый ', storage: '128 ГБ', price: 59990, image: '/images/images2/4d53e48ba90232bedc04a5b87e9a5bff0def5f54b594ac1982927e12b45495a7.jpg.webp' },
      { sku: 'ipadmini7-256-space', color: 'Серый ', storage: '256 ГБ', price: 79990, image: '/images/images2/1c62ca6ba206212d46330d3d1063bb24b87725cde1d3a5560e09e17013b60c70.jpg.webp' },
      { sku: 'ipadmini7-128-starlight', color: 'Голубой', storage: '128 ГБ', price: 59990, image: '/images/images2/ad09b59b78eb0ee0b561bf62ea749d068b14be87e7d79579d375d9e97b2b9e27.jpg.webp' },
      { sku: 'ipadmini7-256-starlight', color: 'Голубой', storage: '256 ГБ', price: 79990, image: '/images/images2/0eed88591060aca76e073a3b279f3eaa511f5a7b6ce0f824229013a91e5b3e6b.jpg.webp' },
    ]
  },
  {
    id: 'ipad-air-m1-10-9',
    name: 'iPad Air 10.9" (M1)',
    category: 'tablets',
    brand: 'Apple',
    description: 'Предыдущее поколение. M1, отличная цена.',
    specs: { 'Дисплей': '10.9" Liquid Retina', 'Процессор': 'Apple M1', 'Память': '64 ГБ / 256 ГБ' },
    variants: [
      { sku: 'ipair5-64-space', color: 'синий', storage: '64 ГБ', price: 64990, image: '/images/images2/d0fbb39fc4011c0f72141f1b02d28e678ab7b77aea1f3d6d1270e4618dd67569.jpg.webp' },
      { sku: 'ipair5-64-space', color: 'синий', storage: '256 ГБ', price: 84990, image: '/images/images2/b6f138914f19de9a4698585b414e36c8ffa7cea7a513920428a427b1a1d78faa.jpg.webp' },
      { sku: 'ipair5-256-pink', color: 'фиолетовый', storage: '64 ГБ', price: 69990, image: '/images/images2/b3cf6d1cbfe649b8d3ef3cf8ce9423335363d6460f44b0ca6127b53fd49cf422.jpg.webp' },
      { sku: 'ipair5-256-pink', color: 'фиолетовый', storage: '256 ГБ', price: 89990, image: '/images/images2/5bb90537c18468a8851225e9caf210cbd309868286e6e93a3a230ac86869f6e5.jpg.webp' },

    ]
  },
  {
    id: 'ipad-10',
    name: 'iPad (10-го поколения)',
    category: 'tablets',
    brand: 'Apple',
    description: 'Доступный iPad. A14 Bionic, USB-C.',
    specs: { 'Дисплей': '10.9" Liquid Retina', 'Процессор': 'A14 Bionic', 'Память': '64 ГБ / 256 ГБ' },
    variants: [
      { sku: 'ipad10-64-yellow', color: 'Жёлтый', storage: '64 ГБ', price: 37990, image: '/images/images2/c8de1288c6f17c846082cd9ef333dd564dfa1ab48bbc86b4facc3b976e43f676.jpg.webp' },
      { sku: 'ipad10-256-yellow', color: 'Жёлтый', storage: '256 ГБ', price: 57990, image: '/images/images2/6395e315f6119e83b01537bd281680df8c03027d52441188472e79dfed759f35.jpg.webp' },
      { sku: 'ipad10-64-silver', color: 'Серебристый', storage: '64 ГБ', price: 37990, image: '/images/images2/7d0b6c1deca9cfd4d43fd5055d0a05e2496a5fa91e9e9de90d05aa9bcd506176.jpg.webp' },
      { sku: 'ipad10-256-silver', color: 'Серебристый', storage: '256 ГБ', price: 57990, image: '/images/images2/9ad4472c1a9bc5514c8aed684862ebdeaa1ab6f234f3bc56298fa86e112b2b66.jpg.webp' },

    ]
  },
  // ====== НАУШНИКИ ======
 {
    id: 'airpods-pro-3',
    name: 'AirPods Pro 3',
    category: 'audio',
    brand: 'Apple',
    description: 'Адаптивное шумоподавление, чип H3, персонализированное аудио.',
    specs: { 'Чип': 'Apple H3', 'Шумоподавление': 'Активное', 'Время работы': 'до 7 часов', 'Защита': 'IP54' },
    variants: [
      { sku: 'app3-white', color: 'Белый', storage: '', price: 29990, image: '/images/images4/airpods 3-450x450.jpg' },
      { sku: 'app3-white', color: 'Белый', storage: '', price: 29990, image: '/images/images4/nno2mj487uujkw50amim2vockrun5gdc-450x450.jpg' },

    ]
  },
  {
    id: 'airpods-max-usbc',
    name: 'AirPods Max (USB-C)',
    category: 'audio',
    brand: 'Apple',
    description: 'Премиум звук, пространственное аудио, USB-C.',
    specs: { 'Чип': 'Apple H2', 'Время работы': 'до 20 часов', 'Разъём': 'USB-C', 'Вес': '385 г' },
    variants: [
      { sku: 'apmax-midnight', color: 'Черный', storage: '', price: 64990, image: '/images/images4/airpods_max_usb_c_midnight_02-450x450.jpg' },
      { sku: 'apmax-starlight', color: 'Белые', storage: '', price: 64990, image: '/images/images4/airpods_max_usb_c_starlight_02-450x450.jpg' },
      { sku: 'apmax-Purple', color: ' Фиолетовый', storage: '', price: 64990, image: '/images/images4/airpods_max_usb_c_purple_02-450x450.jpg' },

    ]
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    category: 'audio',
    brand: 'Apple',
    description: 'Предыдущее поколение. Чип H2, активное шумоподавление.',
    specs: { 'Чип': 'Apple H2', 'Шумоподавление': 'Активное', 'Время работы': 'до 6 часов', 'Защита': 'IP54' },
    variants: [
      { sku: 'app2-white', color: 'Белый', storage: '', price: 23990, image: '/images/images4/airpods_pro_2023_01-450x450.jpg' },
      { sku: 'app2-white', color: 'Белый', storage: '', price: 23990, image: '/images/images4/airpods_pro_2023_02-450x450.jpg' },

    ]
  },
  {
    id: 'airpods-4',
    name: 'AirPods 4',
    category: 'audio',
    brand: 'Apple',
    description: 'Новое поколение. Чип H2, пространственное аудио.',
    specs: { 'Чип': 'Apple H2', 'Время работы': 'до 5 часов', 'Защита': 'IPX4', 'Зарядка': 'USB-C' },
    variants: [
   { sku: 'ap4anc-white', color: 'Белый', storage: '', price: 17990, image: '/images/images4/airpods_4_2024_01-450x450.jpg' },
      { sku: 'ap4anc-white', color: 'Белый', storage: '', price: 17990, image: '/images/images4/airpods_4_ANC_2024_02-450x450.jpg' },
    ]
  },
  {
    id: 'airpods-4-anc',
    name: 'AirPods 4 с шумоподавлением',
    category: 'audio',
    brand: 'Apple',
    description: 'AirPods 4 с активным шумоподавлением. Чип H2.',
    specs: { 'Чип': 'Apple H2', 'Шумоподавление': 'Активное', 'Время работы': 'до 5 часов', 'Защита': 'IPX4' },
    variants: [
      { sku: 'ap4anc-white', color: 'Белый', storage: '', price: 22990, image: '/images/images4/airpods_4_ANC_2024_01-450x450.jpg' },
      { sku: 'ap4anc-white', color: 'Белый', storage: '', price: 22990, image: '/images/images4/airpods_4_ANC_2024_02-450x450.jpg' },

    ]
  },
  {
    id: 'airpods-3',
    name: 'AirPods 3',
    category: 'audio',
    brand: 'Apple',
    description: 'Пространственное аудио, адаптивный эквалайзер.',
    specs: { 'Чип': 'Apple H1', 'Время работы': 'до 6 часов', 'Защита': 'IPX4', 'Зарядка': 'MagSafe' },
    variants: [
      { sku: 'ap3-white', color: 'Белый', storage: '', price: 14990, image: '/images/images4/airpods_2021_01-450x450.jpg' },
      { sku: 'ap3-white', color: 'Белый', storage: '', price: 14990, image: '/images/images4/airpods_2021_02-450x450.jpg' },

    ]
  },
  // ====== НОУТБУКИ () ======
  {
    id: 'macbook-pro-16-m4-max',
    name: 'MacBook Pro 16" (M4 Max)',
    category: 'laptops',
    brand: 'Apple',
    description: 'Максимальная мощность. M4 Max, 36 ГБ, 1 ТБ.',
    specs: { 'Дисплей': '16.2" Liquid Retina XDR', 'Процессор': 'Apple M4 Max', 'Память': '36 ГБ', 'SSD': '1 ТБ' },
    variants: [
      { sku: 'mbp16-1tb-blac', storage: '1 ТБ', price: 389990, image: '/images/images3/7992bc4e860221d8dac4c7b485189aa3df5fc7eb381aa53ada4135f000dfb68d.png.webp' },
      { sku: 'mbp16-1tb-blac', storage: '2 ТБ', price: 489990, image: '/images/images3/47be64a3e3dd0de92bfe8b8511fb48c6e935814c10ab754bf67230db0f6f74bd.png.webp' },

    ]
  },
  {
    id: 'macbook-pro-14-m4-pro',
    name: 'MacBook Pro 14" (M4 Pro)',
    category: 'laptops',
    brand: 'Apple',
    description: 'Для профессионалов. M4 Pro, 24 ГБ.',
    specs: { 'Дисплей': '14.2" Liquid Retina XDR', 'Процессор': 'Apple M4 Pro', 'Память': '24 ГБ', 'SSD': '512 ГБ' },
    variants: [
      { sku: 'mbp16-1tb-blac', storage: '1 ТБ', price: 279990, image: '/images/images3/7992bc4e860221d8dac4c7b485189aa3df5fc7eb381aa53ada4135f000dfb68d.png.webp' },
      { sku: 'mbp16-1tb-blac', storage: '2 ТБ', price: 379990, image: '/images/images3/47be64a3e3dd0de92bfe8b8511fb48c6e935814c10ab754bf67230db0f6f74bd.png.webp' },
    ]
  },
  {
    id: 'macbook-air-15-m4',
    name: 'MacBook Air 15" (M4)',
    category: 'laptops',
    brand: 'Apple',
    description: 'Большой экран, до 18 часов. M4.',
    specs: { 'Дисплей': '15.3" Liquid Retina', 'Процессор': 'Apple M4', 'Память': '16 ГБ', 'SSD': '512 ГБ' },
    variants: [
      { sku: 'mba15-512-blac', color: 'Чёрный', storage: '512 ГБ', price: 154990, image: '/images/images3/a6ab4de0047d7c249365c959c72cea7710f2fc55127056d9ae2a6e4eee11d64f.png.webp' },
      { sku: 'mba15-512-blac', color: 'Чёрный', storage: '1 ТБ', price: 184990, image: '/images/images3/29abeb179c83ac6427846db630bbf4df811365779dffd7ece7836da83ba96dfc.png.webp' },
  ]
  },
  {
    id: 'macbook-air-13-m4',
    name: 'MacBook Air 13" (M4)',
    category: 'laptops',
    brand: 'Apple',
    description: 'Тонкий и лёгкий. M4, до 18 часов.',
    specs: { 'Дисплей': '13.6" Liquid Retina', 'Процессор': 'Apple M4', 'Память': '16 ГБ', 'SSD': '256 ГБ' },
    variants: [
      { sku: 'mba13-256-silver', color: 'Серебристый', storage: '256 ГБ', price: 124990, image: '/images/images3/f8d81ff00308e25d9cbc7f18073339860d09c7639e632500d09d89e12c4bd787.png.webp' },
      { sku: 'mba13-256-silver', color: 'Серебристый', storage: '512 ГБ', price: 164990, image: '/images/images3/9aa1a54d2c176c3cbbfaafa971dd0610714bfd6ed23c6e4d3cebec6d437340de.png.webp' },
    ]
  },
  {
    id: 'macbook-air-13-m3',
    name: 'MacBook Air 13" (M3)',
    category: 'laptops',
    brand: 'Apple',
    description: 'Предыдущее поколение. M3, отличная цена.',
    specs: { 'Дисплей': '13.6" Liquid Retina', 'Процессор': 'Apple M3', 'Память': '8 ГБ', 'SSD': '256 ГБ' },
    variants: [
      { sku: 'mba13m3-256-space', color: 'черный', storage: '256 ГБ', price: 84990, image: '/images/images3/5c4432770dcfcfd5fc2f02efa898048e1b2a4a8ee0fbee4fbe99e83b8d83c8f1.jpg.webp' },
      { sku: 'mba13m3-256-space', color: 'черный', storage: '512 ГБ', price: 104990, image: '/images/images3/80e0915ac73deb52e25c3f5e80aa84be22c69e6faed979ae4480d33cb18e3ce0.jpg.webp' },
      { sku: 'mba13m3-512-midnight', color: 'голубой', storage: '256 ГБ', price: 849990, image: '/images/images3/1a28b0814109c45cd60b9336530ae39b1c62058cc343a331ac4e0f91edbbd9af.png.webp' },
      { sku: 'mba13m3-256-space', color: 'голубой', storage: '512 ГБ', price: 104990, image: '/images/images3/b745e6eee426718c538acd5cfb7559c038c91c9259715c54eacacd9c3399eb73.png.webp' },
    ]
  },
  {
    id: 'macbook-air-15-m3',
    name: 'MacBook Air 15" (M3)',
    category: 'laptops',
    brand: 'Apple',
    description: 'Большой экран, M3, до 18 часов.',
    specs: { 'Дисплей': '15.3" Liquid Retina', 'Процессор': 'Apple M3', 'Память': '8 ГБ', 'SSD': '256 ГБ' },
    variants: [
      { sku: 'mba15m3-256-starlight', color: 'золотой', storage: '256 ГБ', price: 124990, image: '/images/images3/9ae422136b9ece9a7ede95269282f60e59a0be515225d0d64e164130b09db14d.jpg.webp' },
      { sku: 'mba15m3-512-starlight', color: 'золотой', storage: '512 ГБ', price: 144990, image: '/images/images3/78a3cb9da6d320dd50efe50bd4a920c2ec0ed27b4e72ab9666ce50d7969b6ec2.jpg.webp' },
      { sku: 'mba15m3-256-space', color: 'серебристый', storage: '256 ГБ', price: 129990, image: '/images/images3/f8d81ff00308e25d9cbc7f18073339860d09c7639e632500d09d89e12c4bd787.png.webp' },
      { sku: 'mba15m3-512-starlight', color: 'серебристый', storage: '512 ГБ', price: 144990, image: '/images/images3/67759590e0c63a9aedda5ae6a4810b9907e2ab1df6576086bf683dd9a4cccc66.jpg.webp' },

    ]
  },
  {
    id: 'macbook-pro-13-m2',
    name: 'MacBook Pro 13" (M2)',
    category: 'laptops',
    brand: 'Apple',
    description: 'Компактный Pro с Touch Bar. M2.',
    specs: { 'Дисплей': '13.3" Retina', 'Процессор': 'Apple M2', 'Память': '8 ГБ', 'SSD': '256 ГБ' },
    variants: [
      { sku: 'mbp13m2-256-space', color: 'Серый ', storage: '256 ГБ', price: 119990, image: '/images/images3/a6b2ef3cca147194dea71a78cb070d5423d891d03da88ed557a6c0bad47c8a1a.jpg.webp' },
      { sku: 'mbp13m2-512-space', color: 'Серый ', storage: '512 ГБ', price: 139990, image: '/images/images3/fa08c8d5b88a834d837defd2f2dab745bb9812beee80ddb4b88aeae2ea696930.jpg.webp' },
      { sku: 'mbp13m2-256-silver', color: 'Серебристый', storage: '256 ГБ', price: 119990, image: '/images/images3/1b9955bfbb176bfde7bd6f1232eed254e0d3f1c0c5649e960f1ab14510c72581.jpg.webp' },
      { sku: 'mbp13m2-512-silver', color: 'Серебристый', storage: '512 ГБ', price: 139990, image: '/images/images3/9f4d06be9865579382e48da0e2416ccc1412f235fedd76285e3a09fbb66a6584.jpg.webp' },
    ]
  },
  // ====== ЧАСЫ (10 шт.) ======
  {
    id: 'apple-watch-ultra-3',
    name: 'Apple Watch Ultra 3',
    category: 'watches',
    brand: 'Apple',
    description: 'Для экстремального спорта. Титановый корпус, WR100.',
    specs: { 'Дисплей': '49 мм', 'Процессор': 'S10 SiP', 'Защита': 'WR100', 'Батарея': 'до 72 часов' },
    variants: [
      { sku: 'awu3-black', color: 'Чёрный титан', storage: '64 ГБ', price: 89990, image: '/images/images5/awu_Black_Titanium_Black_Ocean_Band1-450x450 copy.png' },
      { sku: 'awu3-black', color: 'Чёрный титан', storage: '64 ГБ', price: 89990, image: '/images/images5/awu_Black_Titanium_Black_Ocean_Band2-450x450.png' },
      { sku: 'awu3-natural', color: 'Натуральный титан', storage: '64 ГБ', price: 89990, image: '/images/images5/awu_Natural_Titanium_Bright_Blue_Trail_Loop1-450x450.png' },
      { sku: 'awu3-natural', color: 'Натуральный титан', storage: '64 ГБ', price: 89990, image: '/images/images5/awu_Natural_Titanium_Bright_Blue_Trail_Loop2-450x450.png' },

    ]
  },
  {
    id: 'apple-watch-series-10-46',
    name: 'Apple Watch Series 10 (46 мм)',
    category: 'watches',
    brand: 'Apple',
    description: 'Самый большой дисплей. S10 SiP, WR50.',
    specs: { 'Дисплей': '46 мм', 'Процессор': 'S10 SiP', 'Защита': 'WR50', 'Батарея': 'до 36 часов' },
    variants: [
      { sku: 'aw10-46-alum-silver', color: 'Серебристый', storage: '64 ГБ', price: 49990, image: '/images/images5/e77a79bae775273a3f17d1194fe3d24a46301c6505743e46848c10f7895a1d08.jpg.webp' },
      { sku: 'aw10-46-alum-silver', color: 'Серебристый', storage: '64 ГБ', price: 49990, image: '/images/images5/2d39b5aa193abe8e6008492c62abf60302ec4735a5d0c52f3bd157dfba85c06c.jpg.webp' },
      { sku: 'aw10-46-alum-black', color: 'Чёрный', storage: '64 ГБ', price: 49990, image: '/images/images5/e86f7b605064bf8aa555f8230058c76d97558f896c2366bff5c71ce7d41fe7c9.jpg.webp' },
      { sku: 'aw10-46-alum-black', color: 'Чёрный', storage: '64 ГБ', price: 49990, image: '/images/images5/e71ff9b1d285fee448e08c2cc400dd5570d528ab0800ae5f26918ceb889b9859.jpg.webp' },

    ]
  },
  {
    id: 'apple-watch-series-10-42',
    name: 'Apple Watch Series 10 (42 мм)',
    category: 'watches',
    brand: 'Apple',
    description: 'Компактная версия. S10 SiP, WR50.',
    specs: { 'Дисплей': '42 мм', 'Процессор': 'S10 SiP', 'Защита': 'WR50', 'Батарея': 'до 30 часов' },
    variants: [
      { sku: 'aw10-46-alum-silver', color: 'Серебристый', storage: '64 ГБ', price: 49990, image: '/images/images5/e77a79bae775273a3f17d1194fe3d24a46301c6505743e46848c10f7895a1d08.jpg.webp' },
      { sku: 'aw10-46-alum-silver', color: 'Серебристый', storage: '64 ГБ', price: 49990, image: '/images/images5/2d39b5aa193abe8e6008492c62abf60302ec4735a5d0c52f3bd157dfba85c06c.jpg.webp' },
      { sku: 'aw10-46-alum-black', color: 'Чёрный', storage: '64 ГБ', price: 49990, image: '/images/images5/e86f7b605064bf8aa555f8230058c76d97558f896c2366bff5c71ce7d41fe7c9.jpg.webp' },
      { sku: 'aw10-46-alum-black', color: 'Чёрный', storage: '64 ГБ', price: 49990, image: '/images/images5/e71ff9b1d285fee448e08c2cc400dd5570d528ab0800ae5f26918ceb889b9859.jpg.webp' },
    ]
  },
  {
    id: 'apple-watch-se-3-44',
    name: 'Apple Watch SE 3 (44 мм)',
    category: 'watches',
    brand: 'Apple',
    description: 'Доступные часы с новыми функциями. S9 SiP.',
    specs: { 'Дисплей': '44 мм', 'Процессор': 'S9 SiP', 'Защита': 'WR50', 'Батарея': 'до 24 часов' },
    variants: [
      { sku: 'awse3-44-midnight', color: 'Чёрный', storage: '32 ГБ', price: 29990, image: '/images/images5/a74348748649159137442a2ebfcad31f4e620ee4626e310fd30f0514342da8a9.jpg.webp' },
      { sku: 'awse3-44-midnight', color: 'Чёрный', storage: '32 ГБ', price: 29990, image: '/images/images5/97db95ad7c870bd9243d49f6950dc12d86fc6d31e5cf28d75ac12328250b0ca0.jpg.webp' },
      { sku: 'awse3-44-starlight', color: 'бежевый', storage: '32 ГБ', price: 29990, image: '/images/images5/47c8807a3ce4320ccffaeb9cfcafd2cb5f7b41c265366726cc3caab493b28bb7.jpg.webp' },
      { sku: 'awse3-44-starlight', color: 'бежевый', storage: '32 ГБ', price: 29990, image: '/images/images5/adb1f7f0ebb72c87961e8b9b54992e31ee9ed841571e214a8f5e13353ef4acdd.jpg.webp' },
    ]
  },
  {
    id: 'apple-watch-series-9-45',
    name: 'Apple Watch Series 9 (45 мм)',
    category: 'watches',
    brand: 'Apple',
    description: 'Предыдущее поколение. S9 SiP, отличная цена.',
    specs: { 'Дисплей': '45 мм', 'Процессор': 'S9 SiP', 'Защита': 'WR50', 'Батарея': 'до 36 часов' },
    variants: [
      { sku: 'aw9-45-alum-black', color: 'Чёрный', storage: '64 ГБ', price: 39990, image: '/images/images5/d2e0a66b3fd2f505fa9a08426a170f381706d1046622d3deea4023da1f62a9df.jpg.webp' },
      { sku: 'aw9-45-alum-black', color: 'Чёрный', storage: '64 ГБ', price: 39990, image: '/images/images5/9cc3623da82fdcf44824d6ca19885c71349a4f1e55bf9eb72ea343a05e103d8d.jpg.webp' },
      { sku: 'aw9-45-alum-red', color: 'Красный', storage: '64 ГБ', price: 39990, image: '/images/images5/9ca1270d02e4609264101ce09af4fc02c8c32d29af109ab6f9c0b2c9a51c276f.jpg.webp' },
      { sku: 'aw9-45-alum-red', color: 'Красный', storage: '64 ГБ', price: 39990, image: '/images/images5/1ef47f66bb24c64708fa29b6b959f20bcfb7b690aa6bf3060c5e3b043655bef3.jpg.webp' },

    ]
  },
 
{
    id: 'magic-keyboard-ipad-pro-13',
    name: 'Magic Keyboard для iPad Pro 13"',
    category: 'accessories',
    brand: 'Apple',
    description: 'Полноценная клавиатура с трекпадом и подсветкой.',
    specs: { 'Совместимость': 'iPad Pro 13" (M4)', 'Раскладка': 'Русская', 'Подсветка': 'Да' },
    variants: [
      { sku: 'mk-ip13-black', color: 'Чёрный', storage: '', price: 44990, image: '/images/images6/047d8f68871d25a0c5cc8b93a746c3c66985dcd70a265a1d238099f18974cdb9.jpg.webp' },
    ]
  },
  {
    id: 'magic-keyboard-ipad-pro-11',
    name: 'Magic Keyboard для iPad Pro 11"',
    category: 'accessories',
    brand: 'Apple',
    description: 'Клавиатура с трекпадом для iPad Pro 11".',
    specs: { 'Совместимость': 'iPad Pro 11" (M4)', 'Раскладка': 'Русская', 'Подсветка': 'Да' },
    variants: [
      { sku: 'mk-ip11-black', color: 'Чёрный', storage: '', price: 38990, image: '/images/images6/e3a17998b4225b028cf9818f565a0848aceb721c26d36b34bf6765290ea737c5.jpg.webp' },
    ]
  },
  {
    id: 'apple-pencil-pro',
    name: 'Apple Pencil Pro',
    category: 'accessories',
    brand: 'Apple',
    description: 'Тактильный отклик, сжатие, двойное касание.',
    specs: { 'Совместимость': 'iPad Pro M4, iPad Air M2', 'Зарядка': 'Магнитная', 'Чувствительность': '4096 уровней' },
    variants: [
      { sku: 'pencilpro-white', color: 'Белый', storage: '', price: 17990, image: '/images/images6/48e6d29fb44a2cb247964b0f24771b9206d0256d68b2a102e71d87e08b68299a.jpg.webp' },
    ]
  },
  {
    id: 'apple-pencil-usbc',
    name: 'Apple Pencil (USB-C)',
    category: 'accessories',
    brand: 'Apple',
    description: 'Доступный стилус с USB-C.',
    specs: { 'Совместимость': 'iPad (10-го поколения и новее)', 'Разъём': 'USB-C', 'Наклон': 'Да' },
    variants: [
      { sku: 'pencil-usbc-white', color: 'Белый', storage: '', price: 9990, image: '/images/images6/c57f73b6a3d2e998419c3493222301cd8c5728ff04d0c0a9958f4e36be8f997a.jpg' },
    ]
  },
  {
    id: 'magsafe-charger-25w',
    name: 'MagSafe Charger 25W',
    category: 'accessories',
    brand: 'Apple',
    description: 'Быстрая беспроводная зарядка 25 Вт.',
    specs: { 'Мощность': '25 Вт', 'Совместимость': 'iPhone 12+', 'Кабель': '1 м USB-C' },
    variants: [
      { sku: 'magsafe25-white', color: 'Белый', storage: '', price: 4990, image: '/images/images6/3f1b229920a54c85026a8a762c3feed25d20012b080759eb9c172ce24bb7b01f.jpg.webp' },
    ]
  },
  {
    id: 'apple-airtag-4pack',
    name: 'Apple AirTag (4 шт.)',
    category: 'accessories',
    brand: 'Apple',
    description: 'Трекеры для поиска вещей. UWB-чип.',
    specs: { 'Батарея': 'CR2032 (1 год)', 'Связь': 'Bluetooth + UWB', 'Защита': 'IP67' },
    variants: [
      { sku: 'airtag4-white', color: 'Белый', storage: '', price: 8990, image: '/images/images6/df2ed3b2da74d1e441ffc25b47541d07b8f4e5c30639f89f49e980e569b66fad.jpg' },
    ]
  },
  {
    id: 'apple-airtag-1pack',
    name: 'Apple AirTag (1 шт.)',
    category: 'accessories',
    brand: 'Apple',
    description: 'Трекер для поиска ключей, сумки, багажа.',
    specs: { 'Батарея': 'CR2032 (1 год)', 'Связь': 'Bluetooth + UWB', 'Защита': 'IP67' },
    variants: [
      { sku: 'airtag1-white', color: 'Белый', storage: '', price: 2990, image: '/images/images6/4e592bd738108565401ab35c232456b1c3bccbfe1959f6fa307c7735cff098d2.jpg.webp' },
    ]
  },
  {
    id: 'apple-watch-band-sport-loop',
    name: 'Apple Watch Sport Loop',
    category: 'accessories',
    brand: 'Apple',
    description: 'Лёгкий и дышащий ремешок для повседневной носки.',
    specs: { 'Материал': 'Нейлон', 'Совместимость': 'Apple Watch 40/41/42 мм', 'Застёжка': 'Липучка' },
    variants: [
      { sku: 'awband-loop-golden', color: '', storage: 'золотистый', price: 5990, image: '/images/images6/c76547f2bca32c6e7ae0ed3954f4756c7fb0298a03bc1040e6931e0eb6d11d63.jpg' },
      { sku: 'awband-loop-blac', color: '', storage: 'Чёрный', price: 5990, image: '/images/images6/702db9b68efdcec0a488516001edd50503f9dd7485446b4c4ab8c2ad8e28975f.jpg.webp' },
      { sku: 'awband-loop-silver', color: '', storage: 'Серебристый', price: 5990, image: '/images/images6/f2e90eede6101f0b43783e799a31c1622f8de9b732230ee9245cbdbdf1daa33c.jpg.webp' },
    

    ]
  },
  {
    id: 'apple-usbc-charger-35w',
    name: 'Apple USB-C Charger 35W (два порта)',
    category: 'accessories',
    brand: 'Apple',
    description: 'Компактная зарядка на два устройства.',
    specs: { 'Мощность': '35 Вт', 'Порты': '2× USB-C', 'Совместимость': 'iPhone, iPad, AirPods, Apple Watch' },
    variants: [
      { sku: 'charger35w-white', color: 'Белый', storage: '', price: 5990, image: '/images/images6/e9c44c844080b303afdd69774e4f33501c2e6a4afc87f66e16a888f9ba54620c.jpg' },
    ]
  },
];
