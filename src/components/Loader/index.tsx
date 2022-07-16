import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";
import { Box } from "@chakra-ui/react";

const Loader = ({ noBg, className }: any) => {
  const override = css`
    border-color: #ffffff;
    position: relative;
  `;
  return (
    <Box justifyContent={"center"} alignItems={"center"}>
      <PuffLoader css={override} size={50} color={"#c91c5a"} />
    </Box>
  );
};

const ProgressBar = ({ width, className }: any) => (
  <div
    className={`progress ${className}`}
    style={{ height: "7px", background: "#E1EBE8" }}
  >
    <div
      className="progress-bar bg-success"
      role="progressbar"
      style={{ width: `${width}%`, height: "7px" }}
      aria-valuenow={width}
      aria-valuemin={width}
      aria-valuemax={100}
    />
  </div>
);

export { ProgressBar };

export default Loader;
