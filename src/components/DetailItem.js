import Grid from "@mui/material/Grid";
import classes from "./Profile.module.css";
function DetailItem(props) {
  return (
    <div>
      <Grid
        container
        spacing={1}
        style={{
          margin: "auto",
          justifyContent: "center",
          background: "whitesmoke",
        }}
      >
        <Grid item xs={5} style={{ display: "flex", justifyContent: "center" }}>
          <h3 className={classes.leftDetail}>{props.title}</h3>
        </Grid>
        <Grid
          item
          xs={0.5}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h3 className={classes.colon}>:</h3>
        </Grid>
        <Grid item xs={5}>
          <h3 className={classes.rightDetail}>{props.desc}</h3>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailItem;
