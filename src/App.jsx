import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="bg-transparent flex justify-center lg:m-0 m-5">
      <div className="min-h-screen md:h-auto md:overflow-hidden w-full max-w-[1400px]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 lg:overflow-y-auto flex flex-col items-center">
            <LeftPanel />
          </div>
          <div className="w-full lg:w-2/3 lg:overflow-y-auto lg:h-auto">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
