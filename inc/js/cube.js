$(document).ready(function(){

    $('#cube_play1').on('click', function(){

        // $(this).animate({deg: 360}, {duration: 200, step: function(now){
        //     $(this).css({transform: 'rotate('+now+'deg)'});
        //     if(now == 360){
        //         $(this).css('transform', 'rotate(0deg)')
        //     }
        // }});

        // 큐브 공통 옵션
        var cube_com = cube_option_common;

        // 무기
        var cube_sub = cube_option_weapon;

        var cube = {
            legendary: {
                first: cube_com.legendary.first.concat(cube_sub.legendary.first),
                second: cube_com.legendary.second.concat(cube_sub.legendary.second),
                third: cube_com.legendary.third.concat(cube_sub.legendary.third)
            }
        }

        var result = cubeExecute(cube);
        $('div#cube_opt1').text(result[0].first)
        $('div#cube_opt2').text(result[0].second)
        $('div#cube_opt3').text(result[0].third)

        

    })

    $('#cube_play1').on('click', function(){

        





    })
    
    function cubeExecute(cube){

        var opt1 = cube.legendary.first;
        var opt2 = cube.legendary.second;
        var opt3 = cube.legendary.third;

        var ital1 = false, ital2 = false;
        
        //4 5 6 7 8퍼짜리들 -> 20 25 30 35 40
        var result = {
            first: '',
            second: '',
            third: '',
        };

        // 1줄
        var ran = calc(1, 150);
        if(ran <= 20){
            result.first = chance_opt(opt1, 4); // 4퍼짜리
        } else if(ran > 20 && ran <= 45){
            result.first = chance_opt(opt1, 5); // 5퍼짜리
        } else if(ran > 45 && ran <= 75){
            result.first = chance_opt(opt1, 6); // 6퍼짜리
        } else if(ran > 75 && ran <= 110){
            result.first = chance_opt(opt1, 7); // 7퍼짜리
        } else if(ran > 110 && ran <= 150){            
            result.first = chance_opt(opt1, 8); // 8퍼짜리
        }

        // 2줄
        ran = calc(1, 150);
        var ital_ran = Math.floor(Math.random() * 100); // 0~100
        if(ital_ran<=7){ ital1 = true; }
        if(ital1){ opt2 = opt1; }
        if(ran <= 20){
            result.second = chance_opt(opt2, 4); // 4퍼짜리
        } else if(ran > 20 && ran <= 45){
            result.second = chance_opt(opt2, 5); // 5퍼짜리
        } else if(ran > 45 && ran <= 75){
            result.second = chance_opt(opt2, 6); // 6퍼짜리
        } else if(ran > 75 && ran <= 110){
            result.second = chance_opt(opt2, 7); // 7퍼짜리
        } else if(ran > 110 && ran <= 150){            
            result.second = chance_opt(opt2, 8); // 8퍼짜리
        }

        // 3줄
        ran = calc(1, 150);
        var ital_ran = Math.floor(Math.random() * 100); // 0~100
        if(ital_ran<=7){ ital2 = true; }
        if(ital2){ opt3 = opt1; }
        if(ran <= 20){
            result.third = chance_opt(opt3, 4); // 4퍼짜리
        } else if(ran > 20 && ran <= 45){
            result.third = chance_opt(opt3, 5); // 5퍼짜리
        } else if(ran > 45 && ran <= 75){
            result.third = chance_opt(opt3, 6); // 6퍼짜리
        } else if(ran > 75 && ran <= 110){
            result.third = chance_opt(opt3, 7); // 7퍼짜리
        } else if(ran > 110 && ran <= 150){            
            result.third = chance_opt(opt3, 8); // 8퍼짜리
        }

        // 보보보는 큐브로 불가능한 옵션
        var boss_cnt = 0;
        if(result.first.indexOf('보스')>-1){ boss_cnt++; }
        if(result.second.indexOf('보스')>-1){ boss_cnt++; }
        if(result.third.indexOf('보스')>-1){ boss_cnt++; }

        // 보보보인 경우 다시 큡질        
        if(boss_cnt==3){
            return cubeExecute(cube);
        } else {
            return [result, ital1, ital2];
        }

    }

    function calc(min, max){
        return Math.floor((Math.random() * (max - min+1)) + min );
    }

    function chance_opt(arr, value){
        var chan = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i].chance==value){
                chan.push(arr[i].option);
            }
        }
        return chan[Math.floor(Math.random() * (chan.length - 1))];
    }

});