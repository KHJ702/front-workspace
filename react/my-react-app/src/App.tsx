//import Component from './01.react_basic/01.Component';
//import ParentComponent from './01.react_basic/02.PropsAndState';
//import ArrayDataBinding from './01.react_basic/03.ArrayBinding';
//import ObjectDataBindig from './01.react_basic/04.ObjectBinding';
//import ModuleCSS from './01.react_basic/05.ModuleCss';
// import UseEffectHook from './02.react_advanced/01_UseEffectHook';
// import OptimizationHook from './02.react_advanced/03_OptimizationHook';
import { Link, Route, Routes } from 'react-router-dom';
// import AxiosGet from './02.react_advanced/04_Axios_GET';
// import AxiosPost from './02.react_advanced/04_Axios_POST';
import './App.css'
import Header from './02.react_advanced/05_Router';
import UseEffectHook from './02.react_advanced/01_UseEffectHook';
import OptimizationHook from './02.react_advanced/03_OptimizationHook';
import NestedRoute from './02.react_advanced/06_Nested_Route';
//import { Axios } from 'axios';
import AxiosPost from './02.react_advanced/04_Axios_POST';
import AxiosGet from './02.react_advanced/04_Axios_GET';
import { UserDetail, UserList, VariableRoute } from './02.react_advanced/07_Variable_Route';
//import BoardContainer from './practice/2. BoardConainer';

function App() {
  return (
    // 주석 
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<div>메인 페이지</div>}/>
        <Route path='/useEffect' element={<UseEffectHook/>}/>
        <Route path='/optimize' element={<OptimizationHook/>}/>
        <Route path='/nested' element={<NestedRoute/>}>
          <Route path='get' element={<AxiosGet />} />
          <Route path='post' element={<AxiosPost />} />
         {/* 하위 경로에는 '/' <- X */}
        </Route>
        <Route path='/variable-route' element={<VariableRoute/>}>
          <Route path = "user/:id" element={<UserDetail/>} />
          <Route path = "" element={<UserList/>} />
          {/* :id <= 동적 자원 경로 */}
        </Route>




        <Route path='*' element={<div>
          <h1 style={{color:'red'}}>잘못된 페이지 입니다.</h1>
          {/*
            Link
             - html의 a태그와 동일한 기능을 수행하나, 페이지 이동시 새로고침 없이 컴포넌트를 전환한다.
             - a태그로 인한 페이지 이동은 location을 조작하는 행위로, 리엑트에서는 권장되지 않는 이동방식이다.
          */}
          <Link to ={"/"}>메인페이지</Link>
          {/* <a href='/'>a태그로 이동</a> */}
        </div>}/>
      </Routes>
      <nav className='nav'>
          <li>
            <Link to="/">메인페이지</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/optimize">Optimization</Link>
          </li>
          <li>
            <Link to="/nested/get">Axios Get</Link>
          </li>
          <li>
            <Link to="/nested/post">Axios Post</Link>
          </li>
          <li>
            <Link to="variable-route">Variable Route</Link>
          </li>
        </nav>
      {/* <AxiosGet/>
      <AxiosPost/> */}
    </>
  )
}

export default App;