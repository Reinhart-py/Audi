import { useState, useRef } from "react";

export default function AudioUploader() {
  const [audioUrl, setAudioUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current?.files[0];

    if (!file) return;

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("audio", file);

    try {
      const response = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Upload failed");
      }

      const data = await response.json();
      setAudioUrl(data.url);
      fileInputRef.current.value = "";
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <form onSubmit={handleUpload} style={{ display: "flex", gap: "1rem" }}>
        <input
          type="file"
          ref={fileInputRef}
          accept="audio/*"
          disabled={isUploading}
        />
        <button type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload Audio"}
        </button>
      </form>

      {error && (
        <div style={{ color: "red", padding: "0.5rem", border: "1px solid red" }}>
          {error}
        </div>
      )}

      {audioUrl && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h3>Playback</h3>
          <audio controls src={audioUrl}>
            Your browser does not support the audio element.
          </audio>
          <a href={audioUrl} target="_blank" rel="noopener noreferrer">
            Direct Cloudinary Link
          </a>
        </div>
      )}
    </div>
  );
}
