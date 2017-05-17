var app = new Vue({
  el: '#app',
  data: {
    title: '暴暴 (boom)',
    dog: {
      name: '暴暴',
      birthday: '2016-02-07',
      images: [
        { path: 'asserts/images/2016-05-24.jpg', text: '第一次见面' },
        { path: 'asserts/images/2016-09-07.jpg', text: '夏天很热，毛长了的样子' },
        { path: 'asserts/images/2017-04-22.jpg', text: '一岁2个月，有意义的一天' }
      ]
    },
    weights: [],
    dry_foods: [],
  }
})

AV.init({appId: '7WYEcW832su5uxMBUqxNMHkd-gzGzoHsz', appKey: 'U53zqQdHn2F72XjOQHVSFIP8'});

new AV.Query('dry_food').find().then(function(results) {
  var dry_food;
  for (index in results) {
    dry_food = results[index];
    app.dry_foods.push({
      name: dry_food.get('name'),
      review: dry_food.get('review'),
      describe: dry_food.get('describe'),
    })
  }
})

new AV.Query('weights').find().then(function(results) {
  var weight;
  for (i in results) {
    weight = results[i];
    app.weights.push({
      date: weight.get('date'),
      weight: weight.get('weight'),
    })
  }
})
