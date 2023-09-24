import axios from "axios";

export default function RestGetPage() {
  const onClickBoard = async () => {
    const result = await axios.get(
      "http://backend-example.codebootcamp.co.kr/board/15"
    );
    console.log(result); //제대로된 결과
    console.log(result.data.title);
    console.log(result.data.contents);
  };

  const onClickPost = async () => {
    const board = {
      writer: "이승준",
      password: "1234",
      title: "제목입니다.",
      contents: "내용입니다.",
    };

    const result = await axios.post(
      "http://backend-example.codebootcamp.co.kr/board",
      board
    );
    console.log(result); //제대로된 결과
    console.log(result.data.id);
  };

  return (
    <div>
      <button onClick={onClickBoard}>REST-API 게시글 요청하기</button>
      <button onClick={onClickPost}>REST-API 게시글 요청하기</button>
    </div>
  );
}
