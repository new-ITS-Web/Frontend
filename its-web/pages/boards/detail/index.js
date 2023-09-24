import axios from "axios";

export default function BoardDetailPage() {
  const onClickBoard = async () => {
    const result = await axios.get(
      "http://backend-example.codebootcamp.co.kr/board/15"
    );
    console.log(result); //제대로된 결과
    console.log(result.data.title);
    console.log(result.data.contents);
  };

  return <button onClick={onClickBoard}>REST-API 게시글 요청하기</button>;
}
