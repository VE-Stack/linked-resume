import { Link } from "react-router-dom";

import { Paths } from "../../ts/enums";

const Templates = () => {
  return (
    <div>
      <h1 className="text-2xl">Templates</h1>
      <Link className="text-lg underline decoration-sky-500" to={Paths.RESUME}>
        Route to resume
      </Link>
    </div>
  );
};

export default Templates;
