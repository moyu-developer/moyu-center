import { useMemo } from 'react'
import type { FC } from "react";
import { useLocation, Navigate } from 'react-router-dom';

export default ((props) => {

  const location = useLocation()

  const hasLogin = useMemo(() => {
    return localStorage.getItem('access_token') ? true : false
  }, [])

  if (hasLogin) {
    return props.children  
  }

  return <Navigate to="/login" state={{ from: location }} />;

  
}) as FC