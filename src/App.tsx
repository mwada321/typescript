import axios from "axios";
import { useState } from "react";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";
import { Practice3 } from "./practices/Practice3";
import { Practice4 } from "./practices/Practice4";
import "./styles.css";

import { UserProfile } from "./UserProfile";
import { Text } from "./Text";

import { Todo } from "./Todo";
import { TodoType } from "./Types/todo";
import { User } from "./Types/user";

const user: User = {
  name: "タマ"
  //  hobbies: ["映画","ゲーム"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <br />
      <p>-----------------------------------</p>
      <p>以下、別テーマ</p>
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
//      <Text color="red" fontSize="18px">あああああ</Text>
