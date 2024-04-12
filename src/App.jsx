import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copybtn, setCopybtn] = useState("Copy text");
  function makeUniqueId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  function genNewPassword() {
    setPassword(makeUniqueId(20));
    setCopybtn("Copy text");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    setCopybtn("Text copied");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-100 m-4 sm:p-8 rounded-lg shadow-lg">
        <div className="m-10 space-y-4">
          <label
            htmlFor="helper-text"
            className="block mb-2 font-medium text-gray-700 text-3xl lg:text-5xl"
          >
            Password Generator{" "}
          </label>
          <input
            type="text"
            id="myInput"
            value={password}
            readOnly
            aria-describedby="helper-text-explanation"
            className="text-sm rounded-lg  block w-full p-2.5   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="(Aq%84d^2PZKIUTHK)W5"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-400"
          >
            We'll never share your details. Read our{" "}
            <a href="#" className="font-medium hover:underline text-blue-500">
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={copyToClipboard}
          >
            {copybtn}
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={genNewPassword}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
