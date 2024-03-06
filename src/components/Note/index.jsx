import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";
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
  Drawer,
  IconButton,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { convertColor , checkJWT } from "../../constants";
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
  console.log(profile)
  const { noteId } = useParams();
  console.log(noteId)
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const clipboard = (e) => {
    navigator.clipboard.writeText("http://samnote.mangasocial.online/note/" + noteId);
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
            console.log(response.user.user_Name);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);


const handleNoteForm = async (value) => {
    
};
const backgroundColor = convertColor(data?.color);
useEffect(() => {
  if (data && data?.color) {
      const convertedColor = convertColor(data?.color);
      console.log("Converted color:", convertedColor);
  }
}, [data]);

  return (
    <>
      <SideBar />

      {checkJWT() && data && data.notePublic === 1 ? (
  // Hiển thị EditForm nếu không phải checkJWT và data là public
  <div className="ml-40">
    <div className="w-[calc(100vw-120px)]">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "",
        }}
      >
        <img
          style={{
            width: "70px",
          }}
          src="../../../assets/home-icon.png"
          alt="homeicon"
        />
        <span
          style={{
            color: "#6A53CC",
            fontSize: "30px",
            fontWeight: 800,
            marginLeft: "10px",
          }}
        >
          Note Share
        </span>
      </Box>
    </div>

    <div
      className={`rounded-lg absolute top-0 right-7 p-[2%] w-[calc(100vw-310px)] min-h-[calc(100vw-810px)] bg-[${backgroundColor}] mt-20`}
    >
      <div className="text-[20px] pb-2 border-b-2 border-black mb-5 font-bold">
        {data.title}
      </div>
      {data.type !== "checklist" ? (
        <Box sx={{ whiteSpace: "pre-wrap" }}>{data?.data}</Box>
      ) : (
        <Box>
          {data?.data.map((item, index) => (
            <Box key={index}>
              <Checkbox disabled checked={item.status} />
              {item.content}
            </Box>
          ))}
        </Box>
      )}
      {data.type === "image" && (
        <Box className="hihi">
          <img
            src={data.metaData}
            alt=""
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Box>
      )}
      {data && profile && (
        <div className="absolute bottom-0 right-0 mr-2 mb-2">
          <Typography>
            <span>Created By:</span>
            <Link to={`/profile/${profile.id}`}>{profile.user_Name}</Link>
          </Typography>

          <Typography>
            <span>Time:</span> {data.createAt}
          </Typography>
        </div>
      )}
    </div>
  </div>
) : !checkJWT() ? (

<Drawer
      // variant='persistent'
      className='box-container'
      id='wapperEditNote'
      anchor='right'
      variant="permanent"
      sx={{
        '#wapperEditNote .MuiDrawer-paper': { 
          boxSizing: 'border-box', 
          width: "calc(100% - 250px)"
        },
        '#pinnedIcon': { 
          display: 'none'
        },
        '#keyboardarrowright':{
          display: 'none'
        },
        // '.box-tool':{
        //   display: 'none'
        // }
      }}
    >
          <EditForm
            dataItem={data} 
            handleDelNote={handleNoteForm} 
            setArchivedData={handleNoteForm}
            className="edit-form"
          />
          {/* <ToolsNote
            type='Edit'
            options={""}
            handleChangeNote={""}
            // handleOptionsNote={""}
            handleDelNote={""}
            handleNoteForm={''}
            dataItem={""}
          /> */}
    </Drawer>
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
