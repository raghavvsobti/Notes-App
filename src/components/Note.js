import EditModal from "./EditModal";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Note.module.css";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState, useMemo } from "react";

function Note(props) {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const editModal = useSelector((state) => state.editModal);

  const editNote = () => {
    setSelected(props.title);
    dispatch({ type: "editNote" });
  };
  const closeEditNote = () => {
    setSelected(null);
    dispatch({ type: "closeEditModal" });
  };

  useEffect(() => {}, [props.array]);

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
      />
    </>
  );
}

export default Note;
