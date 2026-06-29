import AudioUploader from "./components/AudioUploader";

export default function App() {
  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Audio Upload & Playback</h2>
      <AudioUploader />
    </main>
  );
}
