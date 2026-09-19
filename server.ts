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

app.use(express.json());




type Party = {
  id: number;
  name: string;
  leader: string;
  seats: number;
};
type PartyParams = {
  id: string;
};

let parties: Party[] = [
  {
    id: 1,
    name: "{Socialdemokraterna}",
    leader: " Name1",
    seats: 107,
  },
  {
    id: 2,
    name: "{Vänsterpartiet}",
    leader: "Name2",
    seats: 68,
  },
];
//Task 1 : GET /parties
app.get("/parties", (req: Request, res: Response): void => {
  res.json(parties);
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// Task 2: POST /parties
app.post("/parties", (req: Request, res: Response) => {
// Task 6 : Handling Bad Input
     const { name, leader, seats } = req.body;

  if (!name || !leader) {
    res.status(400).json({
      message: "Name and leader are missing",
    });
    return;
  }

  const newParty: Party = {
    id: parties.length + 1,
    name: name,
    leader: leader,
    seats: seats,
  };

  parties.push(newParty);

  res.status(201).json({
    message: "Party added successfully",
    party: newParty,
  });
});

// Task 4: PUT /parties/:id
app.put(
  "/parties/:id",
  (req: Request<PartyParams>, res: Response): void => {
   const partyId = parseInt(req.params.id);

  const party = parties.find((party) => party.id === partyId);

  if (!party) {
    res.status(404).json({
      message: "Party not found",
    });
    return;
  }

  if (req.body.name !== undefined) {
    party.name = req.body.name;
  }

  if (req.body.leader !== undefined) {
    party.leader = req.body.leader;
  }

  if (req.body.seats !== undefined) {
    party.seats = req.body.seats;
  }

  res.json(party);
});

// Task 5: DELETE /parties/:id
app.delete(
  "/parties/:id",
  (req: Request<PartyParams>, res: Response): void => {
    const partyId = parseInt(req.params.id);

    const partyIndex = parties.findIndex((party) => party.id === partyId);

    if (partyIndex === -1) {
      res.status(404).json({
        message: "Party not found",
      });
      return;
    }

    parties.splice(partyIndex, 1);

    res.json({
      message: "Party deleted successfully",
    });
  }
);

// Task 6 : Handling Bad Input