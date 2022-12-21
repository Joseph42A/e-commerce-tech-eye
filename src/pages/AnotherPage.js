import NotFoundPage from "components/NotFound";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams, Routes, Route, useMatch } from "react-router-dom";
import { isCorrectUrl } from "utils";

const AnotherPage = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>You are inside the main page</h1>} />
      <Route path="/:level1" element={<Level1 />} />
      <Route path="/:level1/:level2" element={<Level2 />} />
      <Route path="/:level1/:level2/:level3" element={<Level3 />} />
      <Route path="/test" element={<NotFoundPage />} />
    </Routes>
  );
};

const Level1 = () => {
  const { level1 } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isCorrectUrl(level1)) {
      navigate("/products/test");
    }
  }, [level1]);

  return (
    <h1 className="text-2xl">
      You are inside the first level with identity {level1}
    </h1>
  );
};

const Level2 = () => {
  const { level1, level2 } = useParams();

  return (
    <div className="text-2xl">
      {level2 != "0" ? (
        <h1>
          {`You are inside the first level with identity ${level1} and second level
        with identity ${level2}`}
        </h1>
      ) : (
        <Level1 />
      )}
    </div>
  );
};

const Level3 = () => {
  const { level1, level2, level3 } = useParams();

  return (
    <div className="text-2xl">
      {level2 == "0" && level3 == "0" ? (
        <Level1 />
      ) : (
        <h1>
          {`You are inside the first level with identity ${level1} and second level
        with identity ${level2} and third level with identity ${level3}`}
        </h1>
      )}
    </div>
  );
};

export default AnotherPage;
