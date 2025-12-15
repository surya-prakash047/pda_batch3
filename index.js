import express from "express";

const app = express();

app.set("view engine", "ejs");

const hostels = [
  {
    id: 1,
    name: "srijas",
    city: "kanchi",
    rating: 90,
    pricePerMonth: 2000,
    amenities: ["food", "bed", "wifi"],
    description: "good good",
  },
  {
    id: 2,
    name: "REC's Internal",
    city: "Chennai",
    rating: 10,
    pricePerMonth: 5000,
    amenities: ["barely edible food"],
    description: "NO",
  },
  {
    id: 3,
    name: "tamil's rooms",
    city: "tiruvanamalai",
    rating: 99,
    pricePerMonth: 1000,
    amenities: ["food", "bed", "wifi", "room service"],
    description: "best best in town, very good owner!",
  },
];

app.get("/", (req, res) => {
  if (hostels) {
    res.render("index_hostels", { hostels: hostels });
  } else {
    res.send("no hostels found!");
  }
});

app.get("/hostels/:id", (req, res) => {
  const parsedInt = parseInt(req.params.id);
  const h = hostels.find((hostel) => {
    return hostel["id"] == parsedInt;
  });
  if (h) {
    res.render("hostel", {
      hostel: h,
    });
  } else {
    res.status(400);
    res.send("Hotel not found!");
  }
});

app.listen(8000, () => {
  console.log("Server Started!");
});
