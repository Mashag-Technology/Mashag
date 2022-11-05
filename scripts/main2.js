// create nameless function
$(function () {

    const video = $("video")[0];

    // var model;
    var cameraMode = "environment"; // or "user"

    const startVideoStreamPromise = navigator.mediaDevices
        .getUserMedia({
            audio: false,
            video: {
                facingMode: cameraMode
            }
        })
        .then(function (stream) {
            return new Promise(function (resolve) {
                video.srcObject = stream;
                video.onloadeddata = function () {
                    video.play();
                    resolve();
                };
            });
        });


    roboflow.auth({
        publishable_key: "rf_5C1BvDIIgQQmd3v7y2FZWgGoAii1"
    }).load({
        model: "finale-fq7nc",
        version: 1
    }).then(function (model) {    // model has loaded!
    });

    model.detect(video).then(function (predictions) {
        console.log("Predictions:", predictions);
    });
})();