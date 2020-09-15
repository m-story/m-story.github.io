$(document).ready(function(){
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
})