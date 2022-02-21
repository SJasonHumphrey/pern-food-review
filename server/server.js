require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//getting all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//getting individual restaurant
app.get("/api/v1/restaurants/:id", async(req, res) => {
   try {
      const results = await db.query("select * from restaurants where id = $1",[req.params.id])
      res.status(200).json({
         status: "success",
         data: {
           restaurants: results.rows[0],
         },
       });
   } catch (error) {
      console.log(error)
   }
});

// create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
   try {
      const results = await db.query("INSERT INTO restaurants (restaurant_name, location, price_range) VALUES ($1, $2, $3) returning *", 
      [req.body.restaurant_name, req.body.location, req.body.price_range]
      );
      console.log(results);
      res.status(201).json({
         status: "success",
         data: {
            restaurant: results.rows[0],
         },
      });
   } catch (error) {
      console.log(error)
   }
});

//update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
try {
   const results = await db.query("UPDATE restaurants SET restaurant_name = $1, location = $2, price_range = $3 where id = $4 returning *", 
   [req.body.restaurant_name, req.body.location, req.body.price_range, req.params.id]
   );
   res.status(200).json({
      status: "success",
      data: {
         restaurant: results.rows[0],
      }
   });
} catch (error) {
   console.log(error)
}
});

// delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
try {
   const results = db.query("DELETE FROM restaurants where id = $1",[req.params.id])
   res.status(204).json({
      status: "success"
   });
} catch (error) {
   console.log(error)
}
});

const port = process.env.PORT || 1334;

app.listen(port, () => {
  console.log(`"listening on port ${port}"`);
});
