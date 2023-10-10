import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: auto;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(207, 204, 204, 0.3);
  margin-bottom: 10px;
`;

export const FormTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Error = styled.div`
  color: red;
`;
