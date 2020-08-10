$(document).ready(function(){

    $('#header > .tab > ul > li > span').on('click', function(){
        var tab_id = $(this).attr('id');

        $('#contents > div').addClass('dpn');
        $('#header > .tab > ul > li > span').removeClass('on');
        
        $('#contents > div#div-'+tab_id).removeClass('dpn');
        $(this).addClass('on');
    });

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
            if(starforce >= 18){ star_power = 30; }
            if(starforce >= 19){ star_power = 43; }
            if(starforce >= 20){ star_power = 57; }
            if(starforce >= 21){ star_power = 72; }
            if(starforce >= 22){ star_power = 89; }
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









    // 마라벨 화면 구현
    (function(){
        var $div;
        for(var i=0;i<master_label.length;i++){

            var ml = master_label[i];           

            var html1 = '';
            var html2 = '';
            
            html1 += '<div class="master_img">';
            // 헤어가 2개 이상인 마라벨 (8기 이후)
            if(ml.hair_cnt > '1'){
                html1 += '<span class="master'+ml.seq+'m-1"></span><span class="master'+ml.seq+'w-1"></span>';
                html1 += '<span class="master'+ml.seq+'m-2"></span><span class="master'+ml.seq+'w-2"></span>';
                if(ml.reword_hair){
                    html1 += '<span class="master'+ml.seq+'m-3"></span><span class="master'+ml.seq+'w-3"></span>';
                }                
                html1 += '</div>';
            } else {
                html1 += '<span class="master'+ml.seq+'m"></span><span class="master'+ml.seq+'w"></span>';
                html1 += '</div>';
            }
            
            html2 += '<div class="master_info"><table id="master_info"><tr><td colspan="2">';
            html2 += '<span class="master_title">'
            html2 += ml.flag + '&nbsp;';
            html2 += ml.name + '</span></td></tr>';
            
            html2 += '<tr><td>출시 시간</td><td>' + ml.period + '</td></tr>';
            html2 += '<tr><td>헤어(남)</td><td>' + ml.man_hair + '</td></tr>';
            html2 += '<tr><td>헤어(여)</td><td>' + ml.woman_hair + '</td></tr>';
            if(ml.reword_hair){
                html2 += '<tr><td>가발(헤어 보상)</td><td>' + ml.reword_hair + '</td></tr>';
            }

            
            if(ml.hat){
                html2 += '<tr><td>모자</td><td>' + ml.hat + '</td></tr>';
            } else {
                html2 += '<tr><td>모자(남)</td><td>' + ml.man_hat + '</td></tr>';
                html2 += '<tr><td>모자(여)</td><td>' + ml.woman_hat + '</td></tr>';
            }
            html2 += '<tr><td>한벌옷(남)</td><td>' + ml.man_dress + '</td></tr>';
            html2 += '<tr><td>한벌옷(여)</td><td>' + ml.woman_dress + '</td></tr>';
            html2 += '<tr><td>무기</td><td>' + ml.weapon + '</td></tr>';

            if(ml.gloves){
                html2 += '<tr><td>장갑</td><td>' + ml.gloves + '</td></tr>';
            }
            
            if(ml.shoes){
                html2 += '<tr><td>신발</td><td>' + ml.shoes + '</td></tr>';
            } else {
                html2 += '<tr><td>신발(남)</td><td>' + ml.man_shoes + '</td></tr>';
                html2 += '<tr><td>신발(여)</td><td>' + ml.woman_shoes + '</td></tr>';
            }

            if(ml.cape){
                html2 += '<tr><td>망토</td><td>' + ml.cape + '</td></tr>';
            }

            html2 += '</table>'

            $div = $('div#master'+ml.seq);
            $div.append(html1);
            $div.append(html2);

        }
    })();
    
    // 무기 추옵표 구현
    (function(){

        var $table = $('#div-add_option table');                
        var html;

        var weapon = [w150, w160, w200];
        for(var p=0; p<weapon.length; p++){
            for(var q=0; q<weapon[p].length; q++){
                html = '<tr>'
                if(q==weapon[p].length-1){
                    html = '<tr class="lv_last">'
                }                
                if(q==0){                    
                    if(p!=weapon.length-1){
                        html += '<td class="lv" rowspan="'+weapon[p].length+'">'+weapon[p][q].level+'</td>'
                    } else {
                        html += '<td style="border: none;" rowspan="'+weapon[p].length+'">'+weapon[p][q].level+'</td>'
                    }
                }
                html += '<td>'+weapon[p][q].type+'</td>'
                html += '<td>'+weapon[p][q].group + ' ' + weapon[p][q].name+'</td>'
                html += '<td>'+weapon[p][q].power+'</td>'
                html += '<td class="chu1">'+weapon[p][q].chu1+'</td>'
                html += '<td>'+weapon[p][q].chu2+'</td>'
                html += '<td>'+weapon[p][q].chu3+'</td>'
                html += '<td>'+weapon[p][q].chu4+'</td>'
                html += '<td>'+weapon[p][q].chu5+'</td>'
                html += '</tr>'
                $table.find('tbody').append(html);   
            }
        }

    })();

});