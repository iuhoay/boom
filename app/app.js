var app = new Vue({
  el: '#app',
  data: {
    title: '暴暴 (boom)',
    dog: {
      name: '暴暴',
      avatar: 'asserts/images/dog.png',
      birthday: '2016-02-07',
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
