import ShuffleArray from './../../Utils/ShuffleArray'

const products = [
  {
    id: 'MLC1452832053',
    title: 'Mercedes Benz Clase C C300 2.0 At',
    condition: 'used',
    thumbnail_id: '853866-MLC73760640099_012024',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-1452832053-mercedes-benz-clase-c-c300-20-at-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_853866-MLC73760640099_012024-I.jpg',
    currency_id: 'CLP',
    order_backend: 43,
    price: 26990000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: 57442,
    official_store_name: 'KAVAK',
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-05-01T04:00:00.000Z',
    seller: {
      id: 1024673775,
      nickname: 'KAVAK CHILE'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'SINGLE_OWNER',
        name: 'Único dueño',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'boolean'
      },
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'CONFORT',
        attribute_group_name: 'Confort',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'boolean'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '75966',
        value_name: 'Mercedes-Benz',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '75966',
            name: 'Mercedes-Benz',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: null,
        value_name: '2',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '20845130',
        value_name: 'Gasolina',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '20845130',
            name: 'Gasolina',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '41000 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 41000,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '41000 km',
            struct: {
              number: 41000,
              unit: 'km'
            },
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '503625',
        value_name: 'Clase C',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '503625',
            name: 'Clase C',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370876',
        value_name: 'Automática',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370876',
            name: 'Automática',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: null,
        value_name: 'C300 2.0 AT',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: 'C300 2.0 AT',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2019',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2019',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number'
      }
    ],
    location: {
      address_line: 'Olivos 980, Piso -4, Independencia, Región Metropolitana',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
      },
      city: {
        id: 'TUxDQ1NBTjk4M2M',
        name: 'Santiago'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.4234462,
      longitude: -70.6525246
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1452796369',
    title: 'Chevrolet Tracker 1.8 Lt Awd Euro5 At',
    condition: 'used',
    thumbnail_id: '624144-MLC73662273264_012024',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-1452796369-chevrolet-tracker-18-lt-awd-euro5-at-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_624144-MLC73662273264_012024-I.jpg',
    currency_id: 'CLP',
    order_backend: 44,
    price: 8890000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: 57442,
    official_store_name: 'KAVAK',
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-05-01T04:00:00.000Z',
    seller: {
      id: 1024673775,
      nickname: 'KAVAK CHILE'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'SINGLE_OWNER',
        name: 'Único dueño',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'boolean'
      },
      {
        id: 'TRACTION_CONTROL',
        name: 'Control de tracción',
        value_id: '370880',
        value_name: '4x4',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370880',
            name: '4x4',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'CONFORT',
        attribute_group_name: 'Confort',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'boolean'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '58955',
        value_name: 'Chevrolet',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '58955',
            name: 'Chevrolet',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: '2164450',
        value_name: '1.8',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2164450',
            name: '1.8',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '20845130',
        value_name: 'Gasolina',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '20845130',
            name: 'Gasolina',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '72700 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 72700,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '72700 km',
            struct: {
              number: 72700,
              unit: 'km'
            },
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '69370',
        value_name: 'Tracker',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '69370',
            name: 'Tracker',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370876',
        value_name: 'Automática',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370876',
            name: 'Automática',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: null,
        value_name: '1.8 LT AWD EURO5 AT',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '1.8 LT AWD EURO5 AT',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2015',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2015',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number'
      }
    ],
    location: {
      address_line: 'Olivos 980, Piso -4, Independencia, Región Metropolitana',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
      },
      city: {
        id: 'TUxDQ1NBTjk4M2M',
        name: 'Santiago'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.4234462,
      longitude: -70.6525246
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC2188006532',
    title: 'Jeep Wrangler Sport 2.8 4x4 Diésel At 2014 (3 Puertas)',
    condition: 'used',
    thumbnail_id: '856592-MLC73645738195_122023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-2188006532-jeep-wrangler-sport-28-4x4-diesel-at-2014-3-puertas-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_856592-MLC73645738195_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 45,
    price: 18950000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-04-24T04:00:00.000Z',
    seller: {
      id: 1603406547,
      nickname: 'LAAUTERIA3'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'SINGLE_OWNER',
        name: 'Único dueño',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'boolean'
      },
      {
        id: 'TRACTION_CONTROL',
        name: 'Control de tracción',
        value_id: '370880',
        value_name: '4x4',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370880',
            name: '4x4',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'CONFORT',
        attribute_group_name: 'Confort',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'boolean'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '60395',
        value_name: 'Jeep',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '60395',
            name: 'Jeep',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: '2164455',
        value_name: '2.8',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2164455',
            name: '2.8',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '60406',
        value_name: 'Diésel',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '60406',
            name: 'Diésel',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '157000 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 157000,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '157000 km',
            struct: {
              unit: 'km',
              number: 157000
            },
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '8938',
        value_name: 'Wrangler',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '8938',
            name: 'Wrangler',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370876',
        value_name: 'Automática',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370876',
            name: 'Automática',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: null,
        value_name: 'Sport 2.8 4x4 Diésel 3 Puertas',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: 'Sport 2.8 4x4 Diésel 3 Puertas',
            struct: null,
            source: 3282472529718136
          }
        ],
        source: 3282472529718136,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2014',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2014',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      }
    ],
    location: {
      address_line: '',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TVhYVHJvbmNvcyBWaWVqb3NUVXhEUTB4QklEW',
        name: 'Troncos Viejos'
      },
      city: {
        id: 'TUxDQ0xBIDZlMWI5',
        name: 'La Reina'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.4338399,
      longitude: -70.577319
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1452785455',
    title: 'Bmw X1 Sdrive ',
    condition: 'used',
    thumbnail_id: '984343-MLC73660128870_012024',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-1452785455-bmw-x1-sdrive-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_984343-MLC73660128870_012024-I.jpg',
    currency_id: 'CLP',
    order_backend: 46,
    price: 19590000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-05-01T04:00:00.000Z',
    seller: {
      id: 55601614,
      nickname: 'AUTOMOTRIZ LASCONDES'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '66352',
        value_name: 'BMW',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '66352',
            name: 'BMW',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '5',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '5',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: '2164450',
        value_name: '1.8',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2164450',
            name: '1.8',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '60406',
        value_name: 'Diésel',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '60406',
            name: 'Diésel',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '79000 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 79000,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '79000 km',
            struct: {
              number: 79000,
              unit: 'km'
            },
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '6520',
        value_name: 'X1',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '6520',
            name: 'X1',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370876',
        value_name: 'Automática',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370876',
            name: 'Automática',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: null,
        value_name: '1.8 D sdrive',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '1.8 D sdrive',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2018',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2018',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      }
    ],
    location: {
      address_line: '',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TVhYQWx0byBMYXMgQ29uZGVzVFV4RFEweEJVe',
        name: 'Alto Las Condes'
      },
      city: {
        id: 'TUxDQ0xBUzU2MTEz',
        name: 'Las Condes'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.3908833,
      longitude: -70.5462013
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1448603917',
    title: 'Renault Duster 2.0 Dynamique Pk 4x4 Mt',
    condition: 'used',
    thumbnail_id: '660146-MLC73375260202_122023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-1448603917-renault-duster-20-dynamique-pk-4x4-mt-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_660146-MLC73375260202_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 47,
    price: 8490000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: 57442,
    official_store_name: 'KAVAK',
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-04-13T04:02:12.223Z',
    seller: {
      id: 1024673775,
      nickname: 'KAVAK CHILE'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'SINGLE_OWNER',
        name: 'Único dueño',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'boolean'
      },
      {
        id: 'TRACTION_CONTROL',
        name: 'Control de tracción',
        value_id: '370880',
        value_name: '4x4',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370880',
            name: '4x4',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'CONFORT',
        attribute_group_name: 'Confort',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'boolean'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '9909',
        value_name: 'Renault',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '9909',
            name: 'Renault',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: null,
        value_name: '2',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '20845130',
        value_name: 'Gasolina',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '20845130',
            name: 'Gasolina',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '31000 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 31000,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '31000 km',
            struct: {
              number: 31000,
              unit: 'km'
            },
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '64855',
        value_name: 'Duster',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '64855',
            name: 'Duster',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370877',
        value_name: 'Manual',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370877',
            name: 'Manual',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: null,
        value_name: '2.0 DYNAMIQUE PK 4X4 MT',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2.0 DYNAMIQUE PK 4X4 MT',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2017',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2017',
            struct: null,
            source: 3094542562002401
          }
        ],
        source: 3094542562002401,
        value_type: 'number'
      }
    ],
    location: {
      address_line: 'Olivos 980, Piso -4, Independencia, Región Metropolitana',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
      },
      city: {
        id: 'TUxDQ1NBTjk4M2M',
        name: 'Santiago'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.4234462,
      longitude: -70.6525246
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC2194697352',
    title: 'Mazda 3 2.0 Sport',
    condition: 'used',
    thumbnail_id: '848496-MLC73631347400_122023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-2194697352-mazda-3-20-sport-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_848496-MLC73631347400_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 48,
    price: 12880000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-04-28T04:00:00.000Z',
    seller: {
      id: 1208063329,
      nickname: 'HPAUTOMOTORA20220929203554'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '66811',
        value_name: 'Mazda',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '66811',
            name: 'Mazda',
            struct: null,
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: '423563',
        value_name: '2.0',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '423563',
            name: '2.0',
            struct: null,
            source: 3282472529718136
          }
        ],
        source: 3282472529718136,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '2318162',
        value_name: 'Bencina',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2318162',
            name: 'Bencina',
            struct: null,
            source: 3282472529718136
          }
        ],
        source: 3282472529718136,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '68000 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 68000,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '68000 km',
            struct: {
              number: 68000,
              unit: 'km'
            },
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '49506',
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '49506',
            name: '3',
            struct: null,
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370876',
        value_name: 'Automática',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370876',
            name: 'Automática',
            struct: null,
            source: 3282472529718136
          }
        ],
        source: 3282472529718136,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: '2158506',
        value_name: '2.0 Sport',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2158506',
            name: '2.0 Sport',
            struct: null,
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2019',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2019',
            struct: null,
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'number'
      }
    ],
    location: {
      address_line: '',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
      },
      city: {
        id: 'TUxDQ01BQzY4NTYx',
        name: 'Macul'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.4851471,
      longitude: -70.5992005
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1452381147',
    title: 'Bmw Serie 4 420i Gran Coupé 2.0 At 2017 ',
    condition: 'used',
    thumbnail_id: '652614-MLC73628771834_122023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-1452381147-bmw-serie-4-420i-gran-coupe-20-at-2017-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_652614-MLC73628771834_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 49,
    price: 19990000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-04-28T04:00:00.000Z',
    seller: {
      id: 1603406547,
      nickname: 'LAAUTERIA3'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'SINGLE_OWNER',
        name: 'Único dueño',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'boolean'
      },
      {
        id: 'TRACTION_CONTROL',
        name: 'Control de tracción',
        value_id: '493979',
        value_name: 'Delantera',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '493979',
            name: 'Delantera',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'CONFORT',
        attribute_group_name: 'Confort',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'boolean'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '66352',
        value_name: 'BMW',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '66352',
            name: 'BMW',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '5',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '5',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: '423563',
        value_name: '2.0',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '423563',
            name: '2.0',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '2318162',
        value_name: 'Bencina',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2318162',
            name: 'Bencina',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '70000 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 70000,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '70000 km',
            struct: {
              number: 70000,
              unit: 'km'
            },
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '71137',
        value_name: 'Serie 4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '71137',
            name: 'Serie 4',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370876',
        value_name: 'Automática',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370876',
            name: 'Automática',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: null,
        value_name: '420i Gran Coupé',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '420i Gran Coupé',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2017',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2017',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      }
    ],
    location: {
      address_line: '',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TVhYVHJvbmNvcyBWaWVqb3NUVXhEUTB4QklEW',
        name: 'Troncos Viejos'
      },
      city: {
        id: 'TUxDQ0xBIDZlMWI5',
        name: 'La Reina'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.4338399,
      longitude: -70.577319
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1452345251',
    title: 'Nissan X-trail 2.5 Classic 4x4 Mt 2008 ',
    condition: 'used',
    thumbnail_id: '981718-MLC73723668321_122023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://auto.mercadolibre.cl/MLC-1452345251-nissan-x-trail-25-classic-4x4-mt-2008-_JM',
    buying_mode: 'classified',
    site_id: 'MLC',
    category_id: 'MLC1743',
    domain_id: 'MLC-CARS_AND_VANS',
    thumbnail: 'https://http2.mlstatic.com/D_981718-MLC73723668321_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 50,
    price: 4500000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: null,
      mode: 'not_specified',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2024-04-28T04:00:00.000Z',
    seller: {
      id: 1603406547,
      nickname: 'LAAUTERIA3'
    },
    attributes: [
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'SINGLE_OWNER',
        name: 'Único dueño',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'boolean'
      },
      {
        id: 'TRACTION_CONTROL',
        name: 'Control de tracción',
        value_id: '370880',
        value_name: '4x4',
        attribute_group_id: 'ADICIONALES',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370880',
            name: '4x4',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'CONFORT',
        attribute_group_name: 'Confort',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'boolean'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '60505',
        value_name: 'Nissan',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '60505',
            name: 'Nissan',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'DOORS',
        name: 'Puertas',
        value_id: null,
        value_name: '5',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '5',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      },
      {
        id: 'ENGINE',
        name: 'Motor',
        value_id: '2164464',
        value_name: '2.5',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2164464',
            name: '2.5',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'FUEL_TYPE',
        name: 'Tipo de combustible',
        value_id: '2318162',
        value_name: 'Bencina',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '2318162',
            name: 'Bencina',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'KILOMETERS',
        name: 'Kilómetros',
        value_id: null,
        value_name: '250000 km',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 250000,
          unit: 'km'
        },
        values: [
          {
            id: null,
            name: '250000 km',
            struct: {
              unit: 'km',
              number: 250000
            },
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '65389',
        value_name: 'X-Trail',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '65389',
            name: 'X-Trail',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'TRANSMISSION',
        name: 'Transmisión',
        value_id: '370877',
        value_name: 'Manual',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: '370877',
            name: 'Manual',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'list'
      },
      {
        id: 'TRIM',
        name: 'Versión',
        value_id: null,
        value_name: '2.5 Classic 4x4 MT',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2.5 Classic 4x4 MT',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'string'
      },
      {
        id: 'VEHICLE_YEAR',
        name: 'Año',
        value_id: null,
        value_name: '2008',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2008',
            struct: null,
            source: 3149448506392345
          }
        ],
        source: 3149448506392345,
        value_type: 'number'
      }
    ],
    location: {
      address_line: '',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TVhYVHJvbmNvcyBWaWVqb3NUVXhEUTB4QklEW',
        name: 'Troncos Viejos'
      },
      city: {
        id: 'TUxDQ0xBIDZlMWI5',
        name: 'La Reina'
      },
      state: {
        id: 'TUxDUE1FVEExM2JlYg',
        name: 'RM (Metropolitana)'
      },
      country: {
        id: 'CL',
        name: 'Chile'
      },
      latitude: -33.4338399,
      longitude: -70.577319
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC2193496960',
    title: 'Audífonos Lenovo Gm2 Pro Inalambrico Gaming Deportivos',
    condition: 'new',
    thumbnail_id: '868754-MLA70304804051_072023',
    catalog_product_id: 'MLC20912075',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/audifonos-lenovo-gm2-pro-inalambrico-gaming-deportivos/p/MLC20912075',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-HEADPHONES',
    thumbnail: 'https://http2.mlstatic.com/D_868754-MLA70304804051_072023-I.jpg',
    currency_id: 'CLP',
    order_backend: 42,
    price: 12000,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-12-29T16:42:00.742Z',
    seller: {
      id: 1335824046,
      nickname: 'SIA SHOP'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '7494',
        value_name: 'Lenovo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '7494',
            name: 'Lenovo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6402814585011704
          }
        ],
        source: 6402814585011704,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '8672493',
        value_name: 'ThinkPlus',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '8672493',
            name: 'ThinkPlus',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '15662015',
        value_name: 'GM2 PRO',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '15662015',
            name: 'GM2 PRO',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      }
    ],
    installments: {
      quantity: 6,
      amount: 2000,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1452800367',
    title: 'Hogwarts Legacy Standard Edition Warner Bros. Ps4 Físico',
    condition: 'new',
    thumbnail_id: '815367-MLU72926272703_112023',
    catalog_product_id: 'MLC20618094',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/hogwarts-legacy-standard-edition-warner-bros-ps4-fisico/p/MLC20618094',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-VIDEO_GAMES',
    thumbnail: 'https://http2.mlstatic.com/D_815367-MLU72926272703_112023-I.jpg',
    currency_id: 'CLP',
    order_backend: 43,
    price: 39990,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-12-28T04:00:00.000Z',
    seller: {
      id: 1307320210,
      nickname: 'MJC IMPORTACIONES'
    },
    attributes: [
      {
        id: 'IS_OFFLINE',
        name: 'Es offline',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'boolean'
      },
      {
        id: 'IS_ONLINE',
        name: 'Es online',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'boolean'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6402814585011704
          }
        ],
        source: 6402814585011704,
        value_type: 'list'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '17 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 17,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '17 cm',
            struct: {
              number: 17,
              unit: 'cm'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '80 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 80,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '80 g',
            struct: {
              number: 80,
              unit: 'g'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 6665,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'GMHJ03565'
  },
  {
    id: 'MLC1021102487',
    title: 'Consola Brick Game 9999 In 1 Standard Color Negro',
    condition: 'new',
    thumbnail_id: '882042-MLA47214701414_082021',
    catalog_product_id: 'MLC17841406',
    listing_type_id: 'gold_pro',
    permalink: 'https://www.mercadolibre.cl/consola-brick-game-9999-in-1-standard-color-negro/p/MLC17841406',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-GAME_CONSOLES',
    thumbnail: 'https://http2.mlstatic.com/D_882042-MLA47214701414_082021-I.jpg',
    currency_id: 'CLP',
    order_backend: 44,
    price: 2256,
    original_price: 2930,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2042-07-04T04:00:00.000Z',
    seller: {
      id: 516222673,
      nickname: 'FIJO2469377'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '10300114',
        value_name: 'Brick Game',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '10300114',
            name: 'Brick Game',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 7092
          }
        ],
        source: 7092,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '10300115',
        value_name: '9999 in 1',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '10300115',
            name: '9999 in 1',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '8054857',
        value_name: '0.1 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 0.1,
          unit: 'kg'
        },
        values: [
          {
            id: '8054857',
            name: '0.1 kg',
            struct: {
              number: 0.1,
              unit: 'kg'
            },
            source: 4709228965570453
          }
        ],
        source: 4709228965570453,
        value_type: 'number_unit'
      }
    ],
    installments: null,
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'IAZI21133'
  },
  {
    id: 'MLC1414180335',
    title: 'Control Gamepad Inalámbrico Njoytech Camuflado Azul Para Ps4',
    condition: 'new',
    thumbnail_id: '929739-MLU72637255327_112023',
    catalog_product_id: 'MLC26170240',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/control-gamepad-inalambrico-njoytech-camuflado-azul-para-ps4/p/MLC26170240',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-GAMEPADS_AND_JOYSTICKS',
    thumbnail: 'https://http2.mlstatic.com/D_929739-MLU72637255327_112023-I.jpg',
    currency_id: 'CLP',
    order_backend: 45,
    price: 17802,
    original_price: 27990,
    sale_price: null,
    available_quantity: 500,
    official_store_id: 1606,
    official_store_name: 'Bodytrainer',
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-08-14T04:00:00.000Z',
    seller: {
      id: 1094095574,
      nickname: 'BODYTRAINER'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '9854759',
        value_name: 'Njoytech',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '9854759',
            name: 'Njoytech',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 699147714295090
          }
        ],
        source: 699147714295090,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '23126814',
        value_name: 'NJ-CAMOBT4A',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '23126814',
            name: 'NJ-CAMOBT4A',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '20.6 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 20.6,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '20.6 cm',
            struct: {
              number: 20.6,
              unit: 'cm'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '320 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 320,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '320 g',
            struct: {
              unit: 'g',
              number: 320
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'UNITS_PER_PACKAGE',
        name: 'Unidades por envase',
        value_id: '7386989',
        value_name: '1',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '7386989',
            name: '1',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'number'
      }
    ],
    installments: {
      quantity: 6,
      amount: 2967,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'PTOK76351'
  },
  {
    id: 'MLC611540126',
    title: 'Animal Crossing: New Horizons New Horizons Standard Edition Nintendo Switch Físico',
    condition: 'new',
    thumbnail_id: '748351-MLU72534484888_102023',
    catalog_product_id: 'MLC15584070',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/animal-crossing-new-horizons-new-horizons-standard-edition-nintendo-switch-fisico/p/MLC15584070',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-VIDEO_GAMES',
    thumbnail: 'https://http2.mlstatic.com/D_748351-MLU72534484888_102023-I.jpg',
    currency_id: 'CLP',
    order_backend: 46,
    price: 47990,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'self_service_in',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2041-05-02T04:00:00.000Z',
    seller: {
      id: 247376114,
      nickname: 'SNIPER_CL'
    },
    attributes: [
      {
        id: 'IS_ONLINE',
        name: 'Es online',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'boolean'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 2860837171021627
          }
        ],
        source: 2860837171021627,
        value_type: 'list'
      }
    ],
    installments: {
      quantity: 6,
      amount: 7998.33,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1454433503',
    title: 'Consola Nintendo Switch Lite Isabelle Ed Animal Crossing Nh',
    condition: 'new',
    thumbnail_id: '843537-MLU72755866793_112023',
    catalog_product_id: 'MLC27702596',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/consola-nintendo-switch-lite-isabelle-ed-animal-crossing-nh/p/MLC27702596',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-GAME_CONSOLES',
    thumbnail: 'https://http2.mlstatic.com/D_843537-MLU72755866793_112023-I.jpg',
    currency_id: 'CLP',
    order_backend: 47,
    price: 229990,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'self_service_in',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2044-01-03T04:00:00.000Z',
    seller: {
      id: 318625655,
      nickname: 'MUNDO_JUEGOS1'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '9565',
        value_name: 'Nintendo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '9565',
            name: 'Nintendo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6402814585011704
          }
        ],
        source: 6402814585011704,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '17333798',
        value_name: 'Nintendo Switch',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '17333798',
            name: 'Nintendo Switch',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '17123',
        value_name: 'Switch',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '17123',
            name: 'Switch',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'SUBMODEL',
        name: 'Submodelo',
        value_id: '480799',
        value_name: 'Lite',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '480799',
            name: 'Lite',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '7061026',
        value_name: '1.54 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 1.54,
          unit: 'kg'
        },
        values: [
          {
            id: '7061026',
            name: '1.54 kg',
            struct: {
              unit: 'kg',
              number: 1.54
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 38331.67,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1840733942',
    title: 'Control Inalámbrico Xbox Color Robot White',
    condition: 'new',
    thumbnail_id: '889337-MLA44330907885_122020',
    catalog_product_id: 'MLC16268161',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/control-inalambrico-xbox-color-robot-white/p/MLC16268161',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-GAMEPADS_AND_JOYSTICKS',
    thumbnail: 'https://http2.mlstatic.com/D_889337-MLA44330907885_122020-I.jpg',
    currency_id: 'CLP',
    order_backend: 48,
    price: 56990,
    original_price: 64990,
    sale_price: null,
    available_quantity: 150,
    official_store_id: 1053,
    official_store_name: 'Mercado Libre Gaming',
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-07-26T04:00:00.000Z',
    seller: {
      id: 550063615,
      nickname: 'MERCADOLIBRE ELECTRONICA_CL'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '9904863',
        value_name: 'Xbox',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '9904863',
            name: 'Xbox',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'DETAILED_MODEL',
        name: 'Modelo detallado',
        value_id: '15439014',
        value_name: 'Xbox one',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '15439014',
            name: 'Xbox one',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 8748668969142
          }
        ],
        source: 8748668969142,
        value_type: 'list'
      },
      {
        id: 'LENGTH',
        name: 'Largo',
        value_id: '37228',
        value_name: '7.2 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 7.2,
          unit: 'cm'
        },
        values: [
          {
            id: '37228',
            name: '7.2 cm',
            struct: {
              number: 7.2,
              unit: 'cm'
            },
            source: 4709228965570453
          }
        ],
        source: 4709228965570453,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '9904864',
        value_name: 'Wireless Controller Series X|S',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '9904864',
            name: 'Wireless Controller Series X|S',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '18 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 18,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '18 cm',
            struct: {
              number: 18,
              unit: 'cm'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '440 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 440,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '440 g',
            struct: {
              unit: 'g',
              number: 440
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'UNITS_PER_PACKAGE',
        name: 'Unidades por envase',
        value_id: '7386989',
        value_name: '1',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '7386989',
            name: '1',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'number'
      }
    ],
    installments: {
      quantity: 6,
      amount: 9498.33,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'HSKY40017'
  },
  {
    id: 'MLC1006036014',
    title: 'Audífonos Gamer Hp Gamer H220s H22s Negro',
    condition: 'new',
    thumbnail_id: '873032-MLU73288644563_122023',
    catalog_product_id: 'MLC17361375',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/audifonos-gamer-hp-gamer-h220s-h22s-negro/p/MLC17361375',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-HEADPHONES',
    thumbnail: 'https://http2.mlstatic.com/D_873032-MLU73288644563_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 49,
    price: 10290,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'self_service_in',
        'fbm_in_process'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2042-06-05T04:00:00.000Z',
    seller: {
      id: 436150905,
      nickname: 'PROGAMING.CL'
    },
    attributes: [
      {
        id: 'ALPHANUMERIC_MODEL',
        name: 'Modelo alfanumérico',
        value_id: '23776112',
        value_name: 'H22S',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '23776112',
            name: 'H22S',
            struct: null,
            source: 4709228965570453
          }
        ],
        source: 4709228965570453,
        value_type: 'string'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '49944',
        value_name: 'HP',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '49944',
            name: 'HP',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'CABLE_LENGTH',
        name: 'Largo del cable',
        value_id: '1008364',
        value_name: '2.2 m',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 2.2,
          unit: 'm'
        },
        values: [
          {
            id: '1008364',
            name: '2.2 m',
            struct: {
              number: 2.2,
              unit: 'm'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '126366',
        value_name: 'Gamer',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '126366',
            name: 'Gamer',
            struct: null,
            source: 4709228965570453
          }
        ],
        source: 4709228965570453,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '9821729',
        value_name: 'H220S',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '9821729',
            name: 'H220S',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      }
    ],
    installments: {
      quantity: 6,
      amount: 1715,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'KUXP02846'
  },
  {
    id: 'MLC1021135051',
    title: 'Consola Brick Game 9999 In 1 Standard Color Rojo',
    condition: 'new',
    thumbnail_id: '964394-MLA47214701541_082021',
    catalog_product_id: 'MLC17841415',
    listing_type_id: 'gold_pro',
    permalink: 'https://www.mercadolibre.cl/consola-brick-game-9999-in-1-standard-color-rojo/p/MLC17841415',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1144',
    domain_id: 'MLC-GAME_CONSOLES',
    thumbnail: 'https://http2.mlstatic.com/D_964394-MLA47214701541_082021-I.jpg',
    currency_id: 'CLP',
    order_backend: 50,
    price: 2256,
    original_price: 2930,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2042-07-04T04:00:00.000Z',
    seller: {
      id: 516222673,
      nickname: 'FIJO2469377'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '10300114',
        value_name: 'Brick Game',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '10300114',
            name: 'Brick Game',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 7092
          }
        ],
        source: 7092,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '10300115',
        value_name: '9999 in 1',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '10300115',
            name: '9999 in 1',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      }
    ],
    installments: null,
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'VWNB20936'
  },
  {
    id: 'MLC1357104645',
    title: 'Cable De Instrumento Plug Plug 3 Mt Kirlin',
    condition: 'new',
    thumbnail_id: '907939-MLC53017980542_122022',
    catalog_product_id: 'MLC21617023',
    listing_type_id: 'gold_pro',
    permalink: 'https://www.mercadolibre.cl/cable-de-instrumento-plug-plug-3-mt-kirlin/p/MLC21617023',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-AUDIO_AND_VIDEO_CABLES_AND_ADAPTERS',
    thumbnail: 'https://http2.mlstatic.com/D_907939-MLC53017980542_122022-I.jpg',
    currency_id: 'CLP',
    order_backend: 34,
    price: 7890,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-02-25T04:00:00.000Z',
    seller: {
      id: 384372579,
      nickname: 'NOVATRONIC AUDIO'
    },
    attributes: [
      {
        id: 'UNITS_PER_PACKAGE',
        name: 'Unidades por envase',
        value_id: null,
        value_name: '1',
        attribute_group_id: '',
        attribute_group_name: '',
        value_struct: null,
        values: [
          {
            id: null,
            name: '1',
            struct: null,
            source: 3376461333454861
          }
        ],
        source: 3376461333454861,
        value_type: 'integer'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '16003418',
        value_name: 'Kirlin',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '16003418',
            name: 'Kirlin',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'CABLE_LENGTH',
        name: 'Largo del cable',
        value_id: '129130',
        value_name: '3 m',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 3,
          unit: 'm'
        },
        values: [
          {
            id: '129130',
            name: '3 m',
            struct: {
              unit: 'm',
              number: 3
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'INPUT_CONNECTOR_GENDER',
        name: 'Género del conector de entrada',
        value_id: '6116079',
        value_name: 'Macho',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '6116079',
            name: 'Macho',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6808261514773724
          }
        ],
        source: 6808261514773724,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: null,
        value_name: 'IPCU-242',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: null,
            name: 'IPCU-242',
            struct: null,
            source: 6808261514773724
          }
        ],
        source: 6808261514773724,
        value_type: 'string'
      },
      {
        id: 'OUTPUT_CONNECTOR_GENDER',
        name: 'Género del conector de salida',
        value_id: '6116086',
        value_name: 'Macho',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '6116086',
            name: 'Macho',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'SALE_FORMAT',
        name: 'Formato de venta',
        value_id: '-1',
        value_name: null,
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '-1',
            name: null,
            struct: null,
            source: 3376461333454861
          }
        ],
        source: 3376461333454861,
        value_type: 'list'
      },
      {
        id: 'UNITS_PER_PACK',
        name: 'Unidades por pack',
        value_id: '-1',
        value_name: null,
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '-1',
            name: null,
            struct: null,
            source: 3376461333454861
          }
        ],
        source: 3376461333454861,
        value_type: 'number'
      }
    ],
    installments: {
      quantity: 12,
      amount: 657.5,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    differential_pricing: {
      id: 33613181
    },
    inventory_id: 'RIKW26127'
  },
  {
    id: 'MLC1891640172',
    title: 'Luz Proton Par 54 Led Alta Luminosidad Audioritmico Dmx Rgb',
    condition: 'new',
    thumbnail_id: '737911-MLU54967665131_042023',
    catalog_product_id: 'MLC22687300',
    listing_type_id: 'gold_pro',
    permalink: 'https://www.mercadolibre.cl/luz-proton-par-54-led-alta-luminosidad-audioritmico-dmx-rgb/p/MLC22687300',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-LED_STAGE_LIGHTS',
    thumbnail: 'https://http2.mlstatic.com/D_737911-MLU54967665131_042023-I.jpg',
    currency_id: 'CLP',
    order_backend: 35,
    price: 19980,
    original_price: null,
    sale_price: null,
    available_quantity: 500,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-08-17T04:00:00.000Z',
    seller: {
      id: 1317566910,
      nickname: 'COMERCIAL WALDEN2023'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '276243',
        value_name: 'Genérica',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '276243',
            name: 'Genérica',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 81068639424647
          }
        ],
        source: 81068639424647,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '22890',
        value_name: '54',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '22890',
            name: '54',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '18347815',
        value_name: '1.111 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 1.111,
          unit: 'kg'
        },
        values: [
          {
            id: '18347815',
            name: '1.111 kg',
            struct: {
              number: 1.111,
              unit: 'kg'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 12,
      amount: 1665,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    differential_pricing: {
      id: 33613181
    },
    inventory_id: 'JKLI99489'
  },
  {
    id: 'MLC2065283674',
    title: 'Romms Ms-203e Soporte Atril Plegable Para Partitura Msi',
    condition: 'new',
    thumbnail_id: '714087-MLU71214620512_082023',
    catalog_product_id: 'MLC26334717',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/romms-ms-203e-soporte-atril-plegable-para-partitura-msi/p/MLC26334717',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-MUSIC_STANDS',
    thumbnail: 'https://http2.mlstatic.com/D_714087-MLU71214620512_082023-I.jpg',
    currency_id: 'CLP',
    order_backend: 36,
    price: 16990,
    original_price: null,
    sale_price: null,
    available_quantity: 250,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-10-20T04:00:00.000Z',
    seller: {
      id: 270193032,
      nickname: 'ESHOPANGIE'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '3315707',
        value_name: 'Romms',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '3315707',
            name: 'Romms',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6808261514773724
          }
        ],
        source: 6808261514773724,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '23342040',
        value_name: 'MS-203E',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '23342040',
            name: 'MS-203E',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      }
    ],
    installments: {
      quantity: 6,
      amount: 2831.67,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1432474107',
    title: 'Guitarra Clásica Scorpion Scg-030',
    condition: 'new',
    thumbnail_id: '671816-MLU73670516334_012024',
    catalog_product_id: 'MLC17810400',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/guitarra-clasica-scorpion-scg-030/p/MLC17810400',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-ACOUSTIC_GUITARS',
    thumbnail: 'https://http2.mlstatic.com/D_671816-MLU73670516334_012024-I.jpg',
    currency_id: 'CLP',
    order_backend: 37,
    price: 44990,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-10-12T04:00:00.000Z',
    seller: {
      id: 496372295,
      nickname: 'MANDALAYSTORE'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '2526479',
        value_name: 'Scorpion',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2526479',
            name: 'Scorpion',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 2860837171021627
          }
        ],
        source: 2860837171021627,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '10222224',
        value_name: 'SCG-030',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '10222224',
            name: 'SCG-030',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      }
    ],
    installments: {
      quantity: 6,
      amount: 7498.33,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC979546024',
    title: 'Parlante Blik Rockwood Portátil Con Bluetooth Madera',
    condition: 'new',
    thumbnail_id: '602170-MLU73327109034_122023',
    catalog_product_id: 'MLC18927470',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/parlante-blik-rockwood-portatil-con-bluetooth-madera/p/MLC18927470',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-SPEAKERS',
    thumbnail: 'https://http2.mlstatic.com/D_602170-MLU73327109034_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 38,
    price: 16782,
    original_price: 22990,
    sale_price: null,
    available_quantity: 50,
    official_store_id: 945,
    official_store_name: 'Blik',
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2042-03-30T04:00:00.000Z',
    seller: {
      id: 589019446,
      nickname: 'BLIKTECHNICA'
    },
    attributes: [
      {
        id: 'ALPHANUMERIC_MODEL',
        name: 'Modelo alfanumérico',
        value_id: null,
        value_name: 'BLIK-ROCKWOOD',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: null,
            name: 'BLIK-ROCKWOOD',
            struct: null,
            source: 699147714295090
          }
        ],
        source: 699147714295090,
        value_type: 'string'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '9921232',
        value_name: 'Blik',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '9921232',
            name: 'Blik',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'DETAILED_MODEL',
        name: 'Modelo detallado',
        value_id: '26076347',
        value_name: 'BLIK-ROCKWOOD',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '26076347',
            name: 'BLIK-ROCKWOOD',
            struct: null,
            source: 699147714295090
          }
        ],
        source: 699147714295090,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '6577451',
        value_name: 'Rockwood',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '6577451',
            name: 'Rockwood',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '40.8 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 40.8,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '40.8 cm',
            struct: {
              number: 40.8,
              unit: 'cm'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '1280 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 1280,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '1280 g',
            struct: {
              unit: 'g',
              number: 1280
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '7674178',
        value_name: '1.1 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 1.1,
          unit: 'kg'
        },
        values: [
          {
            id: '7674178',
            name: '1.1 kg',
            struct: {
              number: 1.1,
              unit: 'kg'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 2797,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'VUYV18699'
  },
  {
    id: 'MLC1740427246',
    title: 'Interfaz De Audio Behringer U-phoria Um2 Negra',
    condition: 'new',
    thumbnail_id: '739029-MLA69924365828_062023',
    catalog_product_id: 'MLC21643134',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/interfaz-de-audio-behringer-u-phoria-um2-negra/p/MLC21643134',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-AUDIO_INTERFACES',
    thumbnail: 'https://http2.mlstatic.com/D_739029-MLA69924365828_062023-I.jpg',
    currency_id: 'CLP',
    order_backend: 39,
    price: 74990,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-06-11T04:00:00.000Z',
    seller: {
      id: 818642119,
      nickname: 'PLANETMUSIC.CL'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '3421',
        value_name: 'Behringer',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '3421',
            name: 'Behringer',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '2511862',
        value_name: 'U-Phoria',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2511862',
            name: 'U-Phoria',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '2511864',
        value_name: 'UM2',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2511864',
            name: 'UM2',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '15.8 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 15.8,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '15.8 cm',
            struct: {
              number: 15.8,
              unit: 'cm'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '560 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 560,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '560 g',
            struct: {
              number: 560,
              unit: 'g'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '7674176',
        value_name: '0.3 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 0.3,
          unit: 'kg'
        },
        values: [
          {
            id: '7674176',
            name: '0.3 kg',
            struct: {
              number: 0.3,
              unit: 'kg'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'WITH_PHANTOM_POWER',
        name: 'Con alimentación fantasma',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'boolean'
      }
    ],
    installments: {
      quantity: 6,
      amount: 12498.33,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'JLPH48357'
  },
  {
    id: 'MLC2178863078',
    title: 'Xilófono De Madera 8 Notas Musical Didáctico',
    condition: 'new',
    thumbnail_id: '941099-MLU73432162343_122023',
    catalog_product_id: 'MLC28988242',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/xilofono-de-madera-8-notas-musical-didactico/p/MLC28988242',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-XYLOPHONES_AND_METALLOPHONES',
    thumbnail: 'https://http2.mlstatic.com/D_941099-MLU73432162343_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 40,
    price: 3280,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-12-15T04:00:00.000Z',
    seller: {
      id: 288549222,
      nickname: 'TELOTENEMOS.CL'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '276243',
        value_name: 'Genérica',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '276243',
            name: 'Genérica',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '27463129',
        value_name: '8 notas',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '27463129',
            name: '8 notas',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '13.2 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 13.2,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '13.2 cm',
            struct: {
              unit: 'cm',
              number: 13.2
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '200 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 200,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '200 g',
            struct: {
              number: 200,
              unit: 'g'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      }
    ],
    installments: null,
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'JFNK93899'
  },
  {
    id: 'MLC1759623000',
    title: 'Cuerdas Ernie Ball 3221 Regular Slinky 10-46 Pack 3 Set',
    condition: 'new',
    thumbnail_id: '919511-MLC32892168609_112019',
    catalog_product_id: 'MLC21345948',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/cuerdas-ernie-ball-3221-regular-slinky-10-46-pack-3-set/p/MLC21345948',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-STRING_INSTRUMENT_STRINGS',
    thumbnail: 'https://http2.mlstatic.com/D_919511-MLC32892168609_112019-I.jpg',
    currency_id: 'CLP',
    order_backend: 41,
    price: 21982,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'self_service_in',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-06-22T04:00:00.000Z',
    seller: {
      id: 716106632,
      nickname: 'PROSTRINGSSCHILE'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '2863328',
        value_name: 'Ernie Ball',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2863328',
            name: 'Ernie Ball',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 7092
          }
        ],
        source: 7092,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '14936306',
        value_name: 'SLINKY',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '14936306',
            name: 'SLINKY',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '16094589',
        value_name: 'P03221',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '16094589',
            name: 'P03221',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'UNITS_PER_PACKAGE',
        name: 'Unidades por envase',
        value_id: '334424',
        value_name: '3',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '334424',
            name: '3',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'number'
      }
    ],
    installments: {
      quantity: 6,
      amount: 3663.67,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1418398375',
    title: 'Controlador Dj Hercules Djcontrol Inpulse 300 Mk2 Negro Color Negro',
    condition: 'new',
    thumbnail_id: '787463-MLU70102441019_062023',
    catalog_product_id: 'MLC24107939',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/controlador-dj-hercules-djcontrol-inpulse-300-mk2-negro-color-negro/p/MLC24107939',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-DJ_CONTROLLERS',
    thumbnail: 'https://http2.mlstatic.com/D_787463-MLU70102441019_062023-I.jpg',
    currency_id: 'CLP',
    order_backend: 42,
    price: 190086,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'self_service_out',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-08-24T04:00:00.000Z',
    seller: {
      id: 20563946,
      nickname: 'ALVAROAMAR'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '7397998',
        value_name: 'Hercules',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '7397998',
            name: 'Hercules',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6808261514773724
          }
        ],
        source: 6808261514773724,
        value_type: 'list'
      },
      {
        id: 'LENGTH',
        name: 'Largo',
        value_id: '8040126',
        value_name: '286 mm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 286,
          unit: 'mm'
        },
        values: [
          {
            id: '8040126',
            name: '286 mm',
            struct: {
              unit: 'mm',
              number: 286
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '8120018',
        value_name: 'DJControl',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '8120018',
            name: 'DJControl',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '20338856',
        value_name: 'Inpulse 300 MK2',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '20338856',
            name: 'Inpulse 300 MK2',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '55.8 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 55.8,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '55.8 cm',
            struct: {
              unit: 'cm',
              number: 55.8
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '2960 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 2960,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '2960 g',
            struct: {
              unit: 'g',
              number: 2960
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '7674520',
        value_name: '1.8 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 1.8,
          unit: 'kg'
        },
        values: [
          {
            id: '7674520',
            name: '1.8 kg',
            struct: {
              number: 1.8,
              unit: 'kg'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 31681,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'EZJP77468'
  },
  {
    id: 'MLC1441102321',
    title: 'Pedal De Efecto Nux Mg Modeling Guitar Processor Mg-300 Negro',
    condition: 'new',
    thumbnail_id: '680160-MLA47873401499_102021',
    catalog_product_id: 'MLC17366238',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/pedal-de-efecto-nux-mg-modeling-guitar-processor-mg-300-negro/p/MLC17366238',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-EFFECTS_PEDALS',
    thumbnail: 'https://http2.mlstatic.com/D_680160-MLA47873401499_102021-I.jpg',
    currency_id: 'CLP',
    order_backend: 43,
    price: 159900,
    original_price: null,
    sale_price: null,
    available_quantity: 150,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'self_service_in',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-11-11T04:00:00.000Z',
    seller: {
      id: 188425656,
      nickname: 'UKELELE_MUSIC'
    },
    attributes: [
      {
        id: 'ALPHANUMERIC_MODEL',
        name: 'Modelo alfanumérico',
        value_id: '11414147',
        value_name: 'MG-300',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '11414147',
            name: 'MG-300',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '2645595',
        value_name: 'NUX',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2645595',
            name: 'NUX',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 2860837171021627
          }
        ],
        source: 2860837171021627,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '26151508',
        value_name: 'mg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '26151508',
            name: 'mg',
            struct: null,
            source: 4709228965570453
          }
        ],
        source: 4709228965570453,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '10203320',
        value_name: 'Modeling Guitar Processor',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '10203320',
            name: 'Modeling Guitar Processor',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '9924604',
        value_name: '754 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 754,
          unit: 'g'
        },
        values: [
          {
            id: '9924604',
            name: '754 g',
            struct: {
              number: 754,
              unit: 'g'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 26650,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1394983839',
    title: 'Cable Plug Adaptador 3,5 A 6,35 Alargador Audífonos Nylon',
    condition: 'new',
    thumbnail_id: '686971-MLU72566097422_112023',
    catalog_product_id: 'MLC23528439',
    listing_type_id: 'gold_pro',
    permalink: 'https://www.mercadolibre.cl/cable-plug-adaptador-35-a-635-alargador-audifonos-nylon/p/MLC23528439',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-AUDIO_AND_VIDEO_CABLES_AND_ADAPTERS',
    thumbnail: 'https://http2.mlstatic.com/D_686971-MLU72566097422_112023-I.jpg',
    currency_id: 'CLP',
    order_backend: 44,
    price: 4990,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-06-15T04:00:00.000Z',
    seller: {
      id: 242601506,
      nickname: 'OVMI76495'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '13654866',
        value_name: 'Generica Alt',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '13654866',
            name: 'Generica Alt',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'CABLE_LENGTH',
        name: 'Largo del cable',
        value_id: '570734',
        value_name: '15 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 15,
          unit: 'cm'
        },
        values: [
          {
            id: '570734',
            name: '15 cm',
            struct: {
              number: 15,
              unit: 'cm'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'INPUT_CONNECTOR_GENDER',
        name: 'Género del conector de entrada',
        value_id: '6116080',
        value_name: 'Hembra',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '6116080',
            name: 'Hembra',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '19482656',
        value_name: 'Cable Plug 3.5 mm a 6.3 mm Estéreo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '19482656',
            name: 'Cable Plug 3.5 mm a 6.3 mm Estéreo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'OUTPUT_CONNECTOR_GENDER',
        name: 'Género del conector de salida',
        value_id: '6116086',
        value_name: 'Macho',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '6116086',
            name: 'Macho',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '15.2 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 15.2,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '15.2 cm',
            struct: {
              unit: 'cm',
              number: 15.2
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '20 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 20,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '20 g',
            struct: {
              number: 20,
              unit: 'g'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'SALE_FORMAT',
        name: 'Formato de venta',
        value_id: '1359391',
        value_name: 'Unidad',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '1359391',
            name: 'Unidad',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'UNITS_PER_PACK',
        name: 'Unidades por pack',
        value_id: '2726554',
        value_name: '1',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2726554',
            name: '1',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'number'
      }
    ],
    installments: {
      quantity: 12,
      amount: 415.83,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    differential_pricing: {
      id: 33613181
    },
    inventory_id: 'ITND88911'
  },
  {
    id: 'MLC1417169607',
    title: 'Guitarra Sevillana 8456 Clásica 30 Blanca Con Funda Para Niños',
    condition: 'new',
    thumbnail_id: '886067-MLU70665274229_072023',
    catalog_product_id: 'MLC24865069',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/guitarra-sevillana-8456-clasica-30-blanca-con-funda-para-ninos/p/MLC24865069',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-ACOUSTIC_GUITARS',
    thumbnail: 'https://http2.mlstatic.com/D_886067-MLU70665274229_072023-I.jpg',
    currency_id: 'CLP',
    order_backend: 45,
    price: 37590,
    original_price: 39990,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
        'self_service_in',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-08-20T04:00:00.000Z',
    seller: {
      id: 617788866,
      nickname: 'VIZMARK S.P.A.'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '10400840',
        value_name: 'Sevillana',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '10400840',
            name: 'Sevillana',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6808261514773724
          }
        ],
        source: 6808261514773724,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '21374020',
        value_name: '230SEV08456',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '21374020',
            name: '230SEV08456',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      }
    ],
    installments: {
      quantity: 6,
      amount: 6265,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: null
  },
  {
    id: 'MLC1864142890',
    title: 'Soporte Para Micrófono Atril Con Boom Profesional Pedestal Color Negro',
    condition: 'new',
    thumbnail_id: '935510-MLU70810723095_082023',
    catalog_product_id: 'MLC25552207',
    listing_type_id: 'gold_pro',
    permalink: 'https://www.mercadolibre.cl/soporte-para-microfono-atril-con-boom-profesional-pedestal-color-negro/p/MLC25552207',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-MICROPHONES',
    thumbnail: 'https://http2.mlstatic.com/D_935510-MLU70810723095_082023-I.jpg',
    currency_id: 'CLP',
    order_backend: 46,
    price: 10028,
    original_price: null,
    sale_price: null,
    available_quantity: 500,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'cross_docking',
      mode: 'me2',
      tags: [
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-08-03T04:00:00.000Z',
    seller: {
      id: 437693890,
      nickname: 'MERE5897304'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '18502032',
        value_name: 'Eyna',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '18502032',
            name: 'Eyna',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'CABLE_LENGTH',
        name: 'Largo del cable',
        value_id: '11300532',
        value_name: '0 m',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 0,
          unit: 'm'
        },
        values: [
          {
            id: '11300532',
            name: '0 m',
            struct: {
              number: 0,
              unit: 'm'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '4533007',
        value_name: 'Atril',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '4533007',
            name: 'Atril',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      }
    ],
    installments: {
      quantity: 12,
      amount: 835.67,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    differential_pricing: {
      id: 33613181
    },
    inventory_id: null
  },
  {
    id: 'MLC1277682430',
    title: ' Puntero Laser Verde Astronomico Bateria 1000mw ',
    condition: 'new',
    thumbnail_id: '654473-MLC71145488763_082023',
    catalog_product_id: null,
    listing_type_id: 'gold_special',
    permalink: 'https://articulo.mercadolibre.cl/MLC-1277682430-puntero-laser-verde-astronomico-bateria-1000mw-_JM',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-STAGE_LASER_LIGHTS',
    thumbnail: 'https://http2.mlstatic.com/D_654473-MLC71145488763_082023-I.jpg',
    currency_id: 'CLP',
    order_backend: 47,
    price: 5490,
    original_price: null,
    sale_price: null,
    available_quantity: 150,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'self_service_in'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-01-04T04:00:00.000Z',
    seller: {
      id: 264602405,
      nickname: 'FACTORYNETCL'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '276243',
        value_name: 'Genérica',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '276243',
            name: 'Genérica',
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'list'
      },
      {
        id: 'LASER_POWER',
        name: 'Potencia del láser',
        value_id: null,
        value_name: '1000 W',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 1000,
          unit: 'W'
        },
        values: [
          {
            id: null,
            name: '1000 W',
            struct: {
              unit: 'W',
              number: 1000
            },
            source: 7571550481372610
          }
        ],
        source: 7571550481372610,
        value_type: 'number_unit'
      },
      {
        id: 'LENGTH',
        name: 'Largo',
        value_id: '-1',
        value_name: null,
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '-1',
            name: null,
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'number_unit'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: null,
        value_name: 'Laser Verde',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: null,
            name: 'Laser Verde',
            struct: null,
            source: 7571550481372610
          }
        ],
        source: 7571550481372610,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '10.8 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 10.8,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '10.8 cm',
            struct: {
              number: 10.8,
              unit: 'cm'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '260 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 260,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '260 g',
            struct: {
              number: 260,
              unit: 'g'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'RATED_POWER',
        name: 'Potencia nominal',
        value_id: '-1',
        value_name: null,
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '-1',
            name: null,
            struct: null,
            source: 7571550481372610
          }
        ],
        source: 7571550481372610,
        value_type: 'number_unit'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '-1',
        value_name: null,
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '-1',
            name: null,
            struct: null,
            source: 7571550481372610
          }
        ],
        source: 7571550481372610,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 915,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: false,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'VLUC78867'
  },
  {
    id: 'MLC1450161837',
    title: 'Pad De Practica P/pierna Guitto Gdp-01',
    condition: 'new',
    thumbnail_id: '867202-MLU72978710487_112023',
    catalog_product_id: 'MLC28232726',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/pad-de-practica-ppierna-guitto-gdp-01/p/MLC28232726',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-DRUM_PRACTICE_PADS',
    thumbnail: 'https://http2.mlstatic.com/D_867202-MLU72978710487_112023-I.jpg',
    currency_id: 'CLP',
    order_backend: 48,
    price: 14710,
    original_price: 15990,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: false,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-12-17T04:00:00.000Z',
    seller: {
      id: 1273230464,
      nickname: 'JOYOAUDIOCHILE'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '22680049',
        value_name: 'Guitto',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '22680049',
            name: 'Guitto',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'list'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '26311328',
        value_name: 'GDP-01',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '26311328',
            name: 'GDP-01',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '15.2 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 15.2,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '15.2 cm',
            struct: {
              number: 15.2,
              unit: 'cm'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '400 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 400,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '400 g',
            struct: {
              number: 400,
              unit: 'g'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '-1',
        value_name: null,
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '-1',
            name: null,
            struct: null,
            source: 3045741222775799
          }
        ],
        source: 3045741222775799,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 2451.67,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'DGDP79715'
  },
  {
    id: 'MLC1803531382',
    title: 'Teclado Musical 61 Teclas Ibrah Piano + Funda + Atril Teclado Profesional Ritmos Tonos',
    condition: 'new',
    thumbnail_id: '858317-MLU73125410742_122023',
    catalog_product_id: 'MLC24542197',
    listing_type_id: 'gold_special',
    permalink: 'https://www.mercadolibre.cl/teclado-musical-61-teclas-ibrah-piano-funda-atril-teclado-profesional-ritmos-tonos/p/MLC24542197',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-MUSICAL_KEYBOARDS',
    thumbnail: 'https://http2.mlstatic.com/D_858317-MLU73125410742_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 49,
    price: 108190,
    original_price: 109990,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'fulfillment',
      mode: 'me2',
      tags: [
        'fulfillment',
        'self_service_in',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-07-11T04:00:00.000Z',
    seller: {
      id: 613899966,
      nickname: 'CHILE TENDENCIA'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '20893636',
        value_name: 'Ibrah Music',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '20893636',
            name: 'Ibrah Music',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'DETAILED_MODEL',
        name: 'Modelo detallado',
        value_id: '20893642',
        value_name: 'IB2800',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '20893642',
            name: 'IB2800',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 699147714295090
          }
        ],
        source: 699147714295090,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '19728',
        value_name: 'Profesional',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '19728',
            name: 'Profesional',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '20893637',
        value_name: 'IB2800',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '20893637',
            name: 'IB2800',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '1125599',
        value_name: '5 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 5,
          unit: 'kg'
        },
        values: [
          {
            id: '1125599',
            name: '5 kg',
            struct: {
              number: 5,
              unit: 'kg'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 6,
      amount: 18031.67,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    inventory_id: 'MWTP39233'
  },
  {
    id: 'MLC1992065312',
    title: 'Edifier Mr4 Monitores Referencia Estudio Dual Trs Balanceado',
    condition: 'new',
    thumbnail_id: '835968-MLU73212574261_122023',
    catalog_product_id: 'MLC24596600',
    listing_type_id: 'gold_pro',
    permalink: 'https://www.mercadolibre.cl/edifier-mr4-monitores-referencia-estudio-dual-trs-balanceado/p/MLC24596600',
    buying_mode: 'buy_it_now',
    site_id: 'MLC',
    category_id: 'MLC1182',
    domain_id: 'MLC-STUDIO_MONITORS',
    thumbnail: 'https://http2.mlstatic.com/D_835968-MLU73212574261_122023-I.jpg',
    currency_id: 'CLP',
    order_backend: 50,
    price: 106640,
    original_price: null,
    sale_price: null,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: true,
    shipping: {
      store_pick_up: false,
      free_shipping: true,
      logistic_type: 'xd_drop_off',
      mode: 'me2',
      tags: [
        'fbm_in_process',
        'mandatory_free_shipping'
      ],
      benefits: null,
      promise: null
    },
    stop_time: '2043-09-10T04:00:00.000Z',
    seller: {
      id: 158291322,
      nickname: 'STADIO CHILE'
    },
    attributes: [
      {
        id: 'BRAND',
        name: 'Marca',
        value_id: '15898',
        value_name: 'Edifier',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '15898',
            name: 'Edifier',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 6808261514773724
          }
        ],
        source: 6808261514773724,
        value_type: 'list'
      },
      {
        id: 'LINE',
        name: 'Línea',
        value_id: '22338096',
        value_name: 'Studio Monitor',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '22338096',
            name: 'Studio Monitor',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: '2586484',
        value_name: 'MR4',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2586484',
            name: 'MR4',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'string'
      },
      {
        id: 'PACKAGE_LENGTH',
        name: 'Largo del paquete',
        value_id: null,
        value_name: '31.2 cm',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 31.2,
          unit: 'cm'
        },
        values: [
          {
            id: null,
            name: '31.2 cm',
            struct: {
              unit: 'cm',
              number: 31.2
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'PACKAGE_WEIGHT',
        name: 'Peso del paquete',
        value_id: null,
        value_name: '5140 g',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 5140,
          unit: 'g'
        },
        values: [
          {
            id: null,
            name: '5140 g',
            struct: {
              number: 5140,
              unit: 'g'
            },
            source: 4333789534002961
          }
        ],
        source: 4333789534002961,
        value_type: 'number_unit'
      },
      {
        id: 'POWER',
        name: 'Potencia',
        value_id: '5719332',
        value_name: '42 W',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 42,
          unit: 'W'
        },
        values: [
          {
            id: '5719332',
            name: '42 W',
            struct: {
              number: 42,
              unit: 'W'
            },
            source: 1
          }
        ],
        source: 1,
        value_type: 'number_unit'
      },
      {
        id: 'WEIGHT',
        name: 'Peso',
        value_id: '9934681',
        value_name: '4.5 kg',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: {
          number: 4.5,
          unit: 'kg'
        },
        values: [
          {
            id: '9934681',
            name: '4.5 kg',
            struct: {
              number: 4.5,
              unit: 'kg'
            },
            source: 1183438784296846
          }
        ],
        source: 1183438784296846,
        value_type: 'number_unit'
      }
    ],
    installments: {
      quantity: 12,
      amount: 8886.67,
      rate: 0,
      currency_id: 'CLP'
    },
    winner_item_id: null,
    catalog_listing: true,
    discounts: null,
    promotions: [
    ],
    differential_pricing: {
      id: 33613181
    },
    inventory_id: 'DGVV45227'
  }
]

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {  
      resolve(ShuffleArray(products))
    }, 250)
  })
}

const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(p => p.id == productId))
    }, 250)
  })
}

const getProductsByCategoryId = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = products.filter(p => p.category_id == categoryId)
      resolve(data)
    }, 250)
  })
}

export { getProducts, getProductsById, getProductsByCategoryId }