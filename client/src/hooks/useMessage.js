import { useState } from "react";

export default function useMessage() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  // handle snackbar modal closing
  const openSnackBar = () => {
    // Delay this a bit to avoid error Reading property of null
    setTimeout(() => {
        const snackBar = document.getElementById("snackbar");
        snackBar.classList.remove("hidden");
        snackBar.classList.add("block");
    }, 1);
  };

  return { message, setMessage, openSnackBar, type, setType };
}
