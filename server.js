// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/
app.get('/assistant/greet',(req,res)=>{
  const name=req.query.name
  if(!name)
    return res.status(400).json({message:"send the correct url"})
  
  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  const dayNum = new Date().getDay()

  const today = days[dayNum]
  if(today==="monday"){
    return res.status(200).json({
      "welcomeMessage": `Hello, ${name}! Welcome to our assistant app!`,
      "dayMessage": "Happy Monday! Start your week with energy!"})
  }
  if(today==="tuesday" || today==="wednesday" || today==="thursday" || today==="saturday" || today==='sunday'){
    return res.status(200).json({
      "welcomeMessage": `Hello, ${name}! Welcome to our assistant app!`,
    "dayMessage": "Have a wonderful day!"})
  }
  if(today==="friday"){
    return res.status(200).json({
      "welcomeMessage": `Hello, ${name}! Welcome to our assistant app!`,
      "dayMessage": "It's Friday! The weekend is near!"})
  }

})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
