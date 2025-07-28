"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Replace this import with your actual modal/dialog component
import FeedbackModal from "../feedback/feedbackClient"; // Adjust the path as needed
import Image from "next/image";
// import Feedback from "./feedback/page";

const KioskHome = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Box display='flex' height='70vh' paddingX={5} marginY={2} marginBottom='200px'>
      <Grid container  alignItems='start' justifyContent='start'  sx={{backgroundImage: "url(/EnvDay3.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // or 'contain' depending on your needs
            backgroundPosition: "center"}}>
        <Grid item xs={12} sm={6} md={3} height='300px' padding={3}>
          <Button
            onClick={() => router.push("/opd")}
            sx={{
              width: "100%",
              boxShadow: 5,
              backgroundColor: "purple",
              borderRadius: 5,
              height: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            
          >
            <Typography color="white" variant="h4" fontWeight="bold">
              OPD Doctors
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3} height='300px' padding={3}>
          <Button
            onClick={() => router.push("/doctorsDirectory")}
            sx={{
              width: "100%",
              boxShadow: 5,
              backgroundColor: "purple",
              borderRadius: 5,
              height: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white" variant="h4" fontWeight="bold">
              Doctor's Directory
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3} height='300px' padding={3}>
          <Button
            onClick={() => router.push("/doctorslider")}
            sx={{
              width: "100%",
              boxShadow: 5,
              backgroundColor: "purple",
              borderRadius: 5,
              height: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white" variant="h4" fontWeight="bold">
              Our Doctors
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3} height='300px' padding={3}>
          <Button
            onClick={() => router.push("/ourPartners")}
            sx={{
              width: "100%",
              boxShadow: 5,
              backgroundColor: "purple",
              borderRadius: 5,
              height: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white" variant="h4" fontWeight="bold">
              Corporate Empanelment
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3} height='300px' padding={3}>
          <Button
            onClick={() =>
              router.push(
                "https://accfapp.in/feedback_form_kiosk?form_type=IPD&&code=1"
              )
            }
            sx={{
              width: "100%",
              boxShadow: 5,
              backgroundColor: "purple",
              borderRadius: 5,
              height: "30vh",
              flexDirection:'column',
              display: "flex",
              alignItems: "center",
              position:'relative',
              justifyContent: "center",
            }}
          >
           {/* <Image src="/SCI Feedback Form.png" alt="logo" width={150} height={150} />*/}
            <Typography color="white" variant="h5" fontSize="30px" fontWeight="bold" 
            // sx={{position:'absolute', bottom:'0', marginBottom:'20px'}}
            >
              Feedback/ Suggestion
            </Typography>
          </Button>
        </Grid>
      </Grid>

      {/* ✅ Feedback modal/dialog */}
      <FeedbackModal open={open} handleClose={handleClose} />
    </Box>
    </>
  );
};

export default KioskHome;
