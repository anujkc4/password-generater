import { useCallback, useState, useEffect } from "react";

function App() {
  const [password, setpassword] = useState();
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);

  const generatePssword = useCallback(() => {
    let pass = "";
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) char += "0123456789";
    if (character) char += "!@#$%^&*()-_=+[]{}";

    for (let i = 0; i < length; i++) {
      let temp = Math.floor(Math.random() * char.length + 1);
      pass += char.charAt(temp);
    }
    setpassword(pass);
  }, [setcharacter, length, setnumber, setpassword]);

  useEffect(() => {
    generatePssword();
  }, [generatePssword]);

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
                className="outline-none w-full py-2 px-3 text-amber-600 text-md bg-amber-50 "
              />
            </div>
            <button className=" bg-blue-500 text-white  h-10 px-4 rounded-lg hover:bg-blue-600 active:scale-95 transition duration-300 cursor-pointer">
              copy
            </button>
          </div>
          <div className="flex gap-4">
            <div>
              <input
                type="range"
                className="cursor-pointer"
                min={8}
                max={20}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label className="text-amber-300 text-xl mb-1.5 ml-2">
                range: {length}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={number}
                onChange={(e) => {
                  setnumber((prev) => !prev);
                }}
              />
              <label
                htmlFor="numberInput"
                className="text-amber-300 text-xl mb-1.5 ml-2"
              >
                number
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={character}
                onChange={(e) => {
                  setcharacter((prev) => !prev);
                }}
              />
              <label
                htmlFor="characterInput"
                className="text-amber-300 text-xl mb-1.5 ml-2"
              >
                character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
