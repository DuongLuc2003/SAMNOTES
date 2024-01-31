import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Box,
  Checkbox,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
  Drawer
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { convertColor } from "../../constants";
import { Header } from "antd/es/layout/layout";
import noteApi from "../../api/noteApi";
import userApi from "../../api/userApi";
import ToolsNote from "../ToolsNote";
import SideBar from "../../components/SideBar";
import EditForm from "../../features/Archived/EditForm";
import "./Note.css"
const Note = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const { noteId } = useParams();
  const [drawerEdit, setDrawerEdit] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const clipboard = (e) => {
    navigator.clipboard.writeText("http://samnotes.online/note/" + noteId);
    enqueueSnackbar("Copied to Clipboard", { variant: "success" });
    handleClose();
  };

  useEffect(() => {
    noteApi.getPublicNote(noteId).then((res) => {
      if (res.status == "200") {
        console.log(res.note);
        setData(res.note);
        const userId = res.note.idUser;
        console.log(userId);

        userApi
          .profile(userId)
          .then((response) => {
            const profileData = response.user;
            setProfile(profileData);
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

  const handleNoteForm = async (value) => {
    
  };

  return (
    <>
      <SideBar />
      {data && data ? (
        <div className={`flex-grow absolute top-0 right-0 p-[2%] overflow-auto w-[calc(100vw-250px)] h-full bg-[${convertColor(data.color)}]`}>
          {/* <div className="text-[20px] pb-2 border-b-2 border-black mb-5">{data.title}</div>
          {data.type !== "checklist" ? (
            <Box>{data.data}</Box>
          ) : (
            <Box>
              {data.data.map((item, index) => {
                <Box key={index}>
                  <Checkbox disabled checked={item.status} />
                  {item.content}
                </Box>;
              })}
            </Box>
          )} */}
          <Drawer
      // variant='persistent'
      className='box-container'
      id='wapperEditNote'
      anchor='right'
      variant="permanent"
      sx={{
        '& .css-12r3w90-MuiDrawer-docked .MuiDrawer-paper': { boxSizing: 'border-box', width: "calc(100% - 250px)"},
        '.css-10y9h7e-MuiButtonBase-root-MuiIconButton-root': { display:'none'}
        // [`.MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight css-18sg6k4-MuiPaper-root-MuiDrawer-paper`]: {
        //   display: "block",
        //   width: "calc(100% - 150px)",
        //   boxSizing: "border-box",
        //   height: 101 ? 100 + "%" : "calc(100% - 65px)",
        //   visibility: "visible !important",
        //   transform: "translateX(0) !important",
        //   // top: 30 + "px",
        //   // top: toggleNote ? 220 + "px" : 0,
        // },
      }}
    >
<EditForm
            dataItem={data} 
            handleDelNote={handleNoteForm} 
            setArchivedData={handleNoteForm}
            className="edit-form"
          />
    </Drawer>
          
          {/* <ToolsNote
            type='Edit'
            options={""}
            handleChangeNote={""}
            handleOptionsNote={""}
            handleDelNote={""}
            handleNoteForm={''}
            dataItem={""}
          /> */}
          {data.type === "image" && (
            <Box>
              <img src={data.metaData} alt='' style={{ width: "100%", objectFit: "contain" }} />
            </Box>
          )}

          {/* <Button sx={{ marginTop: "30px" }} variant='contained' onClick={handleClickOpen}>
            Share
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Share</DialogTitle>
            <DialogContent>
              <TextField
                id='name'
                type='text'
                fullWidth
                variant='standard'
                disabled
                value={"http://samnotes.online/note/" + noteId}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={clipboard}> COPY URL</Button>
            </DialogActions>
          </Dialog> */}
        </div>
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "50%",
            padding: "12px",
            fontSize: "60px",
          }}
        >
          Private
        </Box>
      )}
    </>
  );
};

export default Note;
