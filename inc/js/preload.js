$(document).ready(function(){

    soul_preload();

    function soul_preload() {
        
        for(var i=0; i<soul.length; i++){
            var img1 = soul_obj[soul[i]].img1;
            var img2 = soul_obj[soul[i]].img2;

            for(var p=0; p<img1.length; p++){
                preloadImage  = new Image();
                preloadImage.src="data/img/soul/"+img1[p];
            }
            
            for(var q=0; q<img2.length; q++){
                preloadImage  = new Image();
                preloadImage.src="data/img/soul/"+img2[q];
            }
    
        }
        
    }

});
