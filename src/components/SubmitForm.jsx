import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MoneyPersonalityForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // Access the data passed via navigate
    const passedData = location.state?.data;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const payload = {
                email: 'gthankgod@gmail.com',
                persona: "Smart, youthful and witty",
                answers: passedData,
              };
              
            const res = await fetch("https://xyra-be.vercel.app/api/finance/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Something went wrong");

            navigate(`/personality`, { state: { data } });
        } catch (err) {
            setError(err.message || "Failed to submit email");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" w-full flex flex-col justify-between bg-[#F9F6FF] overflow-hidden rounded-2xl">
            {/* Main */}
            <main className="flex-1 flex items-center justify-center p-25">
                <form
                    onSubmit={handleSubmit}
                    className="max-w text-center p-8"
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-black">
                        WELDONE ORE! 🎉
                    </h1>
                    <p className="text-sm text-gray-700 mt-2 mb-6">
                        Just tell us where to send your Money Personality report
                    </p>
                    <div className="flex items-center border border-purple-500 rounded-full overflow-hidden bg-white">
                        <input
                            type="email"
                            className="flex-1 px-4 py-3 outline-none text-sm"
                            placeholder="You best email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-purple-600 text-white font-semibold px-5 py-3 text-sm hover:bg-purple-700 transition-colors"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Get My Report"}
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
                    <p className="text-xs text-gray-500 mt-4">
                        We respect your privacy. Your email is safe with us.
                    </p>
                </form>
            </main>
        </div>
    );
}
