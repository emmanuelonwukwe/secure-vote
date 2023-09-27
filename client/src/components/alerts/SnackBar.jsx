import Success from "./Success";
import Failed from "./Failed";
import Warning from "./Warning";

// eslint-disable-next-line react/prop-types
export default function SnackBar({ message, type }) {
  let alertBox = undefined;
  const messageType = type.toString().toLowerCase();

  switch (messageType) {
    case "success":
      alertBox = <Success message={message} />;
      break;
    case "failed":
      alertBox = <Failed message={message} />;
      break;
    case "warning":
      alertBox = <Warning message={message} />;
      break;
    default:
      break;
  }

  // handle snackbar modal closing
  const closeSnackBar = () => {
    const snackBar = document.getElementById("snackbar");
    snackBar.classList.add("hidden");
    snackBar.classList.remove("block");
  }

  return alertBox && type && message ? (
    <div id="snackbar"
    onClick={closeSnackBar}
    className="fixed z-50 bottom-0 right-0 w-full flex justify-center items-center bg-primary pt-5">
      {alertBox}
    </div>
  ) : (
    <></>
  );
}
