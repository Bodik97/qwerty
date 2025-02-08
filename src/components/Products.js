import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Категорії товарів
  const productsSections = [
    {
      id: 'pneumatic-rifles', // ID для цього типу товарів
      title: 'Пневматичні гвинтівки',
      products: [
        {
          id: 1,
          title: 'B1-4P',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 2999,
          oldPrice: 4500,
          images: [
          
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404500/1/cwauj5qrq6jrpuowogrc.jpg',  // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404501/1/foc42dxhfalipcmv7ho4.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404501/1/e1vpxl1bzhb4mnpknwtg.jpg',// Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404501/1/xuvmczf9115dj3wdsdyp.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404501/1/vwe0wfsqqejgczbbfpas.jpg'
          ],
          characteristics: [
            '🔸Тип - переломка',
            '🔸Загальна довжина, 990см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 2.5 кг',
            '🔸Вихлоп - 370 м/с',
            '🔸Потужність 21 Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        {
          id: 2,
          title: 'Beeman Black Bear',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 4999,
          oldPrice: 6700,
          images: [
               
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404554/2/d8b2ft2tghsuhkjlkdvx.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404554/2/tw7oidxan41wi6cu8hbv.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404554/2/qf0gffk2w3z6nc7soc33.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404554/2/d0sffcevzifgzhkz5hfu.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404553/2/y7narrrtav436p2rce6j.jpg'
          ],
          characteristics: [
            '🔸Тип - переломка',
            '🔸Загальна довжина, 1165см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Виробник – США ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 2.9 кг',
            '🔸Вихлоп - 350 м/с',
            '🔸Потужність 25 Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer:[ '🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        {
          id: 3,
          title: 'Beeman Longhorn',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 6499,
          oldPrice: 8200,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404644/Beeman%20Longhorn/zrgkfxu7xshglntndswe.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404645/Beeman%20Longhorn/oxqqcubms5osqzmmpatw.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404644/Beeman%20Longhorn/ynsdds7rowowrj0jibhq.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404644/Beeman%20Longhorn/li6rio0d7rtkhvosohtk.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404643/Beeman%20Longhorn/q4tgnbyysdi60e7hqe3p.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404643/Beeman%20Longhorn/ppbh8tlittos1obd8m8c.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404643/Beeman%20Longhorn/evjlfavkhji6axt1srwu.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404643/Beeman%20Longhorn/hjgtfhxwgnxnr2cpwyb0.jpg'
          ],
          characteristics: [
            '🔸Тип - переломка',
            '🔸Загальна довжина - 1167см ',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 3.17 кг',
            '🔸Вихлоп - 380 м/с',
            '🔸Потужність 26 Дж',
          ],
          pushOffer: [
          '🔸Набір для читски - 450 грн ( рекомендуємо)',
          '🔸Доп. мастило - 350 грн',
          '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
          '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
          '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
          '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
          ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
          
        },
        {
          id: 4,
          title: 'Beeman Teton',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 6499,
          oldPrice: 7880,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404668/Beeman%20Teton/i71fa0fmgjhyyepsuhbm.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404669/Beeman%20Teton/ywsbixeat1bcsty9asoj.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404669/Beeman%20Teton/ghylrskqxphxkf46xasm.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404669/Beeman%20Teton/ojgn15bgf5e6ghk04wmn.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404670/Beeman%20Teton/xvzqislc7gnmqrenojsh.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404668/Beeman%20Teton/fajp9wihoampmghtw68u.jpg'
            
          ],
          characteristics: [
            '🔸Тип - переломка',
            '🔸Загальна довжина, 1160см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 3.85 мм',
            '🔸Вага – 3.85 кг',
            '🔸Вихлоп - 370 м/с',
            '🔸Потужність 26 Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        {
          id: 5,
          title: 'Beeman Wolverine',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 5999,
          oldPrice: 7500,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404695/Beeman%20Wolverine/edzadzgfiyqesac4rghr.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404696/Beeman%20Wolverine/upfdu2j1np9y7c8hynmv.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404696/Beeman%20Wolverine/i1w6cyf8y6h1pamnujwh.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404695/Beeman%20Wolverine/n0n8csitbxffpn9jtj4q.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404695/Beeman%20Wolverine/p9eji4zrzhrzkjucngom.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404694/Beeman%20Wolverine/wa81unwhudnvuhvzfm7c.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404694/Beeman%20Wolverine/wzfs5rudif1gzlu8uocw.jpg'
          ],
          characteristics: [
            '🔸Тип - переломка',
            '🔸Виробник – США ',
            '🔸Загальна довжина, 1160см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 3.85 кг',
            '🔸Вихлоп - 350 м/с',
            '🔸Потужність 25 Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        {
          id: 6,
          title: 'HATSAN 125',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 10500,
          oldPrice: 13800,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404721/HATSAN%20125/xkjfjumfjamq6homgesh.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404720/HATSAN%20125/iclv1olxf8jtzhbgjlll.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404720/HATSAN%20125/lxoc8kvkg8fn8vdnliwj.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404720/HATSAN%20125/d4fap3tzrdfbxwupiklr.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404719/HATSAN%20125/nejudgbk4ejruw0oyucw.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404722/HATSAN%20125/dnjodcpf5earpmlah8kd.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404721/HATSAN%20125/ueoujffsksmwko22u7f4.jpg'
          ],
          characteristics: [
            '🔸Тип - переломка',
            '🔸Виробник – США ',
            '🔸Загальна довжина, 1205см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 3.65 кг',
            '🔸Вихлоп - 410 м/с',
            '🔸Потужність 28 Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        {
          id: 7,
          title: 'Hatsan Air Tact',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 5999,
          oldPrice: 8000,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404754/Hatsan%20Air%20Tact/mwuirqmtv4qwtunskcvr.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404754/Hatsan%20Air%20Tact/z6gxn7s3fde9nx2iva48.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404755/Hatsan%20Air%20Tact/czvgzfwu8ak31rftlgae.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404753/Hatsan%20Air%20Tact/vaqc3bgyvrh2yc88nkqy.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404752/Hatsan%20Air%20Tact/mnalcqzyw8fndswfki2d.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404752/Hatsan%20Air%20Tact/t3gnxevtmrwbz88tdaep.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404752/Hatsan%20Air%20Tact/avkrkdtwqium6qy0inbu.jpg'
          ],
          characteristics: [
            '🔸Тип - переломка',
            '🔸Виробник – США ',
            '🔸Загальна довжина, 1135см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 3.0 кг',
            '🔸Вихлоп - 370  м/с',
            '🔸Потужність 25  Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        {
          id: 8,
          title: 'SPA GU1200S БАНЕР НОВИНКА',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 4999,
          oldPrice: 7300,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738493045/SPA%20GU1200S%20%D0%91%D0%90%D0%9D%D0%95%D0%A0%20%D0%9D%D0%9E%D0%92%D0%98%D0%9D%D0%9A%D0%90/dfjwtuw24fjn7fjejjxw.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738493045/SPA%20GU1200S%20%D0%91%D0%90%D0%9D%D0%95%D0%A0%20%D0%9D%D0%9E%D0%92%D0%98%D0%9D%D0%9A%D0%90/os7r1pv8bzqaufqw74um.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738493045/SPA%20GU1200S%20%D0%91%D0%90%D0%9D%D0%95%D0%A0%20%D0%9D%D0%9E%D0%92%D0%98%D0%9D%D0%9A%D0%90/fvvsoq8mo87el030araz.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738493046/SPA%20GU1200S%20%D0%91%D0%90%D0%9D%D0%95%D0%A0%20%D0%9D%D0%9E%D0%92%D0%98%D0%9D%D0%9A%D0%90/bbbki28rkpr74uxv8gyp.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738493046/SPA%20GU1200S%20%D0%91%D0%90%D0%9D%D0%95%D0%A0%20%D0%9D%D0%9E%D0%92%D0%98%D0%9D%D0%9A%D0%90/j8ombbkjr0derwdaldjx.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738493046/SPA%20GU1200S%20%D0%91%D0%90%D0%9D%D0%95%D0%A0%20%D0%9D%D0%9E%D0%92%D0%98%D0%9D%D0%9A%D0%90/wi0xh236ezv7dlvpshbg.jpg'
          ],
          characteristics: [
            '🔸Тип – ГАЗ ПРУЖИНА',
            '🔸Виробник – США ',
            '🔸Загальна довжина, 1150см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 2.79 кг',
            '🔸Вихлоп - 320  м/с',
            '🔸Потужність 23  Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        {
          id: 9,
          title: 'WF600P',
          description: '🔸Приціл - Прицельная планка і мушка з фібероптичними нитями',
          price: 3499,
          oldPrice: 6150,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404795/WF600P/mauhkshcppdy8kvmypvb.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404794/WF600P/r3zlvyaazel143w9ycst.jpg', // Друге зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404794/WF600P/ivqbufsui1ftmzs3phqy.jpg', // Третє зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404793/WF600P/fm0fougwrftzshj7khqv.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404796/WF600P/aqoxuectql1sldiprgo5.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404796/WF600P/kyb3nmvz8o0vt2zbz3tp.jpg',
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404796/WF600P/slkmoj5vkrczdtj6uyzd.jpg'
          ],
          characteristics: [
            '🔸Тип - Підствольний важіль',
            '🔸Виробник – США ',
            '🔸Загальна довжина, 1025см',
            '🔸СТВОЛ - НАРІЗНИЙ',
            '🔸Калібр, мм 4.5 мм',
            '🔸Вага – 3.0 кг',
            '🔸Вихлоп - 280  м/с',
            '🔸Потужність 21 Дж',
          ],
          pushOffer: [
            '🔸Набір для читски - 450 грн ( рекомендуємо)',
            '🔸Доп. мастило - 350 грн',
            '🔸Оптичний приціл - 1000 грн ( 4х28 ) / 2000 грн ( 4х32 с кріпленням) / 2500 грн ( 3-9x40 з кріпленням) ',
            '🔸Чехол - 600 ( Колір на вибір чорний/камуфляж )(Нейлон))',
            '🔸Кулі 400 шт , - 300грн ( вага на вибір від 0.4 до 0.75) ',
            '🔸УСТАНОВКА ГАЗ ПРУЖИНИ - 1000 ГРН '
            ],
          specialOffer: ['🔸Гарантія 6 місяців ( вона є абсолютно легальна , дозволів не потребує )',
          ]
        },
        // Інші товари...
      ],
    },
    {
      id: 'cold-guns',
      title: 'Охолоджені пістолети',
      products: [
        {
          id: 2,
          title: 'Пістолет Cold 1',
          description: 'Детальний опис пістолета...',
          price: 5150,
          oldPrice: 6900,
          images: [
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404645/Beeman%20Longhorn/cold_pistol_1.jpg', // Перше зображення
            'https://res.cloudinary.com/da27wfewm/image/upload/v1738404645/Beeman%20Longhorn/cold_pistol_2.jpg', // Друге зображення
          ],
          characteristics: [
            'Калібр 4,5 мм',
            'Магазин на 30 куль',
          ],
          specialOffer: 'Отримайте подарунок при покупці!',
        },
        // Інші товари...
      ],
    },
    // Інші категорії товарів...
  ];

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'; // Запобігаємо прокручуванню сторінки
    } else {
      document.body.style.overflow = 'auto'; // Відновлюємо прокручування
    }
    return () => {
      document.body.style.overflow = 'auto'; // Відновлюємо прокручування при розмонтуванні компонента
    };
  }, [selectedProduct]);

  return (
    <div>
      {productsSections.map((section) => (
        <div key={section.id} id={section.id} className="py-8">
          <h3 className="text-7xl font-normal text-center mb-6">{section.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {section.products.map((product) => (
              <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg">
                <img
                  src={product.images[0]} // Відображаємо основне зображення товару
                  alt={product.title}
                  className="w-full h-[300px] object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-center mb-2">{product.title}</h3>
                <p className="text-gray-600 text-center mb-4">{product.description}</p>
                <div className="flex justify-center items-center space-x-3 mb-4">
                  <span className="text-3xl font-bold text-red-600">{product.price} грн</span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-500 line-through">{product.oldPrice} грн</span>
                  )}
                </div>
                <button
                  onClick={() => handleShowDetails(product)}
                  className="bg-slate-950 text-white py-2 px-6 rounded-lg transition-transform duration-200 hover:scale-105"
                >
                  Детальніше
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Модальне вікно для детальної інформації */}
      {selectedProduct && (
  <div
    onClick={handleCloseModal} // Закриваємо модальне вікно при натисканні на фон
    className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
  >
    <div
      onClick={(e) => e.stopPropagation()} // Зупиняємо подію кліку на самому модальному вікні
      className="bg-slate-400 rounded-lg shadow-lg p-8 w-full h-full relative overflow-auto" // Повноекранне модальне вікно
    >
      {/* Кнопка закриття */}
      <button
        onClick={handleCloseModal}
        className="absolute top-6 right-6 bg-white text-black border border-gray-300 px-4 py-2 rounded-full text-3xl font-semibold transform hover:scale-110 transition-all duration-300 ease-in-out"
      >
        ×
      </button>

      {/* Передаємо дані в ProductCard */}
      <ProductCard {...selectedProduct} />
    </div>
  </div>
)}

    </div>
  );
};

export default Products;
