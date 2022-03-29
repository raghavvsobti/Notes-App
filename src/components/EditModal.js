import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

function EditNoteModal(props) {
  const editNote = () => {
    props.onEditNote(formik.values);
    props.onClose();
  };

  console.log(props);

  const deleteNote = () => {
    props.onDeleteNote();
    props.onClose();
  };

  const NoteSchema = Yup.object().shape({
    title: Yup.string().required("Please enter title"),
    desc: Yup.string().required("Please enter note description"),
  });

  const formik = useFormik({
    initialValues: {
      title: props.title,
      desc: props.desc,
    },
    enableReinitialize: true,
    onSubmit: editNote,
    validationSchema: NoteSchema,
  });

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle style={{ display: "flex", justifyContent: "center" }}>
        Edit {props.selected} Note!
      </DialogTitle>
      <hr style={{ margin: "10px" }} />
      <DialogContent>
        <FormikProvider value={formik}>
          <Form>
            <TextField
              style={{
                width: "100%",
                display: "flex",
                marginTop: "10px",
                margin: "10px",
              }}
              variant="outlined"
              type="text"
              name="title"
              label="Title"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              error={formik.touched.title && formik.errors.title ? true : false}
              helperText={
                formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : ""
              }
            />

            <TextField
              style={{
                width: "100%",
                display: "flex",
                marginTop: "10px",
                margin: "10px",
              }}
              multiline
              rows={3}
              variant="outlined"
              type="text"
              name="desc"
              label="Description"
              id="desc"
              onChange={formik.handleChange}
              value={formik.values.desc}
              onBlur={formik.handleBlur}
              error={formik.touched.desc && formik.errors.desc ? true : false}
              helperText={
                formik.touched.desc && formik.errors.desc
                  ? formik.errors.desc
                  : ""
              }
            />

            <Button
              variant="outlined"
              fullWidth
              type="submit"
              style={{ marginLeft: "10px", marginBottom: "5px" }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              fullWidth
              style={{ marginLeft: "10px" }}
              color="error"
              onClick={deleteNote}
            >
              Delete Note
            </Button>
          </Form>
        </FormikProvider>
      </DialogContent>
    </Dialog>
  );
}

export default EditNoteModal;
