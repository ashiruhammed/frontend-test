import * as React from "react";
import { SVGProps } from "react";

const BudgetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    {...props}>
    <path
      d="M0 6h4.286v14H0V6Zm8-6h4v20H8V0Zm8 11.429h4V20h-4v-8.571Z"
      fill="#0466C8"
    />
  </svg>
);

export default BudgetIcon;
