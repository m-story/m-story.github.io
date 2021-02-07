$(document).ready(function(){
        // 주흔작 계산
    // 무기 및 방어구
    $('#calc1_btn').on('click', function(){
        
        var type = $('#calc1_select1').val();
        var stat1 = $('#calc1_input1').val().trim();
        var stat2 = $('#calc1_input2').val().trim();
        var success_cnt = $('#calc1_input3').val().trim();

        // 숫자체크
        function numeric(data){
            return result = !isNaN(data);            
        }
        
        if(!stat1 || !stat2 || !success_cnt){
            alert('값을 입력해주세요.');
            return;
        }

        if(!numeric(stat1) || !numeric(stat2) || !numeric(success_cnt)){
            alert('숫자만 입력해주세요.');
            return;
        }

        var result;
        result = Math.abs(stat1 - stat2) / success_cnt;

        // 무기 4 3 2 1
        // 방어구 7 4 3
        if(type == '1'){

            if(result == 1){
                result = '100%';
            } else if(result == 2){
                result = '70%';
            } else if(result == 3){
                result = '30%';
            } else if(result == 4){
                result = '15%';
            } else {
                result = '섞작 또는 주흔작X';
            }

        } else if(type == '2'){

            if(result == 3){
                result = '100%';
            } else if(result == 4){
                result = '70%';
            } else if(result == 7){
                result = '30%';
            } else {
                result = '섞작 또는 주흔작X';
            }

        }

        console.log(result)
        $('#calc1_result').text(result);
    });

    // 장갑
    $('#calc2_btn').on('click', function(){
        
        var lv = $('#calc2_select1').val();
        var power = $('#calc2_input1').val().trim();
        var starforce = $('#calc2_select2').val();
        var success_cnt = $('#calc2_input2').val().trim();

        // 숫자체크
        function numeric(data){
            return result = !isNaN(data);            
        }
        
        if(!power || !success_cnt){
            alert('값을 입력해주세요.');
            return;
        }

        if(!numeric(power) || !numeric(success_cnt)){
            alert('숫자만 입력해주세요.');
            return;
        }

        // 렙제당 스타포스로 올라간 공격력 계산
        var star_power = 0;
        if(lv == '160'){
            if(starforce >= 5){ star_power = 1; }
            if(starforce >= 7){ star_power = 2; }
            if(starforce >= 9){ star_power = 3; }
            if(starforce >= 11){ star_power = 4; }
            if(starforce >= 13){ star_power = 5; }
            if(starforce >= 14){ star_power = 6; }
            if(starforce >= 15){ star_power = 7; }
            if(starforce >= 16){ star_power = 17; }
            if(starforce >= 17){ star_power = 28; }
            if(starforce >= 18){ star_power = 40; }
            if(starforce >= 19){ star_power = 53; }
            if(starforce >= 20){ star_power = 67; }
            if(starforce >= 21){ star_power = 82; }
            if(starforce >= 22){ star_power = 99; }
        } else if(lv == '200'){

        }

        var result;
        result = (power - star_power) / success_cnt;

        if(result == 1){
            result = '100%';
        } else if(result == 2){
            result = '70%';
        } else if(result == 3){            
            result = '30%';
        } else {
            result = '섞작 또는 주흔작X';
        }

        $('#calc2_result').text(result);
    });

    

})
