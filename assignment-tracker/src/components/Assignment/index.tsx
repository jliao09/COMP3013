import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { AssignmentType } from "../../App";

interface AssignmentProps {
  assignment: AssignmentType;
  index: number;
  deleteAssignment: (index: number) => void;
  toggleCompletion: (index: number) => void;
  setDueDate: (index: number, date: Date) => void;
}

export function Assignment({
  assignment,
  index,
  deleteAssignment,
  toggleCompletion,
  setDueDate,
}: AssignmentProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const calculateDueDate = (dueDate: Date) => {
    const today = new Date();
    const timeDiff = dueDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff === 1) {
      return "Due: tomorrow";
    } else if (daysDiff <= 0) {
      return "Due: now";
    } else {
      return `Due: ${daysDiff} days`;
    }
  };

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

      {assignment.dueDate && (
        <div
          className={
            calculateDueDate(new Date(assignment.dueDate)) === "Due: tomorrow"
              ? styles.dueTomorrow
              : styles.dueDate
          }
        >
          {calculateDueDate(new Date(assignment.dueDate))}
        </div>
      )}

      {!assignment.dueDate && (
        <button
          className={styles.dateButton}
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          Set Due Date
        </button>
      )}

      {showDatePicker && (
        <DayPicker
          mode="single"
          selected={assignment.dueDate ? new Date(assignment.dueDate) : undefined}
          onSelect={(date) => {
            if (date) {
              setDueDate(index, date);
              setShowDatePicker(false);
            }
          }}
        />
      )}

      <button
        className={styles.deleteButton}
        onClick={() => deleteAssignment(index)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
