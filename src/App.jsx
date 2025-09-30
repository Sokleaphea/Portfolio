import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="bg-transparent">
      <div className="flex h-screen">
        <div className="w-1/3 flex flex-col items-center border-r border-[#303030]">
          <LeftPanel />
        </div>
        <div className="w-2/3 overflow-x-hidden">
          <RightPanel />
        </div>
      </div>
    </div>
  )
}

export default App;
