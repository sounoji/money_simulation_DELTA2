  var ctx = document.getElementById("myPieChart");
  // ボタンをクリックした時に
  $('.complete-btn').click(function(){

   // 入力値を取得して、変数に代入
    var startAge = $('.startAge').val();
    var finishAge = $('.finishAge').val();

    var intercept = $('.intercept').val();

    var income20 = $('.income20').val();
    var income30 = $('.income30').val();
    var income40 = $('.income40').val();
    var income50 = $('.income50').val();
    var income60 = $('.income60').val();

    var expense20 = $('.expense20').val();
    var expense30 = $('.expense30').val();
    var expense40 = $('.expense40').val();
    var expense50 = $('.expense50').val();
    var expense60 = $('.expense60').val();

    //グラフ用データの作成
    var myData = new Array();
    myData["labels"] = [];
    myData["data"] = [];

    //シミュレーション年齢（仮）
    //var startAge = 33;
    //var finishAge = 55;

    //startAgeの1の位を取得
    var firstPlace = parseInt(String(startAge)[1]);
    console.log(firstPlace);

    //投資総額の宣言
    var sumInv = 0;
    var inv = 50;
    //運用利回りの宣言
    var interest = 1.05;

    //投資総額を計算する関数
    var calcInv = (n) =>{
      sumInv = inv * (n - startAge);
      //console.log(sumInv);
      return sumInv;
    }

    //calcInv(1);
    //calcInv(2);

    //別の関数でreturnされた値を使用
    var useInv = (n) =>{
      //console.log(sumInv * interest);
      var getInv = sumInv * interest;
      //console.log(getInv);
      //return getInv;
    }

    //関数をreturnで連結させられるのか検証
    for(i =startAge; i<=finishAge; i++){
      calcInv(i);
      useInv(i);
    }

    //年齢ごとの資産額を動的に生成（投資額計算）
    /*var sum = (n) => {
      //console.log("hello world");
      //sumInv = inv * n;
      //console.log(sumInv);
      if(n == 20){
        if(startAge == 20){
          return parseInt(income20 - inv - expense20) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income20 - inv - expense20) + getInv;
        }
      }else if(20 < n && n < 30){
        if(n == startAge){
          return Math.round(parseInt(income20) - inv + ((income30-income20) / 10 * firstPlace - expense20) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income20) - inv + ((income30-income20) / 10 * n - expense20) + sum(n-1) + getInv);
        }
      }else if(n == 30){
        if(startAge == 30){
          return parseInt(income30 - inv - expense30) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income30 - inv - expense30) + sum(n-1) + getInv;
        }
      }else if(30 < n && n < 40){
        if(n == startAge){
          return Math.round(parseInt(income30) - inv + ((income40-income30) / 10 * firstPlace - expense30) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income30) - inv + ((income40-income30) / 10 * n - expense30) + sum(n-1) + getInv);
        }
      }else if(n == 40){
        if(startAge == 40){
          return parseInt(income40 - inv - expense40) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income40 - inv - expense40) + sum(n-1) + getInv;
        }
      }else if(40 < n && n < 50){
        if(n == startAge){
          return Math.round(parseInt(income40) - inv + ((income50-income40) / 10 * firstPlace - expense40) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income40) - inv + ((income50-income40) / 10 * n - expense40) + sum(n-1) + getInv);
        }
      }else if(n == 50){
        if(startAge == 50){
          return parseInt(income50 - inv - expense50) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income50 - inv - expense50) + sum(n-1) + getInv;
        }
      }else if(50 < n && n < 60){
        if(n == startAge){
          return Math.round(parseInt(income50) - inv + ((income60-income50) / 10 * firstPlace - expense40) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income50) - inv + ((income60-income50) / 10 * n - expense50) + sum(n-1) + getInv);
        }
      }else if(n == 60){
        if(startAge == 50){
          return parseInt(income60 - inv - expense60) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income60 - inv - expense60) + sum(n-1) + getInv;
        }
      }else{
        console.log("範囲外です");
      }
    }*/

    //console.log(sum(25));
    //console.log(sum(38));
    //console.log(sum(49));

    //年齢ごとの資産額を動的に生成（バックアップ，正確に動いたコード）
    var sum = (n) => {
      if(n == 20){
        if(startAge == 20){
          return parseInt(income20 - expense20) + parseInt(intercept);
        }else{
          return parseInt(income20 - expense20);
        }
      }else if(20 < n && n < 30){
        if(n == startAge){
          return Math.round(parseInt(income20) + ((income30-income20) / 10 * firstPlace - expense20) + parseInt(intercept));
        }else{
          return Math.round(parseInt(income20) + ((income30-income20) / 10 * parseInt(String(n)[1]) - expense20) + sum(n-1));
        }
      }else if(n == 30){
        if(startAge == 30){
          return parseInt(income30 - expense30) + parseInt(intercept);
        }else{
          return parseInt(income30 - expense30) + sum(n-1);
        }
      }else if(30 < n && n < 40){
        if(n == startAge){
          return Math.round(parseInt(income30) + ((income40-income30) / 10 * firstPlace - expense30) + parseInt(intercept));
        }else{
          return Math.round(parseInt(income30) + ((income40-income30) / 10 * parseInt(String(n)[1]) - expense30) + sum(n-1));
        }
      }else if(n == 40){
        if(startAge == 40){
          return parseInt(income40 - expense40) + parseInt(intercept);
        }else{
          return parseInt(income40 - expense40) + sum(n-1);
        }
      }else if(40 < n && n < 50){
        if(n == startAge){
          return Math.round(parseInt(income40) + ((income50-income40) / 10 * firstPlace - expense40) + parseInt(intercept));
        }else{
          return Math.round(parseInt(income40) + ((income50-income40) / 10 * parseInt(String(n)[1]) - expense40) + sum(n-1));
        }
      }else if(n == 50){
        if(startAge == 50){
          return parseInt(income50 - expense50) + parseInt(intercept);
        }else{
          return parseInt(income50 - expense50) + sum(n-1);
        }
      }else if(50 < n && n < 60){
        if(n == startAge){
          return Math.round(parseInt(income50) + ((income60-income50) / 10 * firstPlace - expense40) + parseInt(intercept));
        }else{
          return Math.round(parseInt(income50) + ((income60-income50) / 10 * parseInt(String(n)[1]) - expense50) + sum(n-1));
        }
      }else if(n == 60){
        if(startAge == 50){
          return parseInt(income60 - expense60) + parseInt(intercept);
        }else{
          return parseInt(income60 - expense60) + sum(n-1);
        }
      }else{
        console.log("範囲外です");
      }
    }

    //デバッグ
    console.log(sum(24));
    console.log(sum(40));
    console.log(sum(58));
    console.log(sum(61));
    //console.log(sum(16));

    //グラフを動的に作成
    var age = [];

    //任意の年齢間で資産額計算
    var hairetsu3 = [];

    /*for(let i = startAge; i <= finishAge; i++){
      //console.log(i);
      calcInv(i);
      //useInv(i);
      var getInv = sumInv * interest;
      console.log(useInv);
      var asset = sum(i);
      hairetsu3.push(asset);
    }*/

    for(let i = startAge; i <= finishAge; i++){
      var asset = sum(i);
      hairetsu3.push(asset);
    }

    console.log(hairetsu3);

    //ラベルの年齢を動的に作成
    for(let i = startAge; i <= finishAge; i++){
      //console.log(i - startAge);
      age[i - startAge] = i  + "歳";
    }

    console.log(age);
    console.log(age[1]);
    console.log(finishAge - startAge);

    // グラフの設定
    var myPieChart = new Chart(ctx, {

      // 棒グラフ
      type: 'bar',
      data: {
        //labels: myData.labels,
        labels:age,
        datasets: [{
            /*backgroundColor: [
                "#e0e0e0",
                "#a0a0a0",
                "#606060",
                "#202020"
            ],*/
            label:'資産額(万円)',
            // 入力値が入っている変数を利用
            //data:hairetsu2
            data:hairetsu3
      }]
      },
      options: {
        title: {
          display: true,
          text: '資産額'
        }
      },
    });
  })
