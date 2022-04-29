export const Home = ({ onAuth }) => {
  return (
    <>
      <div
        style={{
          gap: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Home
        </h2>
        <button onClick={onAuth}>Auth</button>
      </div>
    </>
  );
};
