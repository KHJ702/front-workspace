function test13(){
    /*
        img태그 동적 생성
        <img src="이미지파일의 경로" width/height alt , style>
    */
   const img = document.createElement('img');
   img.src = "./window.png"; // 이 js파일이 읽혀지는 즉, 윈도우 기준으로 경로설정
   img.style = "width:200px;"
   
   document.querySelector(".img-wrapper")
   .appendChild(img);
}

function deleteNode(node){
    node.remove(); // 요소를 선택하고 누르면 삭제.
}