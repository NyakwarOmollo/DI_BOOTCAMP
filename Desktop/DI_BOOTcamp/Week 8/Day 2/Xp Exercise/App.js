// Add this inside App function or as a separate component

const sendData = async () => {
  const webhookUrl = "YOUR_WEBHOOK_URL_HERE";   // Paste your unique webhook URL

  const payload = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const result = await response.text();
    console.log("Response from webhook:", result);
    alert("Data sent successfully! Check console and webhook site.");
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send data");
  }
};

// Add button somewhere in return:
<button className="btn btn-success mt-3" onClick={sendData}>
  Send Data to Webhook
</button>