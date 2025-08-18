import { useState , useRef } from 'react';
import { boardList } from './boardMockup';

function BoardSearch({ list }: { list: typeof boardList }) {
  // #1. 검색어 관리
  const searchRef = useRef<HTMLInputElement|null>(null);
  // #2. 검색결과 저장용 state 선언
  const [result, setResult] = useState<typeof boardList | null>(null);

  // #3. 검색함수 작성
  const onSearchHandler = () => {
    const searchValue = searchRef.current?.value;
   
    if(searchValue){
      const filteredList = list.filter((board) => board.boardTitle.includes(searchValue));
      setResult(filteredList);
    } else {
      setResult(null);
    }
  };

  // #4. 렌더링
  return (
    <>
      <div>
        <h2>실습문제 4 : 게시판 검색</h2>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          ref={searchRef}
        />

        {/* 검색 버튼 */}
        <button onClick={onSearchHandler}>검색</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>검색 결과</h3>

        {/* #4 데이터 바인딩 */}
        {result && result.length > 0 ? (
          <ul>
            {result.map((board) => (
              <li key={board.boardNo}>
                <li><strong>번호 : </strong>{board.boardNo}</li>
                <li><strong>제목 : </strong>{board.boardTitle}</li>
                <li><strong>작성자 : </strong>{board.boardWriter}</li>
                <li><strong>작성일 : </strong>{board.boardDate}</li>
              </li>
            ))}
          </ul>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </>
  );
}

export default BoardSearch;