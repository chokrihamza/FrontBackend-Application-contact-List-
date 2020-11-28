
const contact = require('../models/Contact')
exports.postContact = async (req, res) => {
      try {

            const newcontact = new contact({ ...req.body });
            if (!req.body.email) {
                  res.status(400).send({ message: 'email is required check again' });
                  return;
            }
            const user = await contact.findOne({ email: req.body.email })
            if (user) {
                  res.status(400).send({ message: 'user already exist' });
                  return;
            }
            const response = await newcontact.save();
            res.send({ response: response, message: "user is saved" });
      } catch (error) {
            res.status(400).send({ message: 'can not save it' });
      }


}


