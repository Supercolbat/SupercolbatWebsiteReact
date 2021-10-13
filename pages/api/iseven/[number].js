export default (req, res) => {
  let { number } = req.query

  number = String(number)

  if (isNaN(number))
    res.status(200).json({ success: false })
  else
    res.status(200).json({ success: true, result: number[number.length-1] % 2 == 0 })
}
