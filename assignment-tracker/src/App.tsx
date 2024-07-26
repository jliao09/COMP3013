import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

export interface AssignmentType {
  title: string;
  completed: boolean;
  dueDate?: Date;
}

function App() {
  const [assignments, setAssignments] = useState<AssignmentType[]>([]);

  const addAssignment = (title: string) => {
    setAssignments([...assignments, {title, completed: false}])
  }

  const deleteAssignment = (index: number) => {
    setAssignments(assignments.filter((_, i) => i != index))
  }

  const toggleCompletion = (index: number) => {
    const newAssignments = assignments.map((assignment, i) =>
      i === index? {...assignment, completed: !assignment.completed } : assignment
    )
    setAssignments(newAssignments);
  }

  const setDueDate = (index: number, date:Date) => {
    const newAssignments = assignments.map((assignment, i) => 
      i === index ? { ...assignment, dueDate: date} : assignment
    );
    setAssignments(newAssignments);
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        deleteAssignment={deleteAssignment} 
        toggleCompletion={toggleCompletion}
        setDueDate={setDueDate}
      />
    </>
  );
}

export default App;
