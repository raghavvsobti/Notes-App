import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";
import classes from "./Note.module.css";

function Note(props) {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const editNote = (data) => {
    setSelected(props.title);
    dispatch({ type: "editNote" });
  };

  const closeEditNote = () => {
    setSelected(null);
    dispatch({ type: "closeEditModal" });
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <h3 className={classes.heading}>{props.title}</h3>
          <Tooltip title="Edit Note">
            <IconButton onClick={editNote}>
              <EditIcon className={classes.editIcon} />
            </IconButton>
          </Tooltip>
        </div>
        <p className={classes.description}>{props.desc}</p>
      </div>
      <EditModal
        open={selected !== null}
        onClose={closeEditNote}
        title={props.title}
        desc={props.desc}
        array={props.array}
        selected={selected}
        onEditNote={props.onEditNote}
        onDeleteNote={props.onDeleteNote}
      />
    </>
  );
}

export default Note;
