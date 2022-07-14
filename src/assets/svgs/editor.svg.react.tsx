import React, { SVGProps } from "react";

const EditorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_184_2613"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_184_2613)">
      <path
        d="M3.58325 16.6667V14.5834L14.2916 3.89587C14.4444 3.72921 14.6388 3.64587 14.8749 3.64587C15.111 3.64587 15.3124 3.72921 15.4791 3.89587L16.3541 4.79171C16.5208 4.94449 16.6041 5.13893 16.6041 5.37504C16.6041 5.61115 16.5208 5.81254 16.3541 5.97921L5.66659 16.6667H3.58325ZM14.5624 6.58337L15.7708 5.37504L14.8749 4.47921L13.6666 5.68754L14.5624 6.58337Z"
        fill="#4D5760"
      />
    </g>
  </svg>
);

export default EditorIcon;
