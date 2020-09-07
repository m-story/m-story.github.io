$(document).ready(function(){

    var qsi;

    $('#header > .tab > ul > li').on('click', function(){

        clearInterval(qsi);

        var tab_id = $(this).attr('id');

        $('#contents > div').addClass('dpn');
        $('#header > .tab > ul > li').removeClass('on');
        
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
            
            html2 += '<tr><td>출시 기간</td><td>' + ml.period + '</td></tr>';
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


    // 소울 초기화
    (function(){
        
        var $tr;
        for(var i=0;i<soul.length;i++){
            var sl = soul_obj[soul[i]];
            $tr = $('#div-soul > #soul-tab > table > tbody > tr#soul-tier-'+sl.tier+' > td');            
            $tr.append('<span id="span-'+sl.en_name+'" class="span-soul" data-nm="'+sl.en_name+'">'+sl.ko_name+'</span>');
        }

        // 소울이름 클릭
        $('.span-soul').on('click', function(){

            clearInterval(qsi);

            $(this).parent().find('span').removeClass('on');
            $(this).addClass('on');

            var $div = $('#soul-detail > #soul-sel');
            $div.empty();
            
            var html = '';
                
            $('#soul-detail > #soul-none').addClass('dpn');
            $('#soul-detail > #soul-sel').removeClass('dpn');

            var soul = soul_obj[$(this).attr('data-nm')];

            html += '<div id="tier_detail">';
            html += '<table>';
            html += '<tr>';
            html += '<th>기운찬</th>';
            html += '<th>날렵한</th>';
            html += '<th>총명한</th>';
            html += '<th>놀라운</th>';
            html += '<th>화려한</th>';
            html += '<th>강력한</th>';
            html += '<th>빛나는</th>';
            html += '<th>강인한</th>';
            html += '</tr>';
            html += '<tr>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt1+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt2+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt3+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt4+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt5+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt6+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt7+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier].opt8+'</td>';
            html += '</tr>';
            html += '<tr>';
            html += '<th colspan="8">위대한 (랜덤 1)</th>';            
            html += '</tr>';
            html += '<tr>';
            html += '<td>'+soul_option['tier_'+soul.tier+'w'].opt1+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier+'w'].opt2+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier+'w'].opt3+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier+'w'].opt4+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier+'w'].opt5+'</td>';
            html += '<td>'+soul_option['tier_'+soul.tier+'w'].opt6+'</td>';
            html += '<td colspan="2">'+soul_option['tier_'+soul.tier+'w'].opt7+'</td>';
            html += '</tr>';
            html += '</table>';
            html += '</div>';
            


            if(soul.img1){

                html += '<div id="soul_skill-div">'


                // 좌측 일반 테이블
                html += '<div id="soul_skill-detail1">'
                html += '<table id="soul">'
                
                html += '<tr>'
                html += '<th>일반 소울</th>';
                html += '</tr>'
                html += '<tr>'
                //html += '<td><img style="height: 200px !important;" id="'+soul.img1[0].split('.')[0]+'" src="./data/img/soul/'+soul.img1[0]+'"></td>';
                html += '<td class="soul_topimg_td"><div id="'+soul.img1[0].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img1[0]+')"></div></td>';
                html += '</tr>'

                html += '<tr>'
                html += '<th>소울 스킬</th>';
                html += '</tr>'
                html += '<tr>'
                html += '<td class="pd-tb10">'
                html += '<span style="font-weight: bold; color: red; margin-right: 5px; ">'
                if(soul.skill1_type == '1'){
                    html += '소환형'
                } else {
                    if(soul.skill1_type == '2'){ html += '스킬형' }
                    if(soul.skill1_type == '3'){ html += '설치형' }
                    if(soul.skill1_type == '4'){ html += '버프형' }
                }
                
                html += '</span>'                
                html += soul.skill1_detail
                if(soul.en_name == 'queen'){
                    html += '<br/><div>'
                    for(var i=0; i<soul.skill1_detail2.length; i++){
                        html += soul.skill1_detail2[i] + '<br/>'
                    }
                    html += '</div>'
                }
                html += '</td>'
                html += '</tr>'

                if(soul.skill1_type == '1'){
                    html += '<tr>'
                    html += '<th>소환된 소울 대기 이펙트</th>';
                    html += '</tr>'
                    html += '<tr>'
                    //html += '<td><img id="'+soul.img1[1].split('.')[0]+'" src="./data/img/soul/'+soul.img1[1]+'"></td>';
                    html += '<td class="soul_img_td"><div id="'+soul.img1[1].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img1[1]+')"></div></td>';
                    html += '</tr>'

                    html += '<tr>'
                    html += '<th>소환된 소울 공격 이펙트</th>';
                    html += '</tr>'
                    html += '<tr>'
                    html += '<td class="soul_img_td"><div id="'+soul.img1[2].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img1[2]+')"></div></td>';
                    html += '</tr>'
                } else {
                    html += '<tr>'
                    html += '<th>소울 스킬 이펙트</th>';
                    html += '</tr>'
                    html += '<tr>'
                    html += '<td class="soul_img_td"><div id="'+soul.img1[1].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img1[1]+')"></div></td>';
                    html += '</tr>'
                }
                
                html += '</table>'
                html += '</div>'



                

                // 우측 위대한 테이블
                html += '<div id="soul_skill-detail2">'
                html += '<table id="soul">'
                
                html += '<tr>'
                html += '<th>위대한 소울</th>';
                html += '</tr>'
                html += '<tr>'
                //html += '<td><img style="height: 200px !important;" id="'+soul.img2[0].split('.')[0]+'" src="./data/img/soul/'+soul.img2[0]+'"></td>';
                html += '<td class="soul_topimg_td"><div id="'+soul.img2[0].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[0]+')"></div></td>';
                html += '</tr>'

                html += '<tr>'
                html += '<th>소울 스킬</th>';
                html += '</tr>'
                html += '<tr>'
                html += '<td class="pd-tb10">'
                html += '<span style="font-weight: bold; color: red; margin-right: 5px; ">'
                if(soul.skill2_type == '1'){
                    html += '소환형'
                } else {
                    if(soul.skill2_type == '2'){ html += '스킬형' }
                    if(soul.skill1_type == '3'){ html += '설치형' }
                    if(soul.skill1_type == '4'){ html += '버프형' }
                }
                html += '</span>'                
                html += soul.skill2_detail + '</td>'
                html += '</tr>'

                if(soul.skill2_type == '1'){
                    if(soul.en_name != 'queen'){
                        html += '<tr>'
                        html += '<th>소환된 소울 대기 이펙트</th>';
                        html += '</tr>'

                        html += '<tr>'
                        html += '<td class="soul_img_td"><div id="'+soul.img2[1].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[1]+')"></div></td>';
                        html += '</tr>'

                        html += '<tr>'
                        html += '<th>소환된 소울 공격 이펙트</th>';
                        html += '</tr>'
                        html += '<tr>'
                        html += '<td class="soul_img_td"><div id="'+soul.img2[2].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[2]+')"></div></td>';
                        html += '</tr>'                    
                    } else {
                        html += '<tr>'
                        html += '<th>소환된 소울 대기 이펙트(랜덤 1) - <span class="skillname_queen" style="color: red;">유혹</span></th>';
                        html += '</tr>'

                        html += '<tr>'
                        html += '<td class="soul_img_td">'
                        html += '<div id="'+soul.img2[1].split('.')[0]+'" class="queen1 on" data-seq="1" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[1]+')"></div>'
                        html += '<div id="'+soul.img2[3].split('.')[0]+'" class="queen1 dpn" data-seq="2" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[3]+')"></div>'
                        html += '<div id="'+soul.img2[5].split('.')[0]+'" class="queen1 dpn" data-seq="3" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[5]+')"></div>'
                        html += '<div id="'+soul.img2[7].split('.')[0]+'" class="queen1 dpn" data-seq="4" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[7]+')"></div>'
                        html += '</td>';
                        html += '</tr>'

                        html += '<tr>'
                        html += '<th>소환된 소울 공격 이펙트(랜덤 1) - <span class="skillname_queen" style="color: red;">유혹</span></th>';
                        html += '</tr>'

                        html += '<tr>'
                        html += '<td class="soul_img_td">'
                        html += '<div id="'+soul.img2[2].split('.')[0]+'" class="queen2 on" data-seq="1" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[2]+')"></div>'
                        html += '<div id="'+soul.img2[4].split('.')[0]+'" class="queen2 dpn" data-seq="2" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[4]+')"></div>'
                        html += '<div id="'+soul.img2[6].split('.')[0]+'" class="queen2 dpn" data-seq="3" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[6]+')"></div>'
                        html += '<div id="'+soul.img2[8].split('.')[0]+'" class="queen2 dpn" data-seq="4" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[8]+')"></div>'
                        html += '</td>';
                        html += '</tr>'
                        
                        qsi = setInterval(function(){
                            var $div = $('.soul_img_td div.queen1.on');
                            console.log($div)
                            var seq = Number($div.attr('data-seq'));
                            seq++;
                            if(seq=='5'){ seq=1; }

                            console.log(seq)

                            $('.skillname_queen').text(soul.skill2_detail2[seq-1]);

                            $('.soul_img_td div.queen1, .soul_img_td div.queen2').removeClass('on');
                            $('.soul_img_td div.queen1, .soul_img_td div.queen2').addClass('dpn');

                            $('.soul_img_td div.queen1[data-seq='+seq+']').removeClass('dpn');
                            $('.soul_img_td div.queen1[data-seq='+seq+']').addClass('on');

                            $('.soul_img_td div.queen2[data-seq='+seq+']').removeClass('dpn');
                            $('.soul_img_td div.queen2[data-seq='+seq+']').addClass('on');
                        }, 3000);
                        
                    }

                } else {
                    html += '<tr>'
                    html += '<th>소울 스킬 이펙트</th>';
                    html += '</tr>'
                    html += '<tr>'
                    html += '<td class="soul_img_td"><div id="'+soul.img2[1].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img2[1]+')"></div></td>';
                    html += '</tr>'
                }

                

                
                html += '</table>'
                html += '</div>'

                html += '</div>'



            }
            // if(soul.img2){                
            //     html += '<div class="effect-title" style="margin-top: 100px;">위대한 소울</div>';
            //     for(var i=0;i<soul.img2.length;i++){
            //         //console.log(soul.img[i]);
            //         html += '<img id="'+soul.img2[i].split('.')[0]+'" src="./data/img/soul/'+soul.img2[i]+'">'
            //     }
            // }

            
            $div.append(html);
        });

    })();

});