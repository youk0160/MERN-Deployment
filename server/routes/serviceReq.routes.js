const ServiceReqController = require('../controllers/serviceReq.controller');

module.exports = app => {
    app.get("/api/serviceReq",ServiceReqController.findAllServiceReq);
    app.post("/api/serviceReq",ServiceReqController.createNewServiceReq);
    app.get("/api/serviceReqs/:id",ServiceReqController.findServiceReq)
    app.put("/api/serviceReqs/:id",ServiceReqController.updateServiceReq)
    app.delete("/api/serviceReqs/:id",ServiceReqController.deleteServiceReq)
}