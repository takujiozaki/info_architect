$(function(){
   //画像を格納した配列
    const images = [
       'image1.png',
       'image2.png',
       'image3.png',
    ]

    const keyvisual = $("#keyvisual");
    let count = 0;

    function showimages(keyvisual){
        keyvisual.attr('src', 'images/'+images[count])
        count++;
        if(count > 2){
            count = 0;
        }
    }
    //３秒毎に自動更新(3000ミリ秒=3秒)
    setInterval(
        function(){
            showimages(keyvisual);
        },
        3000
    );

    

});