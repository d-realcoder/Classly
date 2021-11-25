import express from 'express';

import * as NotificationController from './notificationController.js'

const router = express.Router();

router.post("/chat-session/:id", NotificationController.startChatSession);
router.post("/response", NotificationController.response)

export default router;


