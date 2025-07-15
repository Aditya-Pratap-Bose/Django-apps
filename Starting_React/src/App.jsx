import LearnReact from "./components/LearnReact";
import LearnJSX from "./components/LearnJSX";
import LearnProps from "./components/learnProps";
import LearnEvents from "./components/LearnEvents";
import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnUseState from "./components/LearnUseState";
import CounterApp from "./components/CounterApp";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";
import ChildA from "./components/ChildA";
import { createContext, useState } from "react";
import LearnUseRef from "./components/LearnUseRef";
import LearnCustomHooks from "./components/LearnCustomHooks";
import LearnConditionalRendering from "./components/LearnConditionalRendering";
import LearnMap from "./components/LearnMap";
import LearnCSS from "./components/LearnCSS";
import LearnLoadingImages from "./components/LearnLoadingImages";
import LearnForms from "./components/LearnForms";

const StockContext = createContext();
const UserContext = createContext();

function App() {
  let price = 300;
  let stock = "Tesla";
  const [user, setuser] = useState({ name: "Aditya", isLoggedIn: "Yes" });

  const getStock = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* <h1>App Component</h1> */}
      {/* <LearnReact /> */}
      {/* <LearnJSX /> */}
      {/* <LearnProps stock="Apple" price={price} /> */}
      {/* <LearnEvents /> */}
      {/* <LearnLiftingStateUp someClick={getStock} /> */}
      {/* <LearnUseState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <ChildA stock={stock}/> */}
      {/* <StockContext.Provider value={{ stock, price }}>
        <UserContext.Provider value={{user, setuser}}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider> */}
      {/* <LearnUseRef /> */}
      {/* <LearnCustomHooks /> */}
      {/* <LearnConditionalRendering /> */}
      {/* <LearnMap /> */}
      {/* <LearnCSS /> */}
      {/* <LearnLoadingImages /> */}
      <LearnForms />
    </>
  );
}

export default App;
export { StockContext, UserContext };
