import React, { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.66671 13.8154C11.1645 13.8154 14 11.0671 14 7.67691C14 4.28674 11.1645 1.53845 7.66671 1.53845C4.1689 1.53845 1.33337 4.28674 1.33337 7.67691C1.33337 11.0671 4.1689 13.8154 7.66671 13.8154Z"
      stroke="#91989E"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.6667 14.4615L13.3334 13.1692"
      stroke="#91989E"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default SearchIcon;
