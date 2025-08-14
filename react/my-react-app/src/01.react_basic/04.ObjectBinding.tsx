import React, { useRef, useState } from 'react';
export default function ObjectDataBindig(){
    const [user,setUser] = useState({ name: '', age: 0 });

    // const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setUser({
    //         ...user,
    //         name : e.target.value
    //     });
    // }

    // const handleAgeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setUser({
    //         ...user,
    //         age : Number(e.target.value)
    //     })
    // }

    // 두 함수를 하나의 함수로 합치기
     const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser(
            (prev) => {
                return {...prev, [name]: value};
            }
        )
     }

    // #2. 유효성검사 및 조건부 렌더링
    const isNameValid = user.name.length >= 2;
    const isAgeValid = user.age > 0;

    return(
       <>
            <div style={{color:'white', background:'black'}}>
                <p>이름: {user.name}</p>
                <p>나이: {user.age}</p>
            </div>
            <div>
                <label>이름 : </label>
                <input
                 name = "name"
                 placeholder="이름"
                 value={user.name}
                 onChange={handleChange}
                 />
                 <br/>
                 {/* 조건부 렌더링 */}
                 {
                    isNameValid ? null : <p style = {{color:'red'}}> 이름은 2글자 이상이어야 합니다.</p>
                 }


                <label>나이 : </label>
                <input
                 name = "age"
                 placeholder="나이"
                 value={user.age}
                 onChange={handleChange}
                 />
                 <br/>                                  {
                    !isAgeValid && <p style = {{color:'red'}}>나이는 1 이상이어야 합니다.</p>
                 }
                 <SearchForm/>
            </div>
       </>
    )
}

function SearchForm(){
    /*
        #3. useRef
         - useRef는 input의 현재 값을 참조할 수 있게 해주는 함수
         - 입력값을 실시간으로 반영하지 않고, 특정 시점에만 가져올 수 있기 때문에
           불필요한 렌더링을 방지할 목적으로 사용한다.
         - 입력값을 바탕으로 실시간 검사가 필요한 경우 -> onchange+state방식으로 관리
           입력값을 바탕으로 실시간 검사가 필요하지 않는 경우 -> useRef로 입력값 가져오기
    */
    const keywordRef = useRef<HTMLInputElement>(null);
    console.log(keywordRef.current);

    // 검색 결과 관리 state
    const [result, setResult] = useState<null|string>(null);
    // 검색용 데이터 샘플
    const sample = ['apple','banana','grape','orange'];

    const handleSearch = (e:React.FormEvent) => {
        e.preventDefault();

        // ref를 활용하여 현재 입력값 가져오기
        // 속성? -> optional chain

        // 기존에는 ->
        // if(keywordRef.current){
        // keywordRef.current.value;
        // } 
        // 간단하게 ->
        const keyword = keywordRef.current?.value;
        if(!keyword){
            alert("검색어를 입력하세요");
            return;
        }
        const found = sample.find((item) => item.includes(keyword)); // 현재 아이템에 키워드가 포함되어있으면,
        setResult(found ?? null); // found가 삼항연산자라 undefined를 반환.
    }

    return(
        <form style = {{padding : '20px'}} onSubmit={handleSearch}>
            <input
            ref={keywordRef}
            type= "text"
            placeholder='검색어 입력'
            style={{marginRight:'10px'}}/>

            <button onClick={handleSearch}>검색</button>
            {result ?? <p style={{marginTop : '10px'}}>검색결과가 없습니다.</p>}
        </form>
    )
}