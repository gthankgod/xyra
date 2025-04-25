import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IntroForm from "./IntroductionForm";
import axios from "axios";

const QuizGate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const localUser = localStorage.getItem("formData") && Object.keys(JSON.parse(localStorage.getItem("formData"))).length > 0 ? localStorage.getItem("formData") : null;
    const localUser = null;
    if (localUser) {
      navigate("/quiz", { state: { user: JSON.parse(localUser) } });
    }
  }, [navigate]);

  const handleFormComplete = async (formData) => {
    try {
      const res = await axios.get(`https://xyra-be.vercel.app/api/users?email=${formData.email}`);
      const response = res.data;

      if (!response.status && response.message !== 'User not found') {
        throw new Error("Failed to fetch user data");
      }

      const userData = response.status ? response.data : formData;
      // Save locally
    //   localStorage.setItem("formData", JSON.stringify({ email: userData.email, nickname: userData.nickname, persona: userData.persona }));

      // Redirect with user
      navigate("/quiz", { state: { user: userData } });
    } catch (err) {
      console.error("Error verifying user:", err);
    }
  };

  return <IntroForm onComplete={handleFormComplete} />;
};

export default QuizGate;
