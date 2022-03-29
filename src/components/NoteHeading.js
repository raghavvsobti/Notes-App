import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NewNoteDialog from "./NewNoteDialog";
import Note from "./Note";
import { authContext } from "../context";
import { useContext, useEffect, useState } from "react";

const head = {
  display: "flex",
  justifyContent: "center",
  borderBottom: "2px solid black",
  margin: "10px",
  background: "rgba(255, 255, 255, 0.2)",
};

const style = {
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "1%",
  //   alignItems: "center",
  width: "100%",
  marginLeft: "2%",
  marginTop: "1%",
};

function NoteHeading() {
  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "Note 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ]);
  const { user, setUser } = useContext(authContext);

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const openModal = () => {
    dispatch({ type: "newNote" });
  };
  const close = () => {
    dispatch({ type: "closeModal" });
  };

  useEffect(() => {}, [notes]);

  return (
    <>
      <div style={head}>
        <h1 style={style}>Saved Notes</h1>
        <Link to="/profile">
          <h3
            style={{
              marginTop: "32px",
              marginRight: "1%",
              textDecoration: "none",
              color: "black",
              outline: "none",
            }}
          >
            Profile
          </h3>
        </Link>
        <Link to="/">
          <h3
            onClick={() => setUser(null)}
            style={{
              marginTop: "32px",
              marginRight: "1%",
              textDecoration: "none",
              color: "black",
              outline: "none",
              paddingLeft: "10px",
            }}
          >
            Logout
          </h3>
        </Link>

        <Tooltip title="Add New Note">
          <IconButton onClick={openModal}>
            <AddBoxIcon
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                color: "black",
                width: "50px",
                height: "50px",
                marginTop: "5%",
              }}
            />
          </IconButton>
        </Tooltip>
      </div>
      <NewNoteDialog open={modal} onClose={close} array={notes} />
      {notes.map((item, index) => {
        return (
          <Note title={item.title} desc={item.desc} key={index} array={notes} />
        );
      })}
    </>
  );
}

export default NoteHeading;
