import Results from "./Results";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Helper = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route
          index
          path="/"
          element={<Navigate to="/search" replace={true} />}
        />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/news" element={<Results />} />
      </Routes>
    </div>
  );
};

export default Helper;
