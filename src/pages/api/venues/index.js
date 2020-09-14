import dbConnect from '../../../../utils/dbConnect';
import Venue from '../../../../models/Venue';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const venues = await Venue.find({});
        res.status(200).json(venues);
        console.log(req.method);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const venue = await Venue.create(req.body);
        res.status(201).json({ success: true, data: venue });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
