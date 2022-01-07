import { Tooltip } from "@mui/material";

export default ({ children, title, id }) => {
  return (
    <Tooltip title={title}>
      <div className="hexagono" id={id}>
        <div
          style={{
            position: "absolute",
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: -10,
            cursor: "pointer",
          }}
        >
          {children}
        </div>
      </div>
    </Tooltip>
  );
};
