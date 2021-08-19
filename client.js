const {City} = require('./protobuf/temperature_pb.js');
const {GreeterClient} = require('./protobuf/temperature_grpc_web_pb.js');

function getTemperature(name, callback) {
    var client = new GreeterClient('http://localhost:8085');

    var request = new City();
    request.setName(name);

    client.getTemperature(request, {}, function (err, response) {
        callback(err, response)
    });
}

document.querySelector("#search").onclick = function() {
    var results = document.querySelector("#results")
    results.innerHTML = ""

    var name = document.querySelector("#search_input").value

    if (name !== "") {
        getTemperature(name, function(err, response) {
            var list = response.array[3]

            for (i = 0; i < list.length; i++) {
                var el = document.createElement("div")
                el.innerHTML = list[i][2] + ": max: " + list[i][3][0] + "°C, min: " + list[i][3][1]

                results.appendChild(el)
            }
        })
    }
}
