import { Redirect, Route } from "react-router";
import useAuth from "../useAuth";




const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    if (isloading) {
       return <div className="spinner-border text-warning" role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
      }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;