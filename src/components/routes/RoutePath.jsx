import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import ContactUS from "../../pages/contactUS/ContactUS";
import OurStory from "../../pages/ourStory/OurStory";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Help from "../../pages/help/Help";
import AvailbleFood from "../../pages/availbleFood/AvailbleFood";
import UploadFood from "../../pages/uploadFood/UploadFood";

export default function RoutePath() {
  return (
    <div className="routePath">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/help" element={<Help />} />
        <Route path="/availbleFood" element={<AvailbleFood />} />
        <Route path="/uploadFood" element={<UploadFood />} />
      </Routes>
    </div>
  );
}
