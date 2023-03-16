import { db , auth} from "./root/firebase_config";
import { onValue, ref, set, push } from "firebase/database";
import { useEffect } from "react";
import Login from "./login";
import Home from "./home";
import { useAuthState} from 'react-firebase-hooks/auth';
function App() {
  const [user,loading,error]=useAuthState(auth);
  return <>
    {
      user ? <Home/> : <Login/>
    }
  </>;
}
export default App;
