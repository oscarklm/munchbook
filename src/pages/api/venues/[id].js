import dbConnect from '../../../../utils/dbConnect';
import Venue from '../../../../models/Venue';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const venue = await Venue.findById(id);

        if (!venue) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: venue });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const venue = await Venue.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!venue) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: venue });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedNote = await Venue.deleteOne({ _id: id });

        if (!deletedNote) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(400).json({ success: false });
      break;
  }
};
