# what's this shi ?

Just A React and Express app to upload audio files to Cloudinary and play them back in a browser and also fetch em 


##  Instructions

You need two terminal windows to run this app—one for the backend and one for the frontend.


# Manual 

### . Backend Setup

1. Open a terminal and go to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your environment variables file:

   - Rename `.env.example` to `.env`
   - Add your Cloudinary credentials (find these on your Cloudinary dashboard):

   ```env
   PORT=3001
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:3001`

## 2. Frontend Setup

1. Open a second terminal and go to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm run dev
   ```



# one Shot command  root 

Open a terminal and run in root folder after setting .env in backend:

```
npm run setup && npm run dev
```

4. Open the localhost link provided in the terminal (usually `http://localhost:5173`) in your web browser.

## How it works

- `POST /api/upload`: Takes the audio file using multer, saves it to an `uploads/` folder, pushes it to Cloudinary, then deletes the local file using `fs.unlinkSync`.
- `GET /api/audio`: Uses the Cloudinary Admin API to fetch the 100 newest files in the `audio_uploads/` folder and sends them to the frontend to display.
