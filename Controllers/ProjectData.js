const projectData = require ('../Models/ProjectData.json');




exports.deleteProjectDatabyId = (req, res) => {
    const dl = req.params;
    const filterbyproid = projectData.filter(data=>data.progId = dl);
    res.findByIdandRemove(filterbyproid)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Message not found with id " + filterbyproid,
          });
        }
        res.status(204).send({ message: "Message deleted successfully!" });
      })
      .catch((err) => {
        if (err.kind === "progId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Message not found with id " + filterbyproid,
          });
        }
        return res.status(500).send({
          message: "Could not delete message with id " + filterbyproid,
        });
      });
  };



// exports.deleteProjectDatabyId= async (req, res, ) => {
//         const _id = req.params.progId;
//         try {
//          const ProjectData = await projectData.delete(_id);
//          if (!ProjectData) return res.sendStatus(204);
//          return res.send(ProjectData);
//         } 
//         catch (e) {
//          return res.sendStatus(404);
//         }
//        };