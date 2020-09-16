import { useContext, useState } from 'react';
import {
  MagicContext,
  LoggedInContext,
  LoadingContext
} from '../components/Store';
import Dashboard from '../components/Dashboard';

const TodoView = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [isLoading, setIsLoading] = useContext(LoadingContext);
  return <>{loggedIn && <Dashboard />}</>;
};

export default TodoView;
