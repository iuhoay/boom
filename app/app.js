new Vue({
  el: '#app',
  data: {
    title: '暴暴 (boom)',
    dog: {
      name: '暴暴',
      avatar: 'asserts/images/dog.png',
      birthday: '2016-02-07',
      weights: [
        {
          date: '2016-06-04',
          weight: '5',
        }
      ]
    },
    dry_foods: [
      {
        name: '宝路',
        review: '不推荐',
        describe: '打死也不让暴暴吃宝路了，拉屎太 TM 臭了，远远就闻到，立马换了。',
      },
      {
        name: '海洋之星 (Fish4dogs) 幼犬粮 深海鱼',
        review: '★★★★',
        describe: '浓浓的鱼腥味，暴暴还能接受，拉屎不那么臭了。',
      },
      {
        name: 'GO! 幼犬粮 六种肉五谷 天然粮',
        review: '',
        describe: '等着到货，买了大包，小包不经吃'
      }
    ],
  }
})
