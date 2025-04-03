import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";

import Home from "../src/Components/Home/Home";
import HomeBosh from "../src/Components/Home/HomeBosh/HomeBosh";
import HomeSea from "../src/Components/Home/HomeSea/HomeSea";
import HomeUni from "../src/Components/Home/HomeUniver/HomeUni";
import Admin from "../src/Components/Admin/Admin";
import AdminBosh from "../src/Components/Admin/AdminBosh/AdBosh";
import AdminStudent from "../src/Components/Admin/AdminStudent/AdStu";
import AdminUniversitet from "../src/Components/Admin/AdminUniver/AdUni";
import Student from "./Components/Student/Student";
import StuMeneg from "./Components/Student/StuMeneg/StuMen";
import StuProfil from "./Components/Student/StuProfil/StuProfil";
import StuShart from "./Components/Student/StuShart/StuShart";
import StuUni from "./Components/Student/StuUni/StuUni";
import Universitet from "./Components/Universitet/Universitet";
import UniBosh from "./Components/Universitet/UniBosh/UniBosh";
import UniDan from "./Components/Universitet/UniDan/UniDan";
import UniOvoz from "./Components/Universitet/UniOvoz/UniOvoz";
import UniStu from "./Components/Universitet/UniStu/UniStu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBosh />} />
          <Route path="/Home/seachr" element={<HomeSea />} />
          <Route path="/Home/uni" element={<HomeUni />} />
        </Route>
        <Route path="/Admin" element={<Admin />}>
          <Route index element={<AdminBosh />} />
          <Route path="/Admin/student" element={<AdminStudent />} />
          <Route path="/Admin/universitet" element={<AdminUniversitet />} />
        </Route>
        <Route path="/Student" element={<Student />}>
          <Route index element={<StuProfil />} />
          <Route path="/Student/universitet" element={<StuUni />} />
          <Route path="/Student/Meneg" element={<StuMeneg />} />
          <Route path="/Student/shart" element={<StuShart />} />
        </Route>
        <Route path="/Universitet" element={<Universitet />} >
          <Route index element={<UniBosh />} />
          <Route path="/Universitet/dan" element={<UniDan />} />
          <Route path="/Universitet/ovoz" element={<UniOvoz />} />
          <Route path="/Universitet/student" element={<UniStu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
