import express from "express";
import axios from "axios";


const router = express.Router();// inbuild function ahe express madhe


//code ne prompt takla tar te post madhe
router.post('/', async (req, res) => {
    try {
      const { prompt } = req.body; // Get the prompt from the request body
      const apiKey = 'uoQnYBs1wash715zRSJzAAlHfiu7Ze1Q4aW2goS6qVmUcMvpk2niIeA1g06N';
      // Send the request to the external API using Axios
      const response = await axios.post('https://modelslab.com/api/v6/realtime/text2img', {// main api la call karte
        key: apiKey,
        prompt: prompt,
        samples: '1',
        height: '1024',
        width: '1024',
     
      });

      console.log(response.data);
      

      
      // Send the response from the external API back to the frontend
      res.json({
        photo: response.data.output[0],
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  });


export default router;
