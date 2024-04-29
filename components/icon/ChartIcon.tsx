import * as React from "react";

const Chart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 150 150"
    fill="none"
    {...props}>
    <circle
      cx={75}
      cy={75}
      r={70}
      stroke="#0466C8"
      strokeOpacity={0.4}
      strokeWidth={10}
    />
    <mask id="prefix__a" fill="#fff">
      <path d="M75 12.656c0-1.812 1.47-3.29 3.28-3.199a65.624 65.624 0 0 1 4.11 130.751c-1.802.204-3.362-1.179-3.475-2.987-.114-1.809 1.262-3.358 3.061-3.572a59.064 59.064 0 0 0-3.696-117.62c-1.81-.101-3.28-1.56-3.28-3.373Z" />
    </mask>
    <path
      d="M75 12.656c0-1.812 1.47-3.29 3.28-3.199a65.624 65.624 0 0 1 4.11 130.751c-1.802.204-3.362-1.179-3.475-2.987-.114-1.809 1.262-3.358 3.061-3.572a59.064 59.064 0 0 0-3.696-117.62c-1.81-.101-3.28-1.56-3.28-3.373Z"
      stroke="#0466C8"
      strokeWidth={16}
      mask="url(#prefix__a)"
    />
  </svg>
);

export default Chart;
