export default function handler(req, res) {
  const now = new Date();
  const moscow = new Date(now.getTime() + 3 * 60 * 60 * 1000);
  const hh = String(moscow.getUTCHours()).padStart(2, '0');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(hh);
}
