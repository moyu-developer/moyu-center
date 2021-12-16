import { useMemo, useEffect } from "react";
import type { FC } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import type { Dispatch } from "src/model";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../model/index";

export default ((props) => {
  const location = useLocation();

  const navigate = useNavigate();

  const dispatch: Dispatch = useDispatch();

  /** token是否存在 */
  const hasLogin = useSelector((state: RootState) => !!state.common.token);

  const user = useSelector((state: RootState) => state.common.user);

  useEffect(() => {
    console.log(user);
    if (!user && hasLogin) {
      dispatch.common.getUserInfo();
    }
  }, [user, hasLogin, dispatch]);

  useEffect(() => {
    dispatch.common.setNavigateInstance(navigate);
  }, [dispatch, navigate]);

  const LoginResult = useMemo(() => {
    if (!hasLogin) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (location.pathname === "/login") {
      return <Navigate to="/" replace />;
    }

    return props.children;
  }, [hasLogin, location, props.children]);

  return LoginResult;
}) as FC;
