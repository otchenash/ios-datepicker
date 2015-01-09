$(document).ready(function(){
    //time select
    if($('.time-select').length > 0){
        $(function(){
            $('#demo').mobiscroll().select({
                theme: 'mobiscroll',
                display: 'inline',
                mode: 'scroller',
                minWidth: 300,
                height: 35,
                maxHeight: 120
            });

            $('#demo-2').mobiscroll().select({
                theme: 'mobiscroll',
                display: 'inline',
                mode: 'scroller',
                animate: 'slidehorizontal',
                minWidth: 300,
                height: 100,
                maxHeight: 120,
                width: 40
            });
        });
    }
});