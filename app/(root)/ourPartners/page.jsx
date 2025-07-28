import { Box, Typography } from "@mui/material";
import ScrollReveal from "../../(components)/Animation/ScrollReveal";
import { Suspense } from "react";
import Partners from "../../(components)/Partners/Partners";

const OurPartners = () => {
    return(<>
    <Box display='flex' width='100%' justifyContent='center'  marginTop={5} height='100vh'>
            <Box display='flex' width='90%' flexDirection='column' marginTop={2}>
              <ScrollReveal animation="grow" sx={{ display: 'inline-block'}}>
                <Box display='flex' width='85vw' justifyContent='center'>
                <Typography variant="h3" fontWeight="bold" marginBottom={3} sx={{ display: 'inline-block', textAlign:'center' }}>
                  Corporate Empanelment
                </Typography>
                </Box>
              </ScrollReveal>
              <Suspense>
                <Partners />
              </Suspense>
            </Box>
          </Box>
    </>)
}
export default OurPartners;