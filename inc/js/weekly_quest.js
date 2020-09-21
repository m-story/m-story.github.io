$(document).ready(function(){

    fn_weekly_quest(1);

    $('#div-weekly_quest ul li').on('click', function(){
        
        $('#div-weekly_quest ul li').removeClass('on');
        $(this).addClass('on');

        var data_seq = $(this).attr('data-seq');
        fn_weekly_quest(data_seq);

    });


    // 주간 퀘스트 구현
    function fn_weekly_quest(seq){

        var $table = $('#div-weekly_quest table');
        $table.find('tbody').empty();
        
        var html = '';

        // 클릭 시 설정
        var quest;
        if(seq == 1){ quest = weekly_quest.haven; }
        else if(seq == 2){ quest = weekly_quest.tree; }
        else if(seq == 3){ quest = weekly_quest.critias; }

        for(var i=0; i<quest.length; i++){
            html += '<tr>'
            html += '<td>' + quest[i].place_name + '</td>'
            html += '<td>' + quest[i].title + '</td>'
            
            // 1 사냥, 2 수집, 3 전달
            if(quest[i].type == 1){ 
                html += '<td>' + quest[i].contents_monster + '</td>'
                html += '<td>사냥</td>'
            } else if(quest[i].type == 2){
                html += '<td>' + quest[i].contents_monster + ' > ' + quest[i].contents_item + '</td>'
                html += '<td>수집</td>'
            } else if(quest[i].type == 3){
                html += '<td>' + quest[i].contents_monster + ' > ' + quest[i].contents_item + '</td>'
                html += '<td>전달</td>'
            } else if(quest[i].type == 4){
                html += '<td>' + quest[i].contents_monster + ' > ' + quest[i].contents_item + ' > ' + '수리</td>'
                html += '<td>수리</td>'
            }
            

            html += '<td>' + quest[i].difficult + '</td>'
            html += '</tr>'            
        }

        $table.find('tbody').append(html);
    };
})