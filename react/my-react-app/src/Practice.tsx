import './App.css';
import UserInfoContainer from './practice/01.PropsPractice';
import BoardContainer from './practice/2. BoardConainer';

function Practice() {

    return(
        <>
        <div className="App">
            <div className='header'>
                    <h1 style={{ fontWeight: "bolder" }}>KH G CLASS</h1>
            </div>
        </div>
        {/* 여기 아래에 실습문제들 추가. */}
        <UserInfoContainer/>
        <BoardContainer/>
        </>
    )
}

export default Practice;