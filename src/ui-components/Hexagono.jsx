
export default ({ children, timeout, aos }) => {
  return (
    <div className="hexagono" data-aos={aos} data-aos-duration={timeout}>
      <div
        style={{
          position: "absolute",
          zIndex: "1000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: -10,
        }}
      >
        {children}
      </div>
    </div>
  );
};
