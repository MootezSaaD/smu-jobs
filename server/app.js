const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001 || process.env.PORT;
const jobsRouter = require('./routes/jobs/index');
const authRouter = require('./routes/auth/index');
const applicationsRouter = require('./routes/applications/index');
const errorHandler = require('./helpers/errorHandler');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Database
mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to database');
  }
);

// Routes
app.use('/api/jobs', jobsRouter);
app.use('/api/auth', authRouter);
app.use('/api/applications', applicationsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
