import TextField from "@mui/material/TextField";
import { useState } from "react";

function MyTextfield() {
  const [input, setInput] = useState<string>("startWert"); 

  return (
    <>
      <div>Name: {input}</div>
      <TextField
        label="Filled"
        color="secondary"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
    </>
  );
}

export default MyTextfield;
