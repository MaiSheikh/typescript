// Key concepts
/*
app.get(path, handler)   // read/retrieve data — safe, repeatable, never changes anything
res.send()               // send back a plain text/HTML response
res.json()               // send back a JSON response
res.status(code)         // explicitly set the HTTP status code before responding
 
Status codes we talked about:
200 OK           — success, here's your data
201 Created      — something new was successfully created
400 Bad Request  — the request was malformed
401 Unauthorized — you need to log in / show credentials
404 Not Found    — that resource doesn't exist
500 Internal Server Error — something broke on the server
503 Service Unavailable   — the server is too busy right now
*/

import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;
//Task 1 — Homepage Route
// Task 6: Success = 200 OK, missing route = 404 Not Found
app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to my automation server");
});



//Task 2 – Main Data Route
type Automation = {
  title: string;
  categories: {
    plc: string[];
    hmi: string[];
    scada: string[];
  };
  lastUpdated: string;
};
// Task 6: Success = 200 OK, missing route = 404 Not Found
app.get("/automation", (req: Request, res: Response): void => {
  const automation: Automation = {
    title: "Automation and PLC",
    categories: {
      plc: ["Siemens S7-1500", "TIA Portal"],
      hmi: ["WinCC", "HMI"],
      scada: ["WinCC SCADA", "Factory IO"],
    },
    lastUpdated: new Date().toISOString().split("T")[0],
  };

  res.json(automation);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// Task 3 – Testing With Insomnia
 
//sk 4 – A Second JSON Route
type About = {
  title: string;
  description: string;
  founded: number;
  funFact: string;
};
// Task 6: Success = 200 OK, missing route = 404 Not Found
app.get("/about", (req: Request, res: Response): void => {
  const about: About = {
    title: "Automation",
    description: "Automation uses technology to control machines and industrial processes.",
    founded: 1968,
    funFact: "The first PLC was developed to replace relay-based control systems.",
  };

  res.json(about);
});

// Task 5 – Comparing Response Types
// Task 6: Success = 200 OK, missing route = 404 Not Found
app.get("/info", (req: Request, res: Response): void => {
  // We use res.send because this route only returns a simple text message.
  res.send("Automation is used to control machines and industrial processes.");
});