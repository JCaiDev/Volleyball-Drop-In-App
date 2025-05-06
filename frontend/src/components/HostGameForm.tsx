import { useState } from "react";

// Interface for form data matching the server expectations
interface GameFormData {
  user_id: string;
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  max_players: number;
}

interface HostGameFormProps {
  userId: string;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

const HostGameForm: React.FC<HostGameFormProps> = ({
  userId,
  onSuccess,
  onError,
}) => {
  // Initial form state
  const initialFormState: GameFormData = {
    user_id: userId,
    title: "",
    date: "",
    start_time: "",
    end_time: "",
    location: "",
    max_players: 24,
  };

  const [formData, setFormData] = useState<GameFormData>(initialFormState);
  const [isSubmitting, setisSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "max_players" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:5000/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to host game");
      }

      const result = await response.json();
      console.log("Game Hosted:", result);

      if (onSuccess) onSuccess();
      setSuccess("Game successfully hosted!");

      setFormData(initialFormState);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to host game. Please try again.");
      if (onError) onError(error);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Enter New Game Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="start_time"
          value={formData.start_time}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="end_time"
          value={formData.end_time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="max_players"
          placeholder="Max Players"
          value={formData.max_players}
          onChange={handleChange}
          min="1"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Hosting..." : "Host Game"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "Green" }}>{success}</p>}
    </div>
  );
};

export default HostGameForm;
