import { useState } from "react";

interface UserInfoProps {
  name: string;
  age: number;
  hobby: string[];
  onChangeUser: () => void;
}

export default function UserInfoContainer() {
  const [user, setUser] = useState({
    name: '홍길동',
    age: 30,
    hobby: ['코딩', '게임'],
  });


  const handleChangeUser = () => {
    setUser({
      name: '학생이름',
      age: 22,
      hobby: ['취미1', '취미2'],
    });
  };

  return (
    <div>
      <UserInfo
        name={user.name}
        age={user.age}
        hobby={user.hobby}
        onChangeUser={handleChangeUser}
      />
    </div>
  );
}

function UserInfo({ name, age, hobby, onChangeUser }: UserInfoProps) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보</h2>
      <h3>이름: {name}</h3>
      <h3>나이: {age}</h3>
      <h3>취미: {hobby.join(', ')}</h3>
      <button onClick={onChangeUser}>정보 변경변경</button>
    </div>
  );
}
