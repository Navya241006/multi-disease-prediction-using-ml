import { useState } from "react";
import axios from "axios";

export default function Diabetes() {
  const [form, setForm] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const predict = async () => {
  try {
    setLoading(true);

    const emptyField = Object.values(form).some(
      value => value === ""
    );

    if (emptyField) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    const formattedData = {};

    Object.keys(form).forEach((key) => {
      formattedData[key] = Number(form[key]);
    });

    const res = await axios.post(
      "http://127.0.0.1:5000/predict/diabetes",
      formattedData
    );

    setResult(res.data);
  } catch (err) {
    console.error(err);
    alert("Prediction failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Diabetes Prediction
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <input
          type="number"
            key={key}
            placeholder={key}
            className="bg-slate-800 p-3 rounded-lg"
            value={form[key]}
            onChange={(e) =>
              setForm({
                ...form,
                [key]: e.target.value,
              })
            }
          />
        ))}
      </div>

      <button
  onClick={predict}
  className="mt-6 bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl font-semibold"
>
  🧠 Analyze Diabetes Risk
</button>
{loading && (
  <div className="mt-6 text-blue-400 animate-pulse">
    🤖 AI Model Analyzing...
  </div>
)}

      {result && (
  <div className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
    <h2 className="text-2xl font-bold mb-4">
      Risk Assessment Report
    </h2>

    <p className="text-lg">
      Status:
      {result.prediction === 1
        ? " 🔴 High Risk"
        : " 🟢 Low Risk"}
    </p>

    <p className="mt-2">
      Confidence: {result.confidence}%
    </p>
<div className="mt-4">
  <div className="w-full bg-slate-700 rounded-full h-4">
    <div
      className="bg-green-500 h-4 rounded-full transition-all duration-1000"
      style={{
        width: `${result.confidence}%`,
      }}
    />
  </div>
</div>
    <p className="mt-2 text-slate-400">
      Recommendation:
      {result.prediction === 1
        ? " Please consult a physician."
        : " Maintain a healthy lifestyle."}
    </p>
  </div>
)}
    </div>
  );
}