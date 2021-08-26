import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import Cookies from "js-cookie";
import { Add, ArrowBack, Close } from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import {
  addFilesForIncidentByAdmin,
  imageUrl,
} from "../../Api/AdminIncidentsApi";

const UploadImagesAndVideos = () => {
  const { id } = useParams();
  const history = useHistory();
  const [openimg, setopenimg] = useState(false);
  const [file, setfile] = useState([]);
  const [seeFiles, setseeFiles] = useState(undefined);

  const headers = {
    authorization: `Bearer ${Cookies.get("admin")}`,
  };
  // onChangeFile
  const onChangeFile = (e) => {
    setfile(e.target.files[0]);
  };

  // 0.uploadImage api
  const uploadImage = async (e, userid) => {
    e.preventDefault();
    const fdata = new FormData();
    fdata.append("image", file);
    const { data } = await axios.patch(
      `${addFilesForIncidentByAdmin(userid)}`,
      fdata,
      {
        headers,
      }
    );
    console.log(data.data.files);
    setseeFiles(data.data.files);

    if (data.success) {
      //   setrefresh(!refresh);
      toast.success("File uploaded successfully");
      setopenimg(false);
    }
  };
  return (
    <div>
      <Toaster />
      <Dialog open={openimg} onClose={() => setopenimg(false)}>
        <DialogTitle>
          Upload a Video or Image
          <form
            encType="multipart/form-data"
            onSubmit={(e) => uploadImage(e, id)}
          >
            <input type="file" name="image" onChange={onChangeFile} />
            <input type="submit" />
          </form>
        </DialogTitle>
      </Dialog>
      {/* interface */}
      <Box mt={5}>
        <Container maxWidth="md">
          <Box>
            <Paper style={{ borderRadius: 0, padding: 15 }} elevation={7}>
              <Typography variant="h5" color="primary">
                Add Image/A Video
              </Typography>
              <Divider />
              <Typography variant="subtitle2">
                You can Add Image/A Video for this incident that you watched
                during occured incident
              </Typography>
              <Box my={2}>
                <Button
                  startIcon={<Add />}
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: 30 }}
                  onClick={() => setopenimg(true)}
                >
                  Add
                </Button>
                {/* i don't want upload images/ */}
                <br />
                <Button
                  startIcon={<Close />}
                  variant="outlined"
                  color="primary"
                  style={{ borderRadius: 30, marginTop: 15 }}
                  onClick={() => history.push("/posts")}
                >
                  I dont't Want to Upload
                </Button>
                <br />
                <Button
                  startIcon={<ArrowBack />}
                  onClick={() => history.push("/posts")}
                >
                  Go Back
                </Button>
              </Box>
            </Paper>
          </Box>

          <Grid container spacing={2}>
            {/* first line for images */}
            <Grid item md={6}>
              {seeFiles && (
                <Paper
                  elevation={7}
                  style={{ borderRadius: 0, marginTop: 10, padding: 10 }}
                >
                  <Typography variant="h5" color="primary">
                    Your Images files
                  </Typography>
                  {seeFiles &&
                    seeFiles.map((val) =>
                      (() => {
                        var imagesFile = val.type.split("/")[0];
                        if (imagesFile === "image") {
                          return (
                            <img
                              src={`${imageUrl}/${val.path}`}
                              controrls={true}
                              height="50px"
                              width="50px"
                              style={{ border: "1px solid blue", margin: 3 }}
                              alt=""
                            ></img>
                          );
                        }
                      })()
                    )}
                </Paper>
              )}
            </Grid>
            {/* 2nd line for videos */}
            <Grid item md={6}>
              {seeFiles && (
                <Paper
                  elevation={7}
                  style={{ borderRadius: 0, marginTop: 10, padding: 10 }}
                >
                  <Typography variant="h5" color="primary">
                    Your Video files
                  </Typography>
                  {seeFiles &&
                    seeFiles.map((val) =>
                      (() => {
                        var videoFile = val.type.split("/")[0];
                        if (videoFile === "video") {
                          return (
                            <video
                              src={`${imageUrl}/${val.path}`}
                              controrls={true}
                              height="50px"
                              width="50px"
                              style={{ border: "1px solid red", margin: 3 }}
                            ></video>
                          );
                        }
                      })()
                    )}
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default UploadImagesAndVideos;
