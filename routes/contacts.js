const express = require("express");
const router = express.Router();
const contact = require('../models/Contact')
const controllers = require('../controllers/contactcontrollers')
//Post contact
//get All contacts
//get contact By ID
//delete contact by ID
//update contact by ID

//@POST method
//@DESC post a contact
//@path :http://localhost:5000/api/contact/
//@Params Body
router.post('/', controllers.postContact)
//@GET method
//@DESC get a contact
//@path :http://localhost:5000/api/contact/

router.get('/', async (req, res) => {
      try {
            const result = await contact.find();
            res.send({ response: result, message: 'getting contact successfully' })
      } catch (e) {
            res.status(400).send({ message: "can not get contacts" })
      }
})
//@GET method
//@DESC get one contact
//@path :http://localhost:5000/api/contact/:id
//@Params id
router.get('/:id', async (req, res) => {
      try {
            const result = await contact.findOne({ _id: req.params.id });
            res.send({ response: result, message: 'getting contact successfully' })
      } catch (e) {
            res.status(400).send({ message: "there is no contact with this _id" })
      }
})

//@DELETE method
//@DESC delete one contact by id
//@path :http://localhost:5000/api/contact/:id
//@Params id
router.delete('/:id', async (req, res) => {
      try {
            const result = await contact.deleteOne({ _id: req.params.id });
            result.n ? res.send({ response: 'user deleted' }) : res.send({ response: 'there is no user with this id' })

      } catch (e) {
            res.status(400).send({ message: "there is no _id" })
      }
});
//@PUT method
//@DESC update a contact by id
//@path :http://localhost:5000/api/contact/:id
//@Params Id Body

router.put('/:id', async (req, res) => {
      try {
            const result = await contact.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
            console.log(result);
            result.nModified ? res.send({ message: 'user updated' }) : res.send({ message: 'contact already updated' })

      } catch (e) {
            res.status(400).send({ message: 'not updated' })
      }
});

module.exports = router;