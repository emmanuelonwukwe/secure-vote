import { useContext } from "react";
import DrawaerUl from "../../components/account/DrawerUl";
import CancelIcon from "../../components/icons/CancelIcon";
import useDrawerHelper from "../../hooks/useDrawerhelper";
import { AuthContext } from "../../contexts/AuthContext";


export default function Dashboard() {
  const { closeDrawer } = useDrawerHelper();
  const {user} = useContext(AuthContext);

  return (
    <div className="grid grid-cols-4 gap-6 mx-3">
      <div className="col-span-1 sm:col-span-2 md:col-span-1">
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
              <DrawaerUl />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex flex-wrap justify-around items-center">
          <div className="">
            <p>First partition {JSON.stringify(user)} </p>
          </div>
          <div className="">
            <p>Second partition</p>
          </div>
          <div className="">
            <p>Third partition</p>
          </div>
        </div>
      </div>
    </div>
  );
}
