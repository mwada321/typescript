export const Practice4 = () => {
  // const calcTotalFee = (num) => {
  // tsconfig.jsonのstrict:trueを外すと暗黙的な変換の為、上記ではエラーとなる
  // noImplicitAny:falseでも暗黙のanyをoffにできる
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題4：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
