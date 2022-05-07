import { VFC } from "react";
import { TodoType } from "./Types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (
  // "id"を除いた型を取得
  //  props: Pick<TodoType, "userId" | "title" | "completed"> // 引数の型をピックアップ
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザ：${userId})`}</p>;
};
