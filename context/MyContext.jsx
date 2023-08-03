import { useState } from "react";
import myContext from "./context";

const MyContext = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <myContext.Provider value={{ user, setUser }}>
      {children}
    </myContext.Provider>
  );
};

export default MyContext;
