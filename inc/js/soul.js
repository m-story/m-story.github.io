$(document).ready(function(){
    
    var qsi;

    $('#header > .tab > ul > li').on('click', function(){
        clearInterval(qsi);
    });

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
                } else if(soul.skill1_type == '3'){
                    html += '<tr>'
                    html += '<th>설치된 소울 대기 이펙트</th>';
                    html += '</tr>'
                    html += '<tr>'
                    //html += '<td><img id="'+soul.img1[1].split('.')[0]+'" src="./data/img/soul/'+soul.img1[1]+'"></td>';
                    html += '<td class="soul_img_td"><div id="'+soul.img1[1].split('.')[0]+'" style="background-image: url(.\/data\/img\/soul\/'+soul.img1[1]+')"></div></td>';
                    html += '</tr>'

                    html += '<tr>'
                    html += '<th>설치된 소울 공격 이펙트</th>';
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
                            var seq = Number($div.attr('data-seq'));
                            seq++;
                            if(seq=='5'){ seq=1; }

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

})