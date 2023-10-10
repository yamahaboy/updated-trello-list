import styled from "styled-components";

import { Button } from "../../components/Button/Button";

export const TodoList = styled.div`
  width: 20rem;
  height: auto;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(207, 204, 204, 0.3);
`;

export const ListTitle = styled.div`
  width: 100%;
  margin-right: 10px;
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const RestoreButton = styled(Button)`
  width: 30%;
`;
