import { useState, useEffect } from 'react';
import { questions } from '../constants';
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Stores all answers
  
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
    persona: "",
  });
  
  const navigate = useNavigate();
  useEffect(() => {
    const stateData = location.state || {};
    // const localData = JSON.parse(localStorage.getItem("formData") || "{}");

    const finalData = {
      nickname: stateData.nickname ,
      email: stateData.email ,
      persona: stateData.persona ,
    };

    setUserData(finalData);
  }, []);

  if (!userData) return <p className="text-center mt-10">Loading user info...</p>;

  // Retrieve the selected option for the current question
  const selectedOption = answers[currentQuestion]?.optionIndex ?? null;

  const handleNext = () => {
    if (selectedOption === null) {
      toast.warn("Please select an option before proceeding!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestion] = {
        question: questions[currentQuestion].question,
        answer: questions[currentQuestion].options[selectedOption],
        optionIndex: selectedOption,
      };
      return newAnswers;
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  

  const handleSubmit = async () => {
    if (selectedOption === null) {
      toast.warn("Please select an option before submitting!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      const formattedAnswers = answers.map(answer => ({
        question: answer.question,
        options: questions.find(q => q.question === answer.question)?.options || [],
        response: answer.answer,
      }));

      navigate('/submit-form', { state: { data: { formattedAnswers, userData } } });
    } catch (error) {
      console.error("Error submitting quiz:", error);
      toast.error("Failed to submit quiz. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <ToastContainer /> {/* Toast Notification Container */}
      
      <main className="flex-1 flex flex-col items-center justify-center w-full p-6">
        <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-lg font-bold mb-4">
            {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-center text-md font-semibold mb-6">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full p-3 border rounded-lg text-left transition-all duration-200
                  ${selectedOption === index 
                    ? "border-black bg-purple-500 text-white font-bold shadow-md" 
                    : "bg-purple-100 hover:bg-purple-200"
                  }`}
                onClick={() => {
                  setAnswers(prevAnswers => {
                    const newAnswers = [...prevAnswers];
                    newAnswers[currentQuestion] = {
                      question: questions[currentQuestion].question,
                      answer: option,
                      optionIndex: index,
                    };
                    return newAnswers;
                  });
                }}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <Button 
              onClick={handlePrevious} 
              disabled={currentQuestion === 0} 
              className="bg-gray-400 text-white px-6 py-2 rounded-md disabled:opacity-50">
              Previous
            </Button>
            <Button 
              onClick={handleNext} 
              className="bg-purple-500 text-white px-6 py-2 rounded-md">
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
