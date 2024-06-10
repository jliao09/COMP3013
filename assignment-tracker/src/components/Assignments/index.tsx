import { AssignmentType } from "../../App";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentsProps {
  assignments: AssignmentType[];
  deleteAssignment: (index: number) => void;
  toggleCompletion: (index: number) => void;
}

export function Assignments({
  assignments,
  deleteAssignment,
  toggleCompletion,
}: AssignmentsProps) {
  const completedCount = assignments.filter((assignment) => assignment.completed)
    .length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completedCount} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            index={index}
            assignment={assignment}
            deleteAssignment={deleteAssignment}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </div>
    </section>
  );
}
