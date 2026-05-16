import React from 'react'

export default function KyrgyzstanRegionsSite() {
  const [selectedRegion, setSelectedRegion] = React.useState(null)
  const [selectedDistrict, setSelectedDistrict] = React.useState(null)
  const regions = [
    {
      name: 'Бишкек',
      oblast: 'Город республиканского значения',
      population: '≈ 1.1 млн',
      description: 'Столица Кыргызстана и крупнейший город страны.',
      color: 'from-blue-500 to-cyan-400',
      districts: [
        {
          name: 'Ленинский район',
          population: '≈ 250 тыс',
          info: 'Один из крупнейших районов Бишкека с жилыми кварталами и торговыми центрами.'
        },
        {
          name: 'Октябрьский район',
          population: '≈ 220 тыс',
          info: 'Современный район Бишкека с новыми жилыми комплексами.'
        },
        {
          name: 'Первомайский район',
          population: '≈ 210 тыс',
          info: 'Центральная часть столицы с административными зданиями.'
        },
        {
          name: 'Свердловский район',
          population: '≈ 230 тыс',
          info: 'Район с промышленными и жилыми зонами.'
        }
      ]
    },
    {
      name: 'Ош',
      oblast: 'Ошская область',
      population: '≈ 350 тыс',
      description: 'Один из древнейших городов Центральной Азии.',
      color: 'from-red-500 to-orange-400',
      districts: [
        {
          name: 'Араванский район',
          population: '≈ 130 тыс',
          info: 'Аграрный район Ошской области с развитым сельским хозяйством.'
        },
        {
          name: 'Кара-Суйский район',
          population: '≈ 400 тыс',
          info: 'Один из самых населённых районов юга Кыргызстана.'
        },
        {
          name: 'Ноокатский район',
          population: '≈ 250 тыс',
          info: 'Горный район с красивыми природными ландшафтами.'
        },
        {
          name: 'Узгенский район',
          population: '≈ 230 тыс',
          info: 'Исторический район с древними памятниками.'
        },
        {
          name: 'Чон-Алайский район',
          population: '≈ 30 тыс',
          info: 'Высокогорный район рядом с Памиром.'
        }
      ]
    },
    {
      name: 'Чуйская область',
      oblast: 'Север Кыргызстана',
      population: '≈ 1 млн',
      description: 'Экономически важный регион с плодородными землями.',
      color: 'from-green-500 to-emerald-400',
      districts: [
        {
          name: 'Сокулукский район',
          population: '≈ 300 тыс',
          info: 'Район рядом с Бишкеком с развитой инфраструктурой.'
        },
        {
          name: 'Аламудунский район',
          population: '≈ 200 тыс',
          info: 'Известен природой и близостью к столице.'
        },
        {
          name: 'Ысык-Атинский район',
          population: '≈ 180 тыс',
          info: 'Популярен своими горячими источниками.'
        },
        {
          name: 'Жайылский район',
          population: '≈ 120 тыс',
          info: 'Промышленный и сельскохозяйственный район.'
        },
        {
          name: 'Кеминский район',
          population: '≈ 50 тыс',
          info: 'Горный район с красивыми ущельями.'
        }
      ]
    },
    {
      name: 'Иссык-Кульская область',
      oblast: 'Восток Кыргызстана',
      population: '≈ 500 тыс',
      description: 'Известна озером Иссык-Куль и туризмом.',
      color: 'from-sky-500 to-blue-400',
      districts: [
        {
          name: 'Каракол',
          population: '≈ 80 тыс',
          info: 'Каракол — административный центр Иссык-Кульской области. Известен туризмом, природой и горнолыжными курортами.'
        },
        {
          name: 'Чолпон-Ата',
          population: '≈ 15 тыс',
          info: 'Чолпон-Ата — популярный курортный город на берегу Иссык-Куля.'
        },
        {
          name: 'Балыкчы',
          population: '≈ 50 тыс',
          info: 'Балыкчы — важный транспортный узел у озера Иссык-Куль.'
        }
      ]
    },
    {
      name: 'Нарынская область',
      oblast: 'Центральный Кыргызстан',
      population: '≈ 300 тыс',
      description: 'Горный регион с красивой природой.',
      color: 'from-gray-500 to-slate-400',
      districts: [
        {
          name: 'Ат-Башинский район',
          population: '≈ 55 тыс',
          info: 'Высокогорный район рядом с Китаем.'
        },
        {
          name: 'Кочкорский район',
          population: '≈ 70 тыс',
          info: 'Известен традиционным кыргызским ремеслом.'
        },
        {
          name: 'Жумгальский район',
          population: '≈ 45 тыс',
          info: 'Район с суровым климатом и красивыми пастбищами.'
        },
        {
          name: 'Ак-Талинский район',
          population: '≈ 40 тыс',
          info: 'Один из самых холодных районов Кыргызстана.'
        }
      ]
    },
    {
      name: 'Таласская область',
      oblast: 'Северо-запад Кыргызстана',
      population: '≈ 280 тыс',
      description: 'Родина эпоса Манас.',
      color: 'from-yellow-500 to-amber-400',
      districts: [
        {
          name: 'Бакай-Атинский район',
          population: '≈ 50 тыс',
          info: 'Сельскохозяйственный район Таласской области.'
        },
        {
          name: 'Кара-Бууринский район',
          population: '≈ 65 тыс',
          info: 'Горный район с красивой природой.'
        },
        {
          name: 'Манасский район',
          population: '≈ 35 тыс',
          info: 'Назван в честь героя эпоса Манас.'
        }
      ]
    },
    {
      name: 'Джалал-Абадская область',
      oblast: 'Юго-запад Кыргызстана',
      population: '≈ 1.3 млн',
      description: 'Один из крупнейших регионов страны.',
      color: 'from-lime-500 to-green-400',
      districts: [
        {
          name: 'Сузакский район',
          population: '≈ 300 тыс',
          info: 'Крупный район рядом с городом Джалал-Абад.'
        },
        {
          name: 'Базар-Коргонский район',
          population: '≈ 250 тыс',
          info: 'Известен сельским хозяйством и садами.'
        },
        {
          name: 'Токтогульский район',
          population: '≈ 100 тыс',
          info: 'Известен Токтогульским водохранилищем.'
        },
        {
          name: 'Аксыйский район',
          population: '≈ 130 тыс',
          info: 'Горный район с красивыми ущельями.'
        }
      ]
    },
    {
      name: 'Баткенская область',
      oblast: 'Юго-запад Кыргызстана',
      population: '≈ 600 тыс',
      description: 'Регион с уникальной природой и горами.',
      color: 'from-purple-500 to-pink-400',
      districts: [
        {
          name: 'Лейлекский район',
          population: '≈ 140 тыс',
          info: 'Район на границе с Таджикистаном.'
        },
        {
          name: 'Кадамжайский район',
          population: '≈ 200 тыс',
          info: 'Известен месторождениями полезных ископаемых.'
        },
        {
          name: 'Баткенский район',
          population: '≈ 120 тыс',
          info: 'Центральный район Баткенской области.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">Районы и области Кыргызстана</h1>
          <p className="text-slate-300 text-lg">
            Информация о регионах Кыргызстана, населении и особенностях.
          </p>
        </div>

        {!selectedRegion ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className={`h-3 bg-gradient-to-r ${region.color}`} />

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{region.name}</h2>

                  <div className="space-y-2 text-slate-300">
                    <p>
                      <span className="font-semibold text-white">Область:</span>{' '}
                      {region.oblast}
                    </p>

                    <p>
                      <span className="font-semibold text-white">Население:</span>{' '}
                      {region.population}
                    </p>
                  </div>

                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {region.description}
                  </p>

                  <button
                    onClick={() => {
                      setSelectedRegion(region)
                      setSelectedDistrict(null)
                    }}
                    className="mt-6 w-full py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Открыть районы
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setSelectedRegion(null)
                setSelectedDistrict(null)
              }}
              className="mb-6 px-5 py-3 bg-white text-slate-900 rounded-2xl font-semibold"
            >
              ← Назад
            </button>

            <h2 className="text-4xl font-bold mb-8">{selectedRegion.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedRegion.districts?.map((district, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-3xl p-6 shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-3">{district.name}</h3>

                  <p className="text-slate-300 mb-4">
                    <span className="font-semibold text-white">Население:</span>{' '}
                    {district.population}
                  </p>

                  <button
                    onClick={() => setSelectedDistrict(district)}
                    className="px-5 py-3 bg-white text-slate-900 rounded-2xl font-semibold"
                  >
                    Подробнее
                  </button>
                </div>
              ))}
            </div>

            {selectedDistrict && (
              <div className="mt-10 bg-slate-800 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">{selectedDistrict.name}</h3>

                <p className="text-slate-300 text-lg leading-relaxed">
                  {selectedDistrict.info}
                </p>
              </div>
            )}
          </div>
        )}

        <footer className="mt-12 text-center text-slate-400">
          <p>Сайт о Кыргызстане • 2026</p>
        </footer>
      </div>
    </div>
  )
}
