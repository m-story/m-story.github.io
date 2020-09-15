$(document).ready(function(){

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
    
})