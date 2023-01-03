import { useLocation } from "react-router-dom";
import { Contacts } from "../components/Contacts";

const FeedbackPage = () => {

  const location = useLocation();

  return (
    <Contacts value={location.state.rating} />
  );
};

export default FeedbackPage;