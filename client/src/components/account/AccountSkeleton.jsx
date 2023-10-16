/* eslint-disable react/prop-types */
import { useAuth } from "../../contexts/AuthContext";
import LeftSide from "./LeftSide";
import { BACKEND_SITE } from "../../config/app";
import axiosRequest from "../../requests/axios-request";
import { useCallback, useState } from "react";

export default function AccountSkeleton({ pageName, children }) {
    const { user, login } = useAuth();
    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = useCallback((e) => {
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append('profile_photo', selectedFile);
        formData.append("old_photo_basename", user.profile_image);

        axiosRequest
            .post('/users/update/profile-photo', formData, {
                headers: {
                    token: localStorage.getItem("jwt_token")
                }
            })
            .then((response) => {
                // Set the Updated user now as the new token owner
                localStorage.removeItem("jwt_token");
                localStorage.setItem("jwt_token", response.data.token);
                login(response.data.user);
                setIsUploading(false);
            })
            .catch((xhr) => {
                alert(xhr.response.data.message);
                setIsUploading(false);
                //console.error(xhr);
                // Handle error, e.g., show an error message
            });
    }, [user]);

    return (
        <div className="grid grid-cols-4 gap-6 mx-3">
            <div className="col-span-4 sm:col-span-2 md:col-span-1">
                <LeftSide />
            </div>
            <div className="col-span-4 sm:col-span-2 md:col-span-3">
                <div className="flex gap-2 mb-8">
                    <div className="py-1 w-full px-4 rounded-lg bg-white">
                        <p className="italic">Fullname: <span className="text-blue-400">{user.first_name}</span></p>
                        <p className="italic text-sm sm:text-md mt-2">Email: {user.email}</p>
                    </div>
                    <label htmlFor="user-photo" className={`text-center hover:cursor-pointer" ${isUploading && 'animate-spin'}`}>
                        <img
                            src={user.profile_image ? `${BACKEND_SITE}/uploads/profile-photos/${user.profile_image}` : "/images/user-icon.jpg"}
                            className="w-10 h-10 rounded-full"
                            alt=""
                        />
                        <i>{user.role}</i>
                    </label>
                    <input type="file" accept=".jpg,.png,.svg,.jpeg" id="user-photo" onChange={handleUpload} hidden />
                </div>
                <div className="flex gap-5 mb-8">
                    <img src="/images/vector9.svg" className="bg-dark-blue w-8 h-8" />
                    <span className="font-bold text-2xl">{pageName}</span>
                </div>
                {children}
            </div>
        </div>
    );
}
