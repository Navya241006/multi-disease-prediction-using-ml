import { useNavigate } from "react-router-dom";
import DiseaseCard from "../components/DiseaseCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold mb-6">
            AI Healthcare Assistant
          </h1>

          <p className="text-slate-400 text-xl">
            Predict disease risk in seconds using Machine Learning
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl">
            <h3 className="text-3xl font-bold">4</h3>
            <p className="text-slate-400">Disease Models</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl">
            <h3 className="text-3xl font-bold">95%+</h3>
            <p className="text-slate-400">Accuracy</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl">
            <h3 className="text-3xl font-bold">AI</h3>
            <p className="text-slate-400">Powered</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-slate-400">Available</p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <DiseaseCard
            title="Diabetes"
            icon="🩺"
            onClick={() => navigate("/diabetes")}
          />

          <DiseaseCard
            title="Heart Disease"
            icon="❤️"
            onClick={() => navigate("/heart")}
          />

          <DiseaseCard
            title="Kidney Disease"
            icon="🩸"
            onClick={() => navigate("/kidney")}
          />

          <DiseaseCard
            title="Parkinson's"
            icon="🧠"
            onClick={() => navigate("/parkinsons")}
          />

        </div>

      </div>
    </div>
  );
}