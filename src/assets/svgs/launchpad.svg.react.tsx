import React, { SVGProps } from "react";

const LaunchpadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_184_2666"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_184_2666)">
      <path
        d="M15.0001 18.3333V15.8333H12.5001V15H15.0001V12.5H15.8334V15H18.3334V15.8333H15.8334V18.3333H15.0001ZM2.68758 16.25V11.25H1.66675V10.4167L2.62508 6.25H14.0417L15.0001 10.4167V11.25H13.9792V13.9792H13.1459V11.25H9.35425V16.25H2.68758ZM3.52091 15.4167H8.52092V11.25H3.52091V15.4167ZM2.62508 4.58333V3.75H14.0417V4.58333H2.62508ZM2.50008 10.4167H14.1667L13.3751 7.08333H3.29175L2.50008 10.4167Z"
        fill="#4D5760"
      />
    </g>
  </svg>
);

export default LaunchpadIcon;
