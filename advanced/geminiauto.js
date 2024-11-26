async function fetchAutonomousDrivingBenefits() {
    const apiKey = "AIzaSyD0M_YnqHhyJOvCqFwGV7VN7Zb58Qaty1I";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: "List the benefits of autonomous driving and return a json string"
            }
          ]
        }
      ]
    });
  
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body
      };
      const response = await fetch(url, config);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return JSON.stringify(data); 
    } catch (error) {
      console.error("Error fetching autonomous driving benefits:", error);
      throw error;
    }
  }
  
  // Example usage
  fetchAutonomousDrivingBenefits()
    .then(benefits => console.log("Benefits of Autonomous Driving:", benefits))
    .catch(error => console.error("Failed to fetch benefits:", error));