import './App.css';
import AutoSaveEditor from './practice/04.UseEffectPractice';
import OptimizationPractice from './practice/05.OptimizationPractice';
import PokemonSearch from './practice/05.poketmon';
//import UserInfoContainer from './practice/01.PropsPractice';
//import BoardContainer from './practice/2. BoardConainer';

function Practice() {

    return(
        <>
        <div className="App">
            <div className='header'>
                    <h1 style={{ fontWeight: "bolder" }}>KH G CLASS</h1>
            </div>
        </div>
        {/* 여기 아래에 실습문제들 추가. */}
        {/* <UserInfoContainer/> */}
        {/* <BoardContainer/> */}
        {/* {<AutoSaveEditor/>} */}
        <OptimizationPractice/>
        <PokemonSearch/>
        </>
    )
}

export default Practice;