import React from "react";

import SidebarDropdown from "./components/SidebarDropdown/SidebarDropdown";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

export default function Sidebar() {
  return (
    <div>
      <SidebarDropdown />
      <SidebarMenu />
    </div>
  );
}
