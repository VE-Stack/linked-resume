import { FC, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

import { designs, variants } from "../../ts/types";

const Components: FC = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"} className="bg-white dark:bg-black">
      <h1>Components visualize for development</h1>

      <hr />

      <section className="bg-light dark:bg-dark text-black dark:text-white p-2">
        <h2 id="buttons">
          <span onClick={() => navigate("#buttons")}>#</span> Buttons
        </h2>

        <Button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Dark" : "Light"} mode
        </Button>

        <hr />

        <h2>Button Different Design and Variants</h2>

        <hr />
        {designs.map(design => (
          <Fragment key={design}>
            <h3 className="mt-2">Design: {design}</h3>
            <hr />
            <div className="m-2">
              {variants.map(variant => (
                <Button key={variant} variant={variant} design={design}>
                  {variant}
                </Button>
              ))}
            </div>
            <hr />
          </Fragment>
        ))}
      </section>
    </div>
  );
};

export default Components;
