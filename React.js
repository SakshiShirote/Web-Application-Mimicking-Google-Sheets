import React, { useState } from "react";

const Spreadsheet = () => {
  const [cells, setCells] = useState(Array(10).fill().map(() => Array(10).fill("")));
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });
  const [formula, setFormula] = useState("");

  const handleInputChange = (row, col, value) => {
    const newCells = [...cells];
    newCells[row][col] = value;
    setCells(newCells);
  };

  const applyFormula = () => {
    if (selectedCell.row === null || selectedCell.col === null) return;
    try {
      const result = eval(formula); // Simple evaluation (Needs security checks!)
      handleInputChange(selectedCell.row, selectedCell.col, result);
    } catch (error) {
      alert("Invalid formula");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="mb-4 flex gap-2">
        <input
          className="border p-2 w-full"
          placeholder="Enter formula"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={applyFormula}>
          Apply
        </button>
      </div>
      <table className="border-collapse border border-gray-300 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">#</th>
            {[...Array(10)].map((_, col) => (
              <th key={col} className="border px-3 py-2">{String.fromCharCode(65 + col)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cells.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              <td className="border px-3 py-2">{rowIndex + 1}</td>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border px-3 py-2">
                  <input
                    className="border p-2 w-full"
                    value={cell}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                    onFocus={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
