import {
  ButtonWrapper,
  Contents,
  InputWrapper,
  Label,
  Password,
  Subject,
  SubmitButton,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  ErrorMsg,
} from "../../../styles/boardsNew";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function BoardsNewPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (writer) {
      setWriterError("");
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    if (password) {
      setPasswordError("");
    }
  }
  function onChangeSubject(event) {
    setTitle(event.target.value);
    if (title) {
      setTitleError("");
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value);
    if (contents) {
      setContentsError("");
    }
  }

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력하세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력하세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력하세요.");
    }
    if (writer && password && title && contents) {
      try {
        const board = {
          writer,
          password,
          title,
          contents,
        };

        const result = await axios.post(
          "http://backend-example.codebootcamp.co.kr/board",
          board
        );
        console.log(result); //제대로된 결과
        router.push(`/boards/detail`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            onChange={onChangeWriter}
            type="text"
            placeholder="이름을 적어주세요."
          />
          <ErrorMsg>{writerError}</ErrorMsg>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            onChange={onChangePassword}
            type="password"
            placeholder="비밀번호를 작성해주세요."
          />
          <ErrorMsg>{passwordError}</ErrorMsg>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          onChange={onChangeSubject}
          type="text"
          placeholder="제목을 작성해주세요."
        />
        <ErrorMsg>{titleError}</ErrorMsg>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          onChange={onChangeContents}
          placeholder="내용을 작성해주세요."
        />
        <ErrorMsg>{contentsError}</ErrorMsg>
      </InputWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
