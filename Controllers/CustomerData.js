const customer = require ('../Models/CustomerData.json');

exports.getCustomerDataByprogId = (req, res) => {
    const {progId} = req.params;
    const FilteredCustomerData = customer.filter (data => data.progId == progId);
    res.status (200).json ({message: "Customerdata Fetched successfully by projectId",CustomerData : FilteredCustomerData})

}

// add and Save a new Message
exports.addCustomerData = (req, res) => {
    const message = new res({
      message: req.body.message,
    });
    message
      .save()
      .then((data) => {
        res.status(201).send("New Customerdata added successfully ",data);
      })
      .catch((err) => {
        res.status(404).send({
          message:
            err.message || "Some error occurred while adding customerdata.",
        });
      });
  };

