const getInfo = async (req, res) => {
  const db = req.app.get('db')
  await db.get_info().then((response) => {
    res.status(200).send(response)
  })
}

const updateCard = async (req, res) => {
  const db = req.app.get('db')
  const {
    InfoPageHeader,
    InfoPageTextBody,
    SmallBox1Header,
    SmallBox1Text,
    SmallBox2Header,
    SmallBox2Text,
  } = req.body

  await db.update_info([InfoPageHeader, InfoPageTextBody, SmallBox1Header, SmallBox1Text, SmallBox2Header, SmallBox2Text]).then((data) => {
    res.status(200).send(data)
    console.log(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

module.exports = (app) => {
  app.get('/api/info', getInfo)
  app.put('/api/updateCard', updateCard)
}