import React from "react";
import { Route, Routes } from "react-router-dom";
import Macbook from "./COMPUTERS/Mackbook/Macbook";
import Mobiles from "./COMPUTERS/Mobiles/Mobiles";
import LaptopAccessories from "./COMPUTERS/Laptop_Accessories/LaptopAccessories";
import Printers from "./COMPUTERS/Printers/Printers";
import GamingAccessories from "./COMPUTERS/Gaming_Accessories/GamingAccessories";
import Scanners from "./COMPUTERS/Scanners/Scanners";
import ComputerComponents from "./COMPUTERS/Computer_Components/ComputerComponents";
import DataStorage from "./COMPUTERS/Data_Storage/DataStorage";
import ExternalComponents from "./COMPUTERS/External_Components/ExternalComponents";
import NetworkingProducts from "./COMPUTERS/Networking_Products/NetworkingProducts";
import PowerStripsSurgeProtectors from "./COMPUTERS/Power_Strips_Surge_Protectors/PowerStripsSurgeProtectors";
import Servers from "./COMPUTERS/Servers/Servers";
import Monitors from "./COMPUTERS/Monitors/Monitors";
import TabletAccessories from "./COMPUTERS/Tablet_Accessories/TabletAccessories";

const Computer = () => {
  return (
    <>
    {/* Electronic and tech Products categories Routes  */}
      <Routes>
        <Route path="/Macbook" element={<Macbook />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/Laptop-Accessories" element={<LaptopAccessories />} />
        <Route path="/Gaming-Accessories" element={<GamingAccessories />} />
        <Route path="/Printers" element={<Printers />} />
        <Route path="/Scanners" element={<Scanners />} />
        <Route path="/Monitors" element={<Monitors />} />
        <Route path="/Computer-Components" element={<ComputerComponents />} />
        <Route path="/Data-Storage" element={<DataStorage />} />
        <Route path="/External-Components" element={<ExternalComponents />} />
        <Route path="/Networking-Products" element={<NetworkingProducts />} />
        <Route path="/Power-Strips-Surge-Protectors" element={<PowerStripsSurgeProtectors />} />
        <Route path="/Servers" element={<Servers />} />
        <Route path="/Tablet-Accessories" element={<TabletAccessories />} />
      </Routes>
    </>
  );
};

export default Computer;
