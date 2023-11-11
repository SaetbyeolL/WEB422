export default function handler(req, res) {
  const { id } = req.query; // "id" route parameter
  res.status(200).json({ name: `user ${id}` });
}