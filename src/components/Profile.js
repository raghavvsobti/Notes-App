import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/index";
import DetailItem from "./DetailItem";
import classes from "./Profile.module.css";

function Profile() {
  const navigate = useNavigate();
  const { user } = useContext(authContext);
  console.log(user);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Tooltip title="Go Back">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon
              className={classes.edit}
              width="40px"
              height="40px"
            />
          </IconButton>
        </Tooltip>

        <h1>User Profile</h1>
        <Tooltip title="Edit Profile">
          <IconButton>
            <EditIcon className={classes.edit} width="40px" height="40px" />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.outerCard}>
        <div className={classes.profileCard}>
          <div className={classes.profilePictureOuter}>
            <img
              src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
              alt="profilePicture"
              width="150"
              height="150"
              className={classes.img}
            />
          </div>

          <DetailItem
            desc={user?.firstName + " " + user?.lastName}
            title="Name"
          />
          <DetailItem desc={user?.email} title="Email" />
          <DetailItem desc={user?.mobileNumber} title="Mobile Number" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
