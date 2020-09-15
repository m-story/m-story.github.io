$(document).ready(function(){

    $('#header > .tab > ul > li').on('click', function(){
        var tab_id = $(this).attr('id');

        $('#contents > div').addClass('dpn');
        $('#header > .tab > ul > li').removeClass('on');
        
        $('#contents > div#div-'+tab_id).removeClass('dpn');
        $(this).addClass('on');
    });

});
