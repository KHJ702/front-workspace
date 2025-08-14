import { useState } from "react";

function ArrayDataBinding(){
    const [fruits, setFruits] = useState(
    [{id:1, name:'apple'}, {id:2, name:'banana'}, {id:3, name:'cherry'}])
    const addFruit = () => {
        // 배열에 데이터를 추가
        //fruits.push({id:4, name : 'orange'});
        // 데이터 추가시 화면에 렌더링이 되어야 한다.
        const nextId = Math.max(...fruits.map( (fruit) => fruit.id)) + 1;
        const newFurit = {id: nextId, name:'orange'}
        setFruits([...fruits, newFurit]);
        // 과일 데이터 {id:4, name : 'orange'}

    }
    const deleteFruit = (id:number) => {
        // 전달한 id값과 일치하는 요소를 삭제하는 기능.
        // 배열에서 삭제하고, 삭제결과가 랜더링 되어야 한다.
        
        // filter()
        //  - 배열 내부 요소에 대하여 조건에 맞는 요소만 남긴 새로운 배열을 반환하는 함수
        setFruits(fruits.filter((fruit) => fruit.id !== id));
    }

    // id기준 역순정렬
    const sortFruit = () => {
        const sortedFruit = [...fruits].sort( (a,b) => b.id - a.id); // 원본에 영향을 미칠 경우, 깊은 복사 후 사용하기
        console.log(sortFruit, fruits);
        setFruits(sortedFruit);
    }

    return (
        <div>
            <h1>ArrayDataBinding</h1>
            <h2>FruitList</h2>
            <ul>
                {/* 
                    1. 배열데이터 바인딩
                    map()
                     - 배열의 각 요소에 대해 함수를 호출하여, 새로운 요소를 만들어 반환하는 함수
                     - 리액트에서는 배열의 각 요소를 map함수를 호출하여, JSX요소로 변경 후 바인딩
                     - JSX에서는 FOR, IF, WHILE과 같은 예약어를 사용할 수 없기 때문에, 함수를 이용하여 바인딩한다.
                */}
                {   // for(let i=0; i<1; ...) XX
                    fruits.map( (fruit) => (
                        /*
                            key
                             - 배열의 요소를 식별하는 유니크 값.
                             - key값을 추가하면 리액트가 요소를 추적하여 변화를 감지할 수 있다.
                             - 효율적인 랜더링을 위해 필수로 추가해야함.
                        */
                        <li key={fruit.id}> {fruit.id} - {fruit.name}
                        <button onClick={() => deleteFruit(fruit.id)}>삭제</button>
                        </li>
                    ))
                }
                
            </ul>
            <button onClick={addFruit}>추가</button>
            <button onClick={sortFruit}>정렬</button>
        </div>
    )
}

export default ArrayDataBinding;