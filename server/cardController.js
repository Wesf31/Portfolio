const getCard = async (req, res) => {
  const db = req.app.get('db')
  await db.get_card().then((response) => {
    res.status(200).send(response)
  })
}

const createCard = async (req, res) => {
  const db = req.app.get('db')
  const {
    name,
    uploadedFileCloudinayrUrl,
  } = req.body
  await db.create_card([name, uploadedFileCloudinayrUrl]).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

const deleteCard = async (req, res) => {
  const db = req.app.get('db')
  const {
    name,
  } = req.params
  await db.delete_card([name]).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

const updateCard = async (req, res) => {
  const db = req.app.get('db')
  const {
    profilename,
    newName,
  } = req.body

  await db.update_card([newName, profilename]).then((data) => {
    res.status(200).send(data)
    console.log(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

module.exports = (app) => {
  app.get('/api/card', getCard)
  app.post('/api/postCard', createCard)
  app.delete('/api/deleteCard/:name', deleteCard)
  app.put('/api/updateCard', updateCard)
}