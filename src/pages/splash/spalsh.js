const styles = {
  splash: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    background: "#2e323f",
    h1: {
      color: "#AAA",
      contentAlign: "center"
    }
  }
};
function loadData() {
  console.log("load");
}
function Splash() {
  return <div style={styles.splash}>Загрузка</div>;
}
export default Splash;
