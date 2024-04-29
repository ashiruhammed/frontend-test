import * as React from "react";

const FoodIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 50 50"
    fill="none"
    {...props}>
    <circle cx={25} cy={25} r={23} fill="#F4E9CD" />
    <mask id="prefix__a" fill="#fff">
      <path d="M25 0a25 25 0 0 1 21.653 37.495l-2.165-1.25A22.5 22.5 0 0 0 25 2.5V0Z" />
    </mask>
    <path
      d="M25 0a25 25 0 0 1 21.653 37.495l-2.165-1.25A22.5 22.5 0 0 0 25 2.5V0Z"
      stroke="#C89104"
      strokeWidth={3}
      mask="url(#prefix__a)"
    />
    <path
      d="M34.317 31.771H12V34.4h26.286v-2.629h-3.97Zm2.654-1.314c-.354-5.349-4.271-9.726-9.41-10.79A2.636 2.636 0 0 0 25.143 16a2.636 2.636 0 0 0-2.418 3.667c-5.14 1.064-9.056 5.441-9.41 10.79H36.97ZM25.143 22.02c3.877 0 7.189 2.406 8.543 5.796H16.6c1.354-3.39 4.666-5.796 8.543-5.796Z"
      fill="#C89104"
    />
  </svg>
);

export default FoodIcon;
