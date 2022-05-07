//import { FC } from "react";
import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// export const Text = (props:Props) => {
// FC・・・Functional Component(関数コンポーネントの型)
// 暗黙的にpropsでchildrenを受け取るようになっている(バージョン18でFCに暗黙的に含まないようにする予定)
// export const Text: VFC<Props> = (props) => {
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
