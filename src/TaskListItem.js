import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
  text-align: left;
`;

const CompleteButton = styled.button`
  background: bisque;
  border-radius: 10px;
`;

function TaskListItem({ children }) {
  return (
    <Container>
      {children}
      <CompleteButton>Done</CompleteButton>
    </Container>
  );
}

export default TaskListItem;
