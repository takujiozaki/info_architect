$(function(){
    let bool = false;
    const cardimage = $('#cardimage')
    
    cardimage.on('click', function(){
        bool = !bool//反転
        if(bool){
            $(this).attr('src', 'images/front.png')
        }else{
            $(this).attr('src', 'images/back.png')
        }
    });
})