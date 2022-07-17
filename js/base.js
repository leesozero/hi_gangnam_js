// 선택자(주어), 메서드(어떻게), 이벤트(시점)
// 너 이때 이렇게 해
// 우영아, 점심시간에 전화해
// 더보기 버튼을 클릭했을때 상품이 노출된다.
// 화면이 준비되면 실행해라.
// 선택자중에 쌍따옴표, 홀따옴표 넣지 않는 객체는 window, document
// 한글 다음으로..
// 선택자는 곧 스타일 선택자 이다.
    
$(document).ready(function(){  

        $('#navi li a').each(function(){
            // 각자들 실행해
            // 태그에서 텍스트와 스타일까지 관리가 가능하도록 했다.
            // 각 a태그의 data옵션 krnm의 값을 저장해두고 출력하기
            $(this).html($(this).data('krnm'))
            //각 a태그의 data옵션 krnm의 값을 저장해두고 출력하기
            $(this).css('color', $(this).data('color'))
            //각 a태그의 data옵션 color의 값으로 글자색을 처리하겠다.
            $(this).parent().css('border-color', $(this).data('color'))
        })

        //상품출력
        $('#product .thumb h2').html(
            $('#product .thumb').data('prnm')
        ); //상품명 출력하기 공주실내화 노출하기
        //상품가격 도전!
        $('#product .thumb p').html(
            $('#product .thumb').data('price')
        ); 
        //상품이미지출력
        $('#product .thumb img').attr('src', $('#product .thumb').data('img'))
        // attr 태그의 속성접근 메서드
        
        
    

})

