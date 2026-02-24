import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const errorMessage = useRouteError();
    console.log(errorMessage);
    return (
        <div>
            <h1>Oops!! {errorMessage.status} : {errorMessage.statusText}</h1>
            <h3>Something went wrong</h3>
        </div>
    );
};

export default Error;