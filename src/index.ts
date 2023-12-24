import app from "./app";
import "reflect-metadata"; // For Dependecy Injection

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
