// Write your code here

$(document).ready(function(){

    // $('.form-control').val('0');

    $('.btn-num ,.btn-act').click(function(){

        if($('.form-control').val() === '0'){
            $('.form-control').val('')
        }
 
        if($('.form-control').css('color').toLowerCase() === 'rgb(255, 0, 0)'){
           $('.form-control').css('color','rgb(0, 0, 0)' );
        }
        

        if($('input').hasClass('needClear')){
            if($(this).hasClass('btn-num')){
                $('.form-control').val('');
                $('.form-control').removeClass('needClear')
            }
            if($(this).hasClass('btn-act')){
            $('.form-control').removeClass('needClear')
            }
        }
        let currentValue = $('.form-control').val();
        let value = $(this).data('value');
        $('.form-control').val(currentValue + value);

        let arrValue = $('.form-control').val().split(' ');
        let arrAct = ['*', '+','-','/'];
        let index_1 =1;
        let index_2 =2;
        let index_3 =3;
        let index_4 =4;
        if(arrValue[0]==='' && arrAct.includes(arrValue[index_1])){
            $('.form-control').val('0')
        }

        if(arrAct.includes(arrValue[arrValue.length-index_4]) 
        && arrAct.includes(arrValue[arrValue.length-index_2])){
            $('.form-control').val(currentValue.substring(0,arrValue.length-index_3) + value);
        }

//         console.log(valueSplit);
//         let btnAct = '/' || '+' || '-' || '*'
//         if(valueSplit[1] === btnAct){
//             // if(valueSplit[1] === '/' | '+' | '-' | '*'){
//             //     console.log('2')
//             // }
// console.log('1')
//         }

//     let currentValue = $('.form-control').val();
// 	let length = currentValue.length;
//     let value = $(this).data('value');
// 	let flag = false;
// 	if(value === '+' || value === '-' || value === '*' || value === '/'){
// 	flag = true;
// }
// 	if(length === 0){
// 		if(flag){
// 		return;
//     }
// 	}
// 	let flagNew = false;
// 	let lastCharacter = currentValue[length-1];
// 	if(lastCharacter === '+' || lastCharacter === '-' || lastCharacter === '*' || lastCharacter === '/'){
//         flagNew = true;
//     }
// 	if(flag && flagNew){
// 	$('.form-control').val(currentValue.substring(0,length-1) + value);
// }
// 	else{
// 	$('.form-control').val($('.form-control').val() + value);
//     }
    })
    

    $('.btn-clear').click(function(){
        // $('.form-control').val('');
        $('.form-control').val('0');
    })

    $('#equal').click(function(){
        let value = $('.form-control').val().split(' ');
        let currentValue = $('.form-control').val();
        let result;
        let number_1 =1;
        let number_2 =2;
        
        if(value[value.length-number_2] === '/'){
            if(value[value.length-number_1] === '0'){
                result = 'ERROR';
                $('.form-control').css('color', 'red');
        } else {
            result = parseInt(value[0]) /parseInt(value[value.length-number_1]);
        }
        }

        if(value[value.length-number_2] === '*'){
            result = parseInt(value[0])*parseInt(value[value.length-number_1]);
        }

        if(value[value.length-number_2] === '-'){
            result = parseInt(value[0])-parseInt(value[value.length-number_1]);
        }

        if(value[value.length-number_2] === '+'){
            result = parseInt(value[0])+parseInt(value[value.length-number_1]);
        }


        $('.form-control').val(result.toLocaleString());
        $('.form-control').addClass('needClear');
        let resultValue = `${currentValue} = ${result}`

      if($('.form-control').val() === 'ERROR'){
       return 
      } else {
        let arrValue = resultValue.split(' ');
        let result_48_Boolean = /^\d*48\d*/.test(arrValue);

        $('#logs').prepend(`<div class ="log">
        <div class = 'circle'></div>
        <p class='logValue result_48_${result_48_Boolean}'>${resultValue}</p>
        <div class="closeIcon"></div>
      </div>`)

    //   _.find()

    // $('#logs > .log').each(function(log) {
    //    console.log(log);
    //     if(/^\d*48\d*/.test(arrValue)){
    //     $(result).css('text-decoration','underline'); 
    //    }
    // })

    //   if(/^\d*48\d*/.test(arrValue)){
    //     // console.log($('.result').css('text-decoration','underline')) ;
    //      $('.logValue').css('text-decoration','underline');
    //   }else{
    //     return
    //   }

    // $('#logs').filter(function () {
    //     let logVal = $(this).html().match(/^\d*48\d*/);
    //     console.log(logVal)
    //     return logVal;
    // });

    // $('#logs > .log > p').each(function(log) {
    //     console.log(log);
    //     if(/^\d*48\d*/.test(arrValue)){
    //         $(this).css('text-decoration','underline'); 
    //     }
    // })

//    let listWithDigits = $('.logs').filter(function () {
//     return $(this).html().match(/^\d*48\d*/gi);
//     //     // return this.innerHTML.match(/\d+$/); // returns lis that end with digits
//     //     // return this.innerHTML.match(/^\d+/); // returns lis that start with digits
//     //     // return this.innerHTML.match(/^\d+$/); // returns lis that contain only digits
//     });
    // console.log(listWithDigits.length); // 1

      }



    //   console.log($('p').find(/^\d*48\d*/))
    
    })



    // $('.circle').click(function(){
    //     // $(this).css('background-color','red');
    //     $(this).toggleClass('circleSelected')
    //     // $(this).addClass('circleSelected');
    //     // console.log($(this).data('clicked'))
    //     // if($("#id").data('clicked')){

    //     // }
    // })
    

    // $('div.closeIcon').click(function(){
    //     console.log($(this).parent())
    //     $(this).parent().remove();
    // })

    // $(".logValue").filter(48).css("color", "yellow")
})

$(document).on('click', '.circle', function() { 
    $(this).toggleClass('circleSelected') 
});

$(document).on('click', '.closeIcon', function() { 
    $(this).parent().remove(); 
    if($('.circle').hasClass('circleSelected')){
        $('.circleSelected').parent().remove(); 
    }
});



// $('.logs').bind('scroll',function(){
//     let myScrollTop = $(this).scrollTop;

//     console.log(`Scroll Top: ${myScrollTop}`)
// })

$('#logs').on('scroll', function(){
    let scroll = $('#logs').scrollTop();
    console.log(`Scroll Top: ${scroll}`)
});

// $('#logs').change(function(){
//     console.log('changed')
//     //    if(/^\d*48\d*/.test($('p'))){
//     //     console.log($('.logValue').attr('data-48','true')) ;
//     //     // $('.logValue').css('text-decoration','underline');
//     //   }else{
//     //     return
//     //   }
// })






// $(function(){
//     $('.button').click(function(){
//         $('#display').val($('#display').val()+ $(this).html())
//     })
// })();