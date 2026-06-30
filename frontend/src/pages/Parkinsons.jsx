import { useState } from "react";
import axios from "axios";

const fields = [
  "MDVP:Fo(Hz)",
  "MDVP:Fhi(Hz)",
  "MDVP:Flo(Hz)",
  "MDVP:Jitter(%)",
  "MDVP:Jitter(Abs)",
  "MDVP:RAP",
  "MDVP:PPQ",
  "Jitter:DDP",
  "MDVP:Shimmer",
  "MDVP:Shimmer(dB)",
  "Shimmer:APQ3",
  "Shimmer:APQ5",
  "MDVP:APQ",
  "Shimmer:DDA",
  "NHR",
  "HNR",
  "RPDE",
  "DFA",
  "spread1",
  "spread2",
  "D2",
  "PPE",
];

export default function Parkinsons() {
  const initialForm = {};

  fields.forEach((field) => {
    initialForm[field] = "";
  });

  const [form, setForm] = useState(initialForm);
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
      return;
    }

    
      const formattedData = {};

      Object.keys(form).forEach((key) => {
        formattedData[key] =
          form[key] === "" ? 0 : Number(form[key]);
      });

      const res = await axios.post(
        "http://127.0.0.1:5000/predict/parkinsons",
        formattedData
      );

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        🧠 Parkinson's Disease Prediction
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <input
            key={field}
            type="number"
            placeholder={field}
            className="bg-slate-800 p-3 rounded-lg"
            value={form[field]}
            onChange={(e) =>
              setForm({
                ...form,
                [field]: e.target.value,
              })
            }
          />
        ))}
      </div>

      <button
        onClick={predict}
        className="mt-6 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl"
      >
        {loading ? "Analyzing..." : "🧠 Analyze Parkinson's Risk"}
      </button>

      {result && (
        <div className="mt-8 bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            {result.prediction === 1
              ? "🔴 High Risk"
              : "🟢 Low Risk"}
          </h2>

          <p className="mt-2">
            Confidence: {result.confidence}%
          </p>
        </div>
      )}
    </div>
  );
}