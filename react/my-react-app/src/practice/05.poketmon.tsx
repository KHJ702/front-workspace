import { useState } from "react";
import axios from "axios";
import styles from "./PokemonSearch.module.css";

// 1) 검색용 포켓몬 데이터 타입 인터페이스정의
// - 화면구현을 위해 필요한 데이터들은 아래와 같습니다.
// - name, height, weight, type[] , abilitiy[], front_default
// - api사이트에서 위 데이터들이 어떤 속성에 포함되어있는지 확인 후 , 타입으로 정의하세요.
// -front_default는 sprites -> other -> official-artwork에 추가되어 있는 이미지를 사용하세요
interface PokemonData {
}
  
function PokemonSearch() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  // 2) 포켓몬 검색기능
  // - api문서를 참조하여 요청url에 query변수를 함께 전달하여 지정한 id/name의 포켓몬 데이터를
  //   반환하는 기능을 작성하시오
  // - 단, 현재 입력한 query값이 비어있는 경우 검색이 이루어지지 않도록 하세요.  
  // - 검색이 진행중이라면 loading상태를 변경하여, 데이터를 조회중임을 알 수있게 하세요.
  // - 검색결과가 존재하지 않는 경우 error값을 변경하여 '포켓몬을 찾을 수 없습니다'를 출력하세요.
  const handleSearch = () => {  
  };

  return (
    <div className={styles.container}>
      <h2>포켓몬 검색</h2>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="예: pikachu || 1"
      />
      <button className={styles.button} onClick={handleSearch}>
        검색
      </button>
      
      {loading && <p>로딩 중...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {pokemon && (
  <div className={styles.result}>
    <h3>{포켓몬 이름 바인딩}</h3>

    {/* 포켓몬 이미지, 이름 바인딩 */}
    <img
      src={}
      alt={}
    />
    {/* 
      1. 포켓몬 타입 바인딩 
      2. 포켓몬 키/10 바인딩
      3. 포켓몬 몸무게/10 바인딩
      4. 포켓몬 기술 바인딩
    */}
    <p>타입: </p>
    <p>키:  m</p>
    <p>몸무게:  kg</p>
    <p>기술: </p>    
  </div>
)}
    </div>
  );
}

export default PokemonSearch;
