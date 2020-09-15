$(document).ready(function(){

    // 마라벨 화면 구현
    (function(){
        var $div;
        for(var i=0;i<master_label_pet.length;i++){

            var mlp = master_label_pet[i];

            var html1 = '';
            var html2 = '';
            
            html1 += '<div class="master_pet_img">';            
            html1 += '<span class="master_pet'+mlp.seq+'-1"></span>';
            html1 += '<span class="master_pet'+mlp.seq+'-2"></span>';
            html1 += '<span class="master_pet'+mlp.seq+'-3"></span>';
            html1 += '</div>';
            
            html2 += '<div class="master_pet_info"><table id="master_pet_info"><tr><td colspan="2">';
            html2 += '<span class="master_pet_title">'
            html2 += mlp.flag + '&nbsp;';
            html2 += mlp.name + '</span></td></tr>';
            
            html2 += '<tr><td>이름</td><td>' + mlp.pet_name + '</td></tr>';

            for(var p=0;p<mlp.period.length;p++){
                html2 += '<tr><td>'+(p+1)+'차 판매 기간</td><td>' + mlp.period[p] + '</td></tr>';
            }
            html2 += '</table>'

            $div = $('div#master_pet'+mlp.seq);
            $div.append(html1);
            $div.append(html2);

        }
    })();
    
})