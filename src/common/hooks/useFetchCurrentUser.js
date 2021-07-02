import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../features/auth/authSlice";

const useFetchCurrentUser = () => {
  const { initialLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialLoading) dispatch(fetchCurrentUser());
  }, [dispatch, initialLoading]);
};

export default useFetchCurrentUser;
