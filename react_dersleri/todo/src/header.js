import React, { memo } from "react";

function Header() {
  console.log("Header render edildi");
  return <header>Header</header>;
}
export default memo(Header);
