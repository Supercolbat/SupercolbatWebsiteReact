export default (req, res) => {
  res.status(200).json({ value: Math.floor(Math.random() * 2) ?
    'Heads' : 'Tails' })
}