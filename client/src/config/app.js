import { REACT_APP_ENV } from "./auto-react-env-only";
const BACKEND_HOST = "same"; // 'https://mybackendapi.onrender.com' | 'same'
const BACKEND_DEV_PORT = 3000;
const BACKEND_API_BASE_URL = "/api/v1"

let productionSiteOrigin;
if (BACKEND_HOST == "same") {
    const url = new URL(location.href);
    const protocol = url.protocol;
    const hostName = url.hostname;
    if (/localhost/.test(hostName)) {
        productionSiteOrigin = `http://localhost:${BACKEND_DEV_PORT}`;
    } else {
        productionSiteOrigin = protocol + "//" + hostName;
    }
} else {
    productionSiteOrigin = BACKEND_HOST;
}

const BACKEND_SITE =
    REACT_APP_ENV == "development"
        ? `http://localhost:${BACKEND_DEV_PORT}`
        : productionSiteOrigin;

export { BACKEND_SITE, BACKEND_API_BASE_URL };