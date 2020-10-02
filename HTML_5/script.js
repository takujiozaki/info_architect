$(function(){
   //画像を格納した配列
    const images = [
       'image1.png',
       'image2.png',
       'image3.png',
    ]

    const keyvisual = $("#keyvisual");

    function showimages(keyvisual,image_id){
        keyvisual.attr('src', 'images/'+images[image_id])
    }

    let count = 0;

    keyvisual.on('click', function(){
        if(count < images.length-1){
            count++
        }else{
            count = 0;
        }
        //上の条件分岐を1行で書くと
        //count = count < images.length-1 ? ++count : 0 ;
        showimages($(this), count);
    })
    

});