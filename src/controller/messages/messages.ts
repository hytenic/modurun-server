import messageRepository from '../../repository/messageRepository';

export default {
  get: async (req, res) => {
    const { page, scheduleId } = req.query;
    const messages = await messageRepository.getScheduleMessages(scheduleId, page);

    if (!messages) {
      res.status(404).send('Not found messages');
    } else {
      res.status(200).send(messages);
    }
  },
};
