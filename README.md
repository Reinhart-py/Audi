# Audio Upload and Playback Stack

This project contains a full-stack implementation for uploading audio files directly to Cloudinary using an Express backend and displaying/playing them immediately on a React frontend.

## Architecture Highlights

1. **Backend (`/backend`)**:
   - Uses `multer.memoryStorage()` so files are not temporarily written to disk.
   - Uploads via a byte stream directly to Cloudinary (`cloudinary.uploader.upload_stream`).
   - Cloudinary strictly requires `resource_type: "video"` for audio files like MP3s.
   - Returns the secure CDN URL and metadata back to the client.

2. **Frontend (`/frontend`)**:
   - Modern React application utilizing Vite.
   - Manages file references using `useRef` to maintain an uncontrolled input configuration.
   - Leverages native HTML5 `<audio controls>` for immediate playback of the returned CDN URL.

## Setup Instructions

### Backend Setup
1. Navigate to the `backend/` directory.
2. Run `npm install`.
3. Rename `.env.example` to `.env` and fill in your Cloudinary credentials.
4. Run `npm run dev` to start the Express server on port 3001.

### Frontend Setup
1. Navigate to the `frontend/` directory.
2. Run `npm install`.
3. Run `npm run dev` to start the Vite development server.
4. Open the provided localhost URL in your browser, select an audio file, and test the upload/playback flow.
