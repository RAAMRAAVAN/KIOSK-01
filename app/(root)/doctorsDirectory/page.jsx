import { Box, Button, Grid, Typography } from "@mui/material";
// import { color3 } from '../../(components)/Global';
import ContentSlider from "./Slider";

const Floors = [
    {
        id: 1,
        floor: "GROUND FLOOR",
        Departments: [{ label: "Radiation Oncology" }]
    },
    {
        id: 2,
        floor: "SECOND FLOOR",
        Departments: [{ label: "Surgical Oncology" }]
    },
    {
        id: 3,
        floor: "THIRD FLOOR",
        Departments: [
            { label: "Medical Oncology" },
            { label: "Head and Neck Oncology" },
            // { label: "Hemato Oncology" },
        ]
    }
]

const DoctorsDirectory = () => {
    return (<>
        <Box display='flex' width='100%' justifyContent='center' height='100vh'>
            <Box display='flex' width='100%' height='90vh' alignItems='center' flexDirection='column' sx={{
                overflow: 'hidden',
                boxShadow:3,
                position:'relative',
                // Pseudo-element for background blur
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    width:'100%',
                    height:'100%',
                    left: 0,
                    backgroundImage: "url(/background.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: 'blur(10px)',
                    zIndex: 0,
                }, borderRadius: '10px',}}>
            <Typography textAlign='center' marginTop={5} fontWeight='bold' variant="h3" color="rgb(0, 49, 83)" position='relative'>Doctor's Directory</Typography>
            {/* <Box display='flex' height='20vh'></Box> */}
            <ContentSlider Floors={Floors} />
        </Box>
    </Box >
    </>)
}
export default DoctorsDirectory;