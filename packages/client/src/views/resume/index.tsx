import { Link } from "react-router-dom";

import { Paths } from "../../ts/enums";

const Resume = () => {
  return (
    <div>
      <h1 className="text-2xl">Resume</h1>
      <Link className="text-lg underline decoration-sky-500" to={Paths.LOGIN}>
        Route to login
      </Link>
    </div>
  );
};

export default Resume;
