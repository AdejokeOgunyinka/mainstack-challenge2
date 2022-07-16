import { Link } from "react-router-dom";
import { notFound } from "../../../../assets/images";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <div className="w-100 vh-100 bg-whiter d-center flex-column">
      {/* <NavBar /> */}

      <div className="text-center">
        <img src={notFound} alt="Page Not Found - Error 404" />
      </div>

      <div>
        <p className="text-dark mt-4">
          Ooops, the page you’re looking for doesn’t exist
        </p>
      </div>

      <div className="mt-4">
        {/* <Link to={PAGES_URL.DASHBOARD}> */}
        <Link to="/">
          <Button colorScheme="black">Back to safety</Button>
        </Link>
      </div>
    </div>
  );
};

const AuthNotFound = () => {
  return (
    <div className="h-100 d-center">
      <div className="d-flex align-items-center flex-column bg-whiter">
        <div className="text-center mt-3">
          <img src={notFound} alt="Page Not Found - Error 404" />
        </div>

        <div>
          <p className="text-dark mt-4">
            Ooops, the page you’re looking for doesn’t exist
          </p>
        </div>

        <div className="mt-4">
          <Link to="/">
            <Button colorScheme="black">Back to safety</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
export { AuthNotFound };
