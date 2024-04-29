import * as React from "react";
import { SVGProps } from "react";

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    {...props}>
    <path
      d="M10 2.5c1.375 0 2.5 1.125 2.5 2.5S11.375 7.5 10 7.5A2.507 2.507 0 0 1 7.5 5c0-1.375 1.125-2.5 2.5-2.5ZM10 15c3.375 0 7.25 1.613 7.5 2.5h-15c.288-.9 4.138-2.5 7.5-2.5Zm0-15C7.237 0 5 2.237 5 5s2.237 5 5 5c2.762 0 5-2.237 5-5s-2.238-5-5-5Zm0 12.5c-3.338 0-10 1.675-10 5V20h20v-2.5c0-3.325-6.662-5-10-5Z"
      fill="#707480"
    />
  </svg>
);

export default ProfileIcon;
