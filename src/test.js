import React, { useState, useEffect } from "react";

function App() {
  // Menginisialisasi state untuk menyimpan input
  const [inputValue, setInputValue] = useState("");

  // Mengambil data dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedValue = localStorage.getItem("inputValue");
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);

  // Fungsi yang dipanggil saat input berubah
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Simpan input ke localStorage
    localStorage.setItem("inputValue", value);
  };

  return (
    <div className="App">
      <h1>TodoS App</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter your input" />
    </div>
  );
}

export default App;
