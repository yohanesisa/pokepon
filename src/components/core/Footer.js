import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <footer className="container text-center py-5">
          <h5>Pokemon Gashapon &copy; 2021</h5>
        </footer>
      )}
    </>
  );
};

export default Footer;
