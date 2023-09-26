import DrawerUl from "./DrawerUl";
import CancelIcon from "../icons/CancelIcon";
import useDrawerHelper from "../../hooks/useDrawerhelper";

export default function LeftSide() {
    const { closeDrawer } = useDrawerHelper();

  return (
    <div className="hidden mb-3 sm:block bg-transparent">
      <div
        id="drawer-body-scrolling"
        className="bg-primary w-full h-screen p-4 rounded-2xl dark:bg-gray-800"
      >
        <h5
          id="drawer-body-scrolling-label"
          className="text-base block sm:hidden font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          <i className="text-2xl font-bold bg-gradient-to-tr to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
            <span className="text-softgreen text-3xl">S</span>
            <span className="text-white text-xl">ecure</span>
            <span className="text-softgreen text-xl">V</span>
            <span className="text-white text-xl">ote</span>
          </i>
        </h5>
        <button
          onClick={closeDrawer}
          type="button"
          data-drawer-hide="drawer-body-scrolling"
          aria-controls="drawer-body-scrolling"
          className="text-gray-400 sm:hidden bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CancelIcon />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          {/** Drawer ul */}
          <DrawerUl />
        </div>
      </div>
    </div>
  );
}
