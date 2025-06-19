$(function(){
    document.querySelector("#id1").style.color = "red"; // (js 가능은 함)
    // jQuery영역 내부에서는 되도록 jQuery 메서드/함수만 사용 (혼용사용 권장X)

    // jQuery방식의 요소 선택
    // $("선택자")
    // 선택한 jQuery의 메서드를 사용하여 값을 변경
    $("#id2").css("color","pink");
    $("#id2").html("내부 요소 변경") // js경우 innerHTML <- 이런식으로 해야함

    /* ( "선택자"는 내부에서 보관하는 방식. jQuery방식으로 객체를 만들어서 사용.
        그래서 .css , .html 같은 jQuery의 메서드를 사용할 수 있다. ) */

    // 태그 선택자
    $("p").css("color","blue");

    // 클래스 선택자
    // jQuery객체 메서드의 반환값은 항상 this (자바 Builder패턴과 비슷.)
    $(".item")
    .css({'backgroundColor':'lightgray',color:'red'})
    .click(function(){
        console.log('클릭됨')
    });
});