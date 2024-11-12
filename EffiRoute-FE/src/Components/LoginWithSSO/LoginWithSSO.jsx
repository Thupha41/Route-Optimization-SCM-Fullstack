import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../redux/action/accountAction";
const LoginWithSSO = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const runFirstRef = useRef(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.account);

  useEffect(() => {
    const ssoToken = searchParams.get("ssoToken");
    if (ssoToken && !runFirstRef.current) {
      runFirstRef.current = true;
      dispatch(doLogin(ssoToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (userInfo && userInfo.access_token) {
      const role = userInfo.roleWithPermission?.name?.toLowerCase();
      switch (role) {
        case "admin":
          navigate("/admin");
          break;
        case "planner":
          navigate("/planner");
          break;
        case "manager":
          navigate("/manager");
          break;
        default:
          // Handle unknown role or redirect to default page
          navigate("/");
      }
    }
  }, [userInfo, navigate]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          <h3>
            {message && (
              <span>
                Please login again. Click here to{" "}
                <a
                  href={`${import.meta.env.VITE_BACKEND_SSO}?serviceURL=${
                    import.meta.env.VITE_SERVICE_URL
                  }`}
                >
                  login
                </a>
              </span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LoginWithSSO;
