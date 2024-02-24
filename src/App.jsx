import "./App.css";
// import Chat from "./pages/Chat";
import Login from "./pages/Login";

function App() {
  return (
    <div className="relative h-screen">
      <div className="bg-[#648ad6] h-[20vh] w-screen"></div>
      <Login />
      {/* <div className="absolute bg-black bg-opacity-10 top-[0px] w-screen h-screen"></div>
      <div className="min-w-[360px] absolute inset-0 m-auto w-[98vw] h-[96vh] bg-white ">
        <Chat />
      </div> */}
    </div>
  );
}

export default App;
