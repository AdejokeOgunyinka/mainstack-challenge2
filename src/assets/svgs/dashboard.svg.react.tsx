import React, { SVGProps } from "react";

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_184_2199"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_184_2199)">
      <path
        d="M11.2499 7.50001V3.33334H16.6666V7.50001H11.2499ZM3.33325 10V3.33334H8.74992V10H3.33325ZM11.2499 16.6667V10H16.6666V16.6667H11.2499ZM3.33325 16.6667V12.5H8.74992V16.6667H3.33325ZM4.16659 9.16668H7.91658V4.16668H4.16659V9.16668ZM12.0833 15.8333H15.8333V10.8333H12.0833V15.8333ZM12.0833 6.66668H15.8333V4.16668H12.0833V6.66668ZM4.16659 15.8333H7.91658V13.3333H4.16659V15.8333Z"
        fill="#4D5760"
      />
    </g>
  </svg>
);

export default DashboardIcon;
