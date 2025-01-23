import styled from "styled-components";

export const Label = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
`

export const FormContainer = styled.div`
  border-radius: 5px;
  background-color: rgb(252, 127, 127);
  padding: 20px;
  margin-top:10px;
  border:1px solid black;
`

export const LabelHolder = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
  @media (max-width: 420px) {
      width: 100%;
      margin-top: 0;
  }
`;

export const FieldHolder = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
  @media (max-width: 420px) {
      width: 100%;
      margin-top: 0;
  }
`;

export const RowHolder = styled.div`
    &:after{
      content: "";
      display: table;
      clear: both;
    }
`; //need to add pseudo-class after

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`

export const SubmitButton = styled.input`
  background-color: rgb(252, 127, 127);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display:block;
  margin: auto;
  margin-top: 10px;
  border: 2px solid black;
  text-align: center;
  &:hover {
    background-color: rgb(245, 101, 101);
  }
`

export const SubmitButtonNew = styled.button`
  background-color: rgb(252, 127, 127);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display:block;
  margin: auto;
  margin-top: 10px;
  border: 2px solid black;
  text-align: center;
  &:hover {
    background-color: rgb(245, 101, 101);
  }
`