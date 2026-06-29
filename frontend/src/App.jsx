import { useState } from "react";
import AudioUploader from "./components/AudioUploader";
import AudioLibrary from "./components/AudioLibrary";

export default function App() {
  const [activeTab, setActiveTab] = useState("upload");

    return (
        <main className="glass-container">
              <div className="header">
                      <h2>Audio Cloud</h2>
                              <p>Seamlessly upload and stream your media</p>
                                    </div>

                                          <div className="nav-tabs">
                                                  <button 
                                                            className={`nav-tab ${activeTab === "upload" ? "active" : ""}`}
                                                                      onClick={() => setActiveTab("upload")}
                                                                              >
                                                                                        Upload
                                                                                                </button>
                                                                                                        <button 
                                                                                                                  className={`nav-tab ${activeTab === "library" ? "active" : ""}`}
                                                                                                                            onClick={() => setActiveTab("library")}
                                                                                                                                    >
                                                                                                                                              Library
                                                                                                                                                      </button>
                                                                                                                                                            </div>

                                                                                                                                                                  {activeTab === "upload" ? <AudioUploader /> : <AudioLibrary />}
                                                                                                                                                                      </main>
                                                                                                                                                                        );
                                                                                                                                                                        }
