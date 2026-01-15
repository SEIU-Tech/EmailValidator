import { TextField } from "@mui/material";

function EmailInput({ handleEmailChange }) {
  return (
    <>
      <TextField
        type="email"
        label="Email (required)"
        variant="outlined"
        onChange={handleEmailChange}
        sx={{
          marginTop: "10px",
          width: {
            xs: "100%",
            md: "300px",
          },
        }}
      />
    </>
  );
}

export default EmailInput;
