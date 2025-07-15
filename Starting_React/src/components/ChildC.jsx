import { useContext } from "react";
import { StockContext, UserContext } from "../App";

const ChildC = (props) => {
  const stockData = useContext(StockContext);
  const userData = useContext(UserContext);
  return (
    <>
      {/* <StockContext.Consumer>
        {({ stock, price }) => {
          return (
            <UserContext.Consumer>
              {({ user }) => {
                return (
                  <>
                    <h2>User: {user.name}</h2>
                    <h2>Logged In?: {user.isLoggedIn}</h2>
                    <h2>
                      ChildC - {stock}: {price}
                    </h2>
                  </>
                );
              }}
            </UserContext.Consumer>
          );
        }}
      </StockContext.Consumer> */}
      <h2>User: {userData.user.name}</h2>
      <h2>Logged In?: {userData.user.isLoggedIn}</h2>
      <h2>ChlidC - {stockData.stock}</h2>
    </>
  );
};

export default ChildC;
