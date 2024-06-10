import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { AssignmentType } from "../../App";

interface AssignmentProps {
  assignment: AssignmentType;
  index: number;
  deleteAssignment: (index: number) => void;
  toggleCompletion: (index: number) => void;
}

export function Assignment({
  assignment,
  index,
  deleteAssignment,
  toggleCompletion,
}: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() => toggleCompletion(index)}
      >
        {assignment.completed ? (
          <BsCheckCircleFill size={20} />
        ) : (
          <div />
        )}
      </button>

      <p className={assignment.completed ? styles.textCompleted : ""}>
        {assignment.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => deleteAssignment(index)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
