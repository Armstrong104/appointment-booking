import { authenticate } from '../middlewares/index.js';

import authRouter from './auth.js';
import signupRouter from './signup.js';
import slotRouter from './slot.js';
import profileRouter from './userProfile.js';
import userRouter from './userRoute.js';
import roleRouter from './roleRouter.js';
import appointmentRouter from './appointment.js';

const configureRouter = (app) => {
  app.get('/status', (req, res) => {
    res.send('OK');
  });

  app.use('/api/auth', authRouter);
  app.use('/api/signup', signupRouter);
  app.use('/api/users', authenticate, userRouter);
  app.use('/api/slots', slotRouter);
  app.use('/api/roles', roleRouter);
  app.use('/api/appointments', appointmentRouter);
  app.use('/api/user-profile', profileRouter);
};

export default configureRouter;
