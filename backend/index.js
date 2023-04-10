const connection = require("./mysql");
const express = require("express");
const app = express();


app.get('/tweets/', (req, res) => {
  connection.query("SELECT * FROM twitter_deneme.new_table", [req.params.id], (err, rows) => {
    if (err) {
        console.log(err);     
    } else {
        res.send(rows);
    }
  });
});
  

app.post('/tweets/', (req, res) => {
  const tweet = req.body;
  connection.query('INSERT INTO tweets VALUE(?) ', tweet, (error, result) => {
    if (error) throw error;
    tweet.id = result.insertId;
    res.json(tweet);
  });
});

app.put('/tweets/:id/', (req, res) => {
  const id = req.params.id;
  const tweet = req.body;
  connection.query('UPDATE twitter_deneme.new_table WHERE id = ?', [tweet, id], (error, result) => {
    if (error) throw error;
    res.json(tweet);
  });
});
  
app.delete('/tweets/:id/', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM twitter_deneme.new_table WHERE id = ?', id, (error, result) => {
    if (error) throw error;
    res.json(result.affectedRows > 0);
  });
});

app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000");
});