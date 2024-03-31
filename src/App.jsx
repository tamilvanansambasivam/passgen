import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

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
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="m-10 space-y-4">
      <label
        htmlFor="helper-text"
        className="block mb-2  font-medium text-gray-900 dark:text-white text-5xl"
      >
        Password Generator{" "}
      </label>
      <input
        type="text"
        id="myInput"
        value={password}
        readOnly
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="(Aq%84d^2PZKIUTHK)W5"
      />
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        We'll never share your details. Read our{" "}
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Privacy Policy
        </a>
        .
      </p>

      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={copyToClipboard}
      >
        Copy text
      </button>

      <button
        type="button"
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={genNewPassword}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
