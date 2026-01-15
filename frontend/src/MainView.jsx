import { useState } from "react";
import Uploader from "./components/Uploader";
import { Typography, Box, Button } from "@mui/material";
import EmailInput from "./components/EmailInput";

function MainView() {
  const [email, setEmail] = useState(null);
  const [file, setFile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileDrop = (file) => {
    // validation
    setFile(file[0]);
  };

  const handleSubmit = () => {
    // api call
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>Please upload a list of emails</Typography>
          <Uploader
            handleFileDrop={handleFileDrop}
            isDisabled={false}
            fileName={file?.name}
          />
          <EmailInput handleEmailChange={handleEmailChange} />
          <Button
            sx={{
              width: {
                xs: "100%",
                md: "fit-content",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default MainView;
