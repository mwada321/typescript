import { VFC } from "react";
import { User } from "./Types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

// <dd>{user.hobbies?.join(" / ")}</dd>
// オプショナルチェイニング『？』でNullであった場合にエラーとならないようにする。

// ライブラリの型定義
// typescriptの場合、別に型定義をimportする必要があるものがある。
// react-router-dom
// @types/react-router-dom ・・・ react-router-dom用の型定義
// githubなどで確認してindex.d.tsがある場合はライブラリに型定義を包含している。(axiosなど)
// package.jsonにtypingがある。
// 新しいライブラリは比較的型定義を包含している
