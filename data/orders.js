const orders = [
  {
    "order_id": 1,
    "customer": "Karita Klimochkin",
    "country": "Sweden",
    "address": "8978 Westridge Park",
    "product_title": "Yellow-bellied marmot",
    "product_description": "Bread - Flat Bread",
    "date": "21/08/2020",
    "status": "Delivered"
  },
  {
    "order_id": 2,
    "customer": "Ferne Roman",
    "country": "China",
    "address": "1370 Ridge Oak Pass",
    "product_title": "Two-toed sloth",
    "product_description": "Asparagus - White, Fresh",
    "date": "24/07/2020",
    "status": "Completed"
  },
  {
    "order_id": 3,
    "customer": "Ranee Millins",
    "country": "Cuba",
    "address": "403 Lukken Plaza",
    "product_title": "Grenadier, purple",
    "product_description": "Anchovy Fillets",
    "date": "21/09/2019",
    "status": "Prepared"
  },
  {
    "order_id": 4,
    "customer": "Jo ann Sowood",
    "country": "Sweden",
    "address": "2401 Ludington Park",
    "product_title": "Bandicoot, southern brown",
    "product_description": "Wine - Chardonnay Mondavi",
    "date": "28/07/2021",
    "status": "Delivered"
  },
  {
    "order_id": 5,
    "customer": "Shelia Gumb",
    "country": "China",
    "address": "51 Calypso Hill",
    "product_title": "Western palm tanager (unidentified)",
    "product_description": "Squash - Pepper",
    "date": "28/09/2019",
    "status": "Completed"
  },
  {
    "order_id": 6,
    "customer": "Montgomery Cron",
    "country": "Kazakhstan",
    "address": "8675 Autumn Leaf Street",
    "product_title": "Three-banded plover",
    "product_description": "Nantuket Peach Orange",
    "date": "04/11/2021",
    "status": "Delivered"
  },
  {
    "order_id": 7,
    "customer": "Judas Rozet",
    "country": "Indonesia",
    "address": "03 Barby Terrace",
    "product_title": "Monitor, white-throated",
    "product_description": "Island Oasis - Mango Daiquiri",
    "date": "15/06/2021",
    "status": "Prepared"
  },
  {
    "order_id": 8,
    "customer": "Sherman Stienham",
    "country": "Colombia",
    "address": "61424 Arapahoe Parkway",
    "product_title": "Waxbill, blue",
    "product_description": "Mushroom - Morels, Dry",
    "date": "13/09/2020",
    "status": "Delivered"
  },
  {
    "order_id": 9,
    "customer": "Anton Tierny",
    "country": "Indonesia",
    "address": "5 Northwestern Parkway",
    "product_title": "Tortoise, radiated",
    "product_description": "Lid - Translucent, 3.5 And 6 Oz",
    "date": "08/05/2021",
    "status": "Delivered"
  },
  {
    "order_id": 10,
    "customer": "Ulysses Burdis",
    "country": "China",
    "address": "0 Ludington Park",
    "product_title": "Wallaby, agile",
    "product_description": "Table Cloth 54x72 White",
    "date": "21/06/2020",
    "status": "Completed"
  },
  {
    "order_id": 11,
    "customer": "Rex Bramsom",
    "country": "Philippines",
    "address": "41709 Evergreen Street",
    "product_title": "Pig-tailed macaque",
    "product_description": "Swiss Chard",
    "date": "27/11/2021",
    "status": "Delivered"
  },
  {
    "order_id": 12,
    "customer": "Maurine Olijve",
    "country": "Russia",
    "address": "2453 Longview Street",
    "product_title": "Tawny eagle",
    "product_description": "Salami - Genova",
    "date": "17/10/2021",
    "status": "Delivered"
  },
  {
    "order_id": 13,
    "customer": "Shelley Gillan",
    "country": "Malaysia",
    "address": "80799 Myrtle Pass",
    "product_title": "Ground monitor (unidentified)",
    "product_description": "Spice - Greek 1 Step",
    "date": "02/12/2020",
    "status": "Delivered"
  },
  {
    "order_id": 14,
    "customer": "Darnell Kernock",
    "country": "Aland Islands",
    "address": "368 Porter Center",
    "product_title": "Coot, red-knobbed",
    "product_description": "Napkin - Cocktail,beige 2 - Ply",
    "date": "12/04/2021",
    "status": "Delivered"
  },
  {
    "order_id": 15,
    "customer": "Avis Rewcassell",
    "country": "Russia",
    "address": "5 Sheridan Place",
    "product_title": "Mountain duck",
    "product_description": "Salt - Celery",
    "date": "26/10/2019",
    "status": "Delivered"
  },
  {
    "order_id": 16,
    "customer": "Dallas Saines",
    "country": "Ukraine",
    "address": "94 Pankratz Drive",
    "product_title": "White-headed vulture",
    "product_description": "Basil - Pesto Sauce",
    "date": "06/06/2020",
    "status": "Delivered"
  },
  {
    "order_id": 17,
    "customer": "Marina Kolyagin",
    "country": "Afghanistan",
    "address": "0861 Reindahl Point",
    "product_title": "Phascogale, brush-tailed",
    "product_description": "Hummus - Spread",
    "date": "08/03/2021",
    "status": "Prepone"
  },
  {
    "order_id": 18,
    "customer": "Malvin Gaskal",
    "country": "Canada",
    "address": "19566 Di Loreto Lane",
    "product_title": "Wallaby, red-necked",
    "product_description": "Cheese - Bakers Cream Cheese",
    "date": "19/12/2020",
    "status": "Completed"
  },
  {
    "order_id": 19,
    "customer": "Nikki Goney",
    "country": "Vietnam",
    "address": "997 Declaration Crossing",
    "product_title": "Mara",
    "product_description": "Rosemary - Dry",
    "date": "22/03/2021",
    "status": "Delivered"
  },
  {
    "order_id": 20,
    "customer": "Boote Barchrameev",
    "country": "China",
    "address": "5411 Harbort Center",
    "product_title": "Lechwe, kafue flats",
    "product_description": "Coconut - Shredded, Unsweet",
    "date": "02/03/2020",
    "status": "Completed"
  }
]
export default orders