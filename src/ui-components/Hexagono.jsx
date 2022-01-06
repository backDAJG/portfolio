import { Tooltip } from "@mui/material";

export default ({ children, timeout, aos, title }) => {
  return (
    <Tooltip title={title}>
      <div className="hexagono" data-aos={aos} data-aos-duration={timeout}>
        <div
          style={{
            position: "absolute",
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: -10,
            cursor: 'pointer'
          }}
        >
          {children}
        </div>
      </div>
    </Tooltip>
  );
};
