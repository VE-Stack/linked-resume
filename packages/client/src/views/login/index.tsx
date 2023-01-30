import { Link } from "react-router-dom";

import { Paths } from "../../ts/enums";

const Login = () => {
  return (
    <div>
      <h1 className="text-2xl">Login</h1>
      <Link className="text-lg underline decoration-sky-500" to={Paths.TEMPLATES}>Route to templates</Link>
    </div>
  );
};

export default Login;
