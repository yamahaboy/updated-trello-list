import { ToDoProvider } from "./store/ToDoContext";

import { ToDoForm } from "./containers/ToDoForm/ToDoForm";
import { ToDoList } from "./containers/ToDoList/ToDoList";

import { StyledApp, Container } from "./styles/styles";

function App() {
  return (
    <StyledApp>
      <Container>
        <ToDoProvider>
          <ToDoForm />
          <ToDoList />
        </ToDoProvider>
      </Container>
    </StyledApp>
  );
}

export default App;
