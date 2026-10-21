import { useState } from "react";

function App() {
  const [password, setpassword] = useState();
  const [length, setlength] = useState(8);

  return (
    <>
      <div
        className="h-screen w-full fixed flex justify-center"
        style={{ backgroundColor: "#111" }}
      >
        <div className="w-full max-w-xl h-fit rounded-xl flex items-center flex-col mt-6 p-4 gap-4 bg-slate-900 shadow-2xl shadow-slate-950">
          <span className="text-2xl font-bold text-white">
            Passsword-Generator
          </span>
          <div className="flex gap-2">
            <div className="rounded-lg overflow-hidden mb-4 w-sm">
              <input
                type="text"
                value={password}
                placeholder="password"
                className="outline-none w-full py-2 px-3 text-cyan-950 bg-amber-50 "
              />
            </div>
            <button className=" bg-blue-500 text-white  h-10 px-4 rounded-lg hover:bg-blue-600 active:scale-95 transition duration-300 cursor-pointer">
              copy
            </button>
          </div>
          <div>
            <input type="range" min={8} max={20} value={length} />
            <label>range:{length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
