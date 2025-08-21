import RadioGroup from "../components/RadioGroup";

const MenuEdit = () => {
    // #1. 메뉴 수정 기능 구현   
    // 요구사항
    // 1. 현재 메뉴 정보에 맞는 데이터를 서버에서 읽어온 후 , 폼에 바인딩한다.(useEffect+useQuery 사용)
    // 2. 읽어온 데이터가 없는 경우 목록 페이지로 이동시키고 "존재하지 않는 메뉴입니다." 메세지를 출력한다. 
    // 3. useInput훅을 사용하여 폼상태를 관리한다.
    // 4. 수정 버튼 클릭시 다음 내용에 대한 유효성 검사를 진행한다.
    //    - 모든 필드는 반드시 입력되어야 한다. 
    //    - price는 0이상 이어야 한다.
    //    - 유효성 검사 실패시 경고창(allert)을 통해 경고 메세지를 출력한다.
    // 5. 유효성 검사 통과시 서버에 수정요청을 보낸다(useMutation 사용)
    // 6. 수정 완료 후 상세 페이지로 이동시키고, 수정완료 메세지를 출력한다.
    // 7. 중복 제출을 방지하기 위해 제출이 진행되는 동안은 버튼을 비활성화 시킨다.
    // 8. 제출이 진행되는 동안은 로딩 상태를 표시한다.
    //    - <div>Loading...</div>
    // 9. 수정 실패시 에러 메세지를 출력한다.
    //    - <div className="alert alert-danger">에러메세지</div>  

    return (
        <>
            <div className="menu-test">
                <h4>메뉴 수정하기(PUT)</h4>
                <form id="menuEnrollFrm" >
                    <input type="text" name="restaurant" placeholder="음식점" className="form-control"  />
                    <input type="text" name="name" placeholder="메뉴" className="form-control"  />
                    <input type="number" name="price" placeholder="가격" className="form-control"/>
                    <div className="form-check form-check-inline">
                        <RadioGroup id="get-kr" value="kr" name="type"  label="한식" />
                        <RadioGroup id="get-ch" value="ch" name="type"  label="중식" />
                        <RadioGroup id="get-jp" value="jp" name="type"  label="일식" />
                    </div>
                    <div className="form-check form-check-inline">
                        <RadioGroup id="get-hot" value="hot" name="taste" label="매운맛" />
                        <RadioGroup id="get-mild" value="mild" name="taste" label="순한맛" />
                    </div>
                    <br />
                    <input type="submit" className="btn btn-block btn-outline-success btn-send" value="수정" />
                </form>
            </div>
        </>
    )
}
export default MenuEdit;