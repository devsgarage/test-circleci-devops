import app from "./server";

const port = parseInt(process.env.PORT || '3001');

app.listen(port, () => console.log(`App running on ${port}`))

