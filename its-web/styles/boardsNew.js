// import styled from "@emotion/styled";

// export const Wrapper = styled.div`
//   width: 1200px;
//   display: flex;
//   flex-direction: column;
//   padding: 0px 100px;
// `;

// export const Title = styled.h1`
//   text-align: center;
// `;

// export const Label = styled.label`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// export const Identify = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
//   width: 100%;
// `;

// export const IdentifyDiv = styled.div`
//   width: 49%;
// `;

// export const InputDiv = styled.div`
//   margin-bottom: 20px;
//   width: 100%;
// `;

// export const Input = styled.input`
//   margin-bottom: 10px;
//   width: 100%;
//   height: 40px;
//   border-color: 1px solid #bdbdbd;
// `;

// export const LargeInput = styled.input`
//   width: 100%;
//   height: 300px;
//   border-color: 1px solid #bdbdbd;
// `;

// export const AddressDiv = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// export const AddressInput = styled.input`
//   width: 50px;
//   height: 30px;
//   margin-right: 5px;
// `;

// export const AddressBtn = styled.button`
//   width: 100px;
//   height: 35px;
//   background-color: black;
//   color: white;
// `;

// export const ImgDiv = styled.div`
//   display: flex;
// `;

// export const UploadImg = styled.div`
//   width: 70px;
//   height: 70px;
//   background-color: gray;
//   margin-right: 10px;
// `;

// export const Btn = styled.button`
//   width: 150px;
//   height: 50px;
//   background-color: #ffd600;
//   color: black;
//   font-weight: bold;
//   border: none;
//   margin-left: 500px;
// `;
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 34px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  background-color: yellow;
`;

export const ErrorMsg = styled.div`
  color: red;
`;
