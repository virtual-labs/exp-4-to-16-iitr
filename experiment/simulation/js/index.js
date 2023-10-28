var connections = [];
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("tab_check").disabled = true;
});


function reload(event) {
    window.location.reload()
}

function BoardController() {
    var jsPlumbInstance = null;
    var endPoints = [];

    this.setJsPlumbInstance = function(instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function(drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function() {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 30 }],
            PaintStyle: { strokeStyle: '#87321b', lineWidth: 4 },
            EndpointStyle: { radius: 3, fillStyle: 'blue' },
            HoverPaintStyle: { strokeStyle: "#26c947" }
        });

        jsPlumbInstance.bind("beforeDrop", function(params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function(conn) {
            jsPlumb.detach(conn);
            return false;
        });

        jsPlumbInstance.bind("jsPlumbConnection", function(conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function(radius, divID, groupName, endPointName, anchorArray, color, stroke) {
        var Stroke;
        if(typeof(stroke)=='undefined'){
            Stroke = '#87321b';
        }
        else{
            Stroke = stroke;
        }
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: 1,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle:{ strokeStyle:Stroke, lineWidth: 4}
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function(endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

}

var con;

function checkCircuit() {
    con = false;
    var g = new Graph(120);


    var groups = ['input_A', 'input_B', 'input_C', 'input_D', 'VCC', 'GND', 'row1', 'row3', 'row4', 'row2', 'row5', 'row6', 'row8', 'row7',
        'ic1_VCC', 'ic1_Y0', 'ic1_Y1', 'ic1_Y2', 'ic1_Y3', 'ic1_Y4', 'ic1_Y5', 'ic1_Y6', 'ic1_A', 'ic1_B', 'ic1_C', 'ic1_G2A', 'ic1_G2B', 'ic1_G1', 'ic1_Y7', 'ic1_GND',
        'ic2_VCC', 'ic2_6A', 'ic2_6Y', 'ic2_5A', 'ic2_5Y', 'ic2_4A', 'ic2_4Y', 'ic2_3A', 'ic2_3Y', 'ic2_2A', 'ic2_2Y', 'ic2_1A', 'ic2_1Y', 'ic2_GND',
        'ic3_VCC', 'ic3_Y0', 'ic3_Y1', 'ic3_Y2', 'ic3_Y3', 'ic3_Y4', 'ic3_Y5', 'ic3_Y6', 'ic3_A', 'ic3_B', 'ic3_C', 'ic3_G2A', 'ic3_G2B', 'ic3_G1', 'ic3_Y7', 'ic3_GND',
        'ic4_VCC', 'ic4_6A', 'ic4_6Y', 'ic4_5A', 'ic4_5Y', 'ic4_4A', 'ic4_4Y', 'ic4_3A', 'ic4_3Y', 'ic4_2A', 'ic4_2Y', 'ic4_1A', 'ic4_1Y', 'ic4_GND',
        'ic5_VCC', 'ic5_6A', 'ic5_6Y', 'ic5_5A', 'ic5_5Y', 'ic5_4A', 'ic5_4Y', 'ic5_3A', 'ic5_3Y', 'ic5_2A', 'ic5_2Y', 'ic5_1A', 'ic5_1Y', 'ic5_GND',
        'led0_A', 'led1_A', 'led2_A', 'led3_A', 'led4_A', 'led5_A', 'led6_A', 'led7_A', 'led8_A', 'led9_A', 'led10_A', 'led11_A', 'led12_A', 'led13_A', 'led14_A', 'led15_A',
        'led0_C', 'led1_C', 'led2_C', 'led3_C', 'led4_C', 'led5_C', 'led6_C', 'led7_C', 'led8_C', 'led9_C', 'led10_C', 'led11_C', 'led12_C', 'led13_C', 'led14_C', 'led15_C'
    ]

    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    console.log("Inserted")

    

    for (key in connections) { // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }

    console.log("Connected")

    var edges= (g.numberofedges);
    console.log('edges:'+edges)
    if(edges == 0)
    {
        alert("No connections present.");   
        return;
    }
    
    if (
        g.isConnected('VCC', 'ic1_VCC') && g.isConnected('VCC', 'ic2_VCC') && g.isConnected('VCC', 'ic3_VCC') && g.isConnected('VCC', 'ic4_VCC') && g.isConnected('VCC', 'ic5_VCC') &&
        g.isConnected('GND', 'ic1_G2A') && g.isConnected('GND', 'ic1_G2B') && g.isConnected('GND', 'ic1_GND') &&
        g.isConnected('GND', 'ic3_G2A') && g.isConnected('GND', 'ic3_G2B') && g.isConnected('GND', 'ic3_GND') &&
        g.isConnected('GND', 'ic2_GND') && g.isConnected('GND', 'ic4_GND') && g.isConnected('GND', 'ic5_GND') &&
        g.isConnected('input_D', 'ic1_A') && g.isConnected('input_D', 'ic3_A') &&
        g.isConnected('input_C', 'ic1_B') && g.isConnected('input_C', 'ic3_B') &&
        g.isConnected('input_B', 'ic1_C') && g.isConnected('input_B', 'ic3_C') &&
        g.isConnected('input_A', 'ic3_G1') &&
        (
            (g.isConnected('ic3_G1', 'ic2_1A') && g.isConnected('ic2_1Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic2_2A') && g.isConnected('ic2_2Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic2_3A') && g.isConnected('ic2_3Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic2_4A') && g.isConnected('ic2_4Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic2_5A') && g.isConnected('ic2_5Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic2_6A') && g.isConnected('ic2_6Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic4_1A') && g.isConnected('ic4_1Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic4_2A') && g.isConnected('ic4_2Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic4_3A') && g.isConnected('ic4_3Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic4_4A') && g.isConnected('ic4_4Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic4_5A') && g.isConnected('ic4_5Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic4_6A') && g.isConnected('ic4_6Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic5_1A') && g.isConnected('ic5_1Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic5_2A') && g.isConnected('ic5_2Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic5_3A') && g.isConnected('ic5_3Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic5_4A') && g.isConnected('ic5_4Y', 'ic1_G1')) ||
            (g.isConnected('ic3_G1', 'ic5_5A') && g.isConnected('ic5_5Y', 'ic1_G1')) || (g.isConnected('ic3_G1', 'ic5_6A') && g.isConnected('ic5_6Y', 'ic1_G1'))
        ) &&
        (
            (g.isConnected('ic1_Y0', 'ic2_1A') && g.isConnected('ic2_1Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic2_2A') && g.isConnected('ic2_2Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic2_3A') && g.isConnected('ic2_3Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic2_4A') && g.isConnected('ic2_4Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic2_5A') && g.isConnected('ic2_5Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic2_6A') && g.isConnected('ic2_6Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic4_1A') && g.isConnected('ic4_1Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic4_2A') && g.isConnected('ic4_2Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic4_3A') && g.isConnected('ic4_3Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic4_4A') && g.isConnected('ic4_4Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic4_5A') && g.isConnected('ic4_5Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic4_6A') && g.isConnected('ic4_6Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic5_1A') && g.isConnected('ic5_1Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic5_2A') && g.isConnected('ic5_2Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic5_3A') && g.isConnected('ic5_3Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic5_4A') && g.isConnected('ic5_4Y', 'led0_C')) ||
            (g.isConnected('ic1_Y0', 'ic5_5A') && g.isConnected('ic5_5Y', 'led0_C')) || (g.isConnected('ic1_Y0', 'ic5_6A') && g.isConnected('ic5_6Y', 'led0_C'))
        ) &&
        (
            (g.isConnected('ic1_Y1', 'ic2_1A') && g.isConnected('ic2_1Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic2_2A') && g.isConnected('ic2_2Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic2_3A') && g.isConnected('ic2_3Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic2_4A') && g.isConnected('ic2_4Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic2_5A') && g.isConnected('ic2_5Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic2_6A') && g.isConnected('ic2_6Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic4_1A') && g.isConnected('ic4_1Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic4_2A') && g.isConnected('ic4_2Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic4_3A') && g.isConnected('ic4_3Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic4_4A') && g.isConnected('ic4_4Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic4_5A') && g.isConnected('ic4_5Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic4_6A') && g.isConnected('ic4_6Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic5_1A') && g.isConnected('ic5_1Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic5_2A') && g.isConnected('ic5_2Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic5_3A') && g.isConnected('ic5_3Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic5_4A') && g.isConnected('ic5_4Y', 'led1_C')) ||
            (g.isConnected('ic1_Y1', 'ic5_5A') && g.isConnected('ic5_5Y', 'led1_C')) || (g.isConnected('ic1_Y1', 'ic5_6A') && g.isConnected('ic5_6Y', 'led1_C'))
        ) &&
        (
            (g.isConnected('ic1_Y2', 'ic2_1A') && g.isConnected('ic2_1Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic2_2A') && g.isConnected('ic2_2Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic2_3A') && g.isConnected('ic2_3Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic2_4A') && g.isConnected('ic2_4Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic2_5A') && g.isConnected('ic2_5Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic2_6A') && g.isConnected('ic2_6Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic4_1A') && g.isConnected('ic4_1Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic4_2A') && g.isConnected('ic4_2Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic4_3A') && g.isConnected('ic4_3Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic4_4A') && g.isConnected('ic4_4Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic4_5A') && g.isConnected('ic4_5Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic4_6A') && g.isConnected('ic4_6Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic5_1A') && g.isConnected('ic5_1Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic5_2A') && g.isConnected('ic5_2Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic5_3A') && g.isConnected('ic5_3Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic5_4A') && g.isConnected('ic5_4Y', 'led2_C')) ||
            (g.isConnected('ic1_Y2', 'ic5_5A') && g.isConnected('ic5_5Y', 'led2_C')) || (g.isConnected('ic1_Y2', 'ic5_6A') && g.isConnected('ic5_6Y', 'led2_C'))
        ) &&
        (
            (g.isConnected('ic1_Y3', 'ic2_1A') && g.isConnected('ic2_1Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic2_2A') && g.isConnected('ic2_2Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic2_3A') && g.isConnected('ic2_3Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic2_4A') && g.isConnected('ic2_4Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic2_5A') && g.isConnected('ic2_5Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic2_6A') && g.isConnected('ic2_6Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic4_1A') && g.isConnected('ic4_1Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic4_2A') && g.isConnected('ic4_2Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic4_3A') && g.isConnected('ic4_3Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic4_4A') && g.isConnected('ic4_4Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic4_5A') && g.isConnected('ic4_5Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic4_6A') && g.isConnected('ic4_6Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic5_1A') && g.isConnected('ic5_1Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic5_2A') && g.isConnected('ic5_2Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic5_3A') && g.isConnected('ic5_3Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic5_4A') && g.isConnected('ic5_4Y', 'led3_C')) ||
            (g.isConnected('ic1_Y3', 'ic5_5A') && g.isConnected('ic5_5Y', 'led3_C')) || (g.isConnected('ic1_Y3', 'ic5_6A') && g.isConnected('ic5_6Y', 'led3_C'))
        ) &&
        (
            (g.isConnected('ic1_Y4', 'ic2_1A') && g.isConnected('ic2_1Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic2_2A') && g.isConnected('ic2_2Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic2_3A') && g.isConnected('ic2_3Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic2_4A') && g.isConnected('ic2_4Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic2_5A') && g.isConnected('ic2_5Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic2_6A') && g.isConnected('ic2_6Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic4_1A') && g.isConnected('ic4_1Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic4_2A') && g.isConnected('ic4_2Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic4_3A') && g.isConnected('ic4_3Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic4_4A') && g.isConnected('ic4_4Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic4_5A') && g.isConnected('ic4_5Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic4_6A') && g.isConnected('ic4_6Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic5_1A') && g.isConnected('ic5_1Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic5_2A') && g.isConnected('ic5_2Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic5_3A') && g.isConnected('ic5_3Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic5_4A') && g.isConnected('ic5_4Y', 'led4_C')) ||
            (g.isConnected('ic1_Y4', 'ic5_5A') && g.isConnected('ic5_5Y', 'led4_C')) || (g.isConnected('ic1_Y4', 'ic5_6A') && g.isConnected('ic5_6Y', 'led4_C'))
        ) &&
        (
            (g.isConnected('ic1_Y5', 'ic2_1A') && g.isConnected('ic2_1Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic2_2A') && g.isConnected('ic2_2Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic2_3A') && g.isConnected('ic2_3Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic2_4A') && g.isConnected('ic2_4Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic2_5A') && g.isConnected('ic2_5Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic2_6A') && g.isConnected('ic2_6Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic4_1A') && g.isConnected('ic4_1Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic4_2A') && g.isConnected('ic4_2Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic4_3A') && g.isConnected('ic4_3Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic4_4A') && g.isConnected('ic4_4Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic4_5A') && g.isConnected('ic4_5Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic4_6A') && g.isConnected('ic4_6Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic5_1A') && g.isConnected('ic5_1Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic5_2A') && g.isConnected('ic5_2Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic5_3A') && g.isConnected('ic5_3Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic5_4A') && g.isConnected('ic5_4Y', 'led5_C')) ||
            (g.isConnected('ic1_Y5', 'ic5_5A') && g.isConnected('ic5_5Y', 'led5_C')) || (g.isConnected('ic1_Y5', 'ic5_6A') && g.isConnected('ic5_6Y', 'led5_C'))
        ) &&
        (
            (g.isConnected('ic1_Y6', 'ic2_1A') && g.isConnected('ic2_1Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic2_2A') && g.isConnected('ic2_2Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic2_3A') && g.isConnected('ic2_3Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic2_4A') && g.isConnected('ic2_4Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic2_5A') && g.isConnected('ic2_5Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic2_6A') && g.isConnected('ic2_6Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic4_1A') && g.isConnected('ic4_1Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic4_2A') && g.isConnected('ic4_2Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic4_3A') && g.isConnected('ic4_3Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic4_4A') && g.isConnected('ic4_4Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic4_5A') && g.isConnected('ic4_5Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic4_6A') && g.isConnected('ic4_6Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic5_1A') && g.isConnected('ic5_1Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic5_2A') && g.isConnected('ic5_2Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic5_3A') && g.isConnected('ic5_3Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic5_4A') && g.isConnected('ic5_4Y', 'led6_C')) ||
            (g.isConnected('ic1_Y6', 'ic5_5A') && g.isConnected('ic5_5Y', 'led6_C')) || (g.isConnected('ic1_Y6', 'ic5_6A') && g.isConnected('ic5_6Y', 'led6_C'))
        ) &&
        (
            (g.isConnected('ic1_Y7', 'ic2_1A') && g.isConnected('ic2_1Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic2_2A') && g.isConnected('ic2_2Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic2_3A') && g.isConnected('ic2_3Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic2_4A') && g.isConnected('ic2_4Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic2_5A') && g.isConnected('ic2_5Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic2_6A') && g.isConnected('ic2_6Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic4_1A') && g.isConnected('ic4_1Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic4_2A') && g.isConnected('ic4_2Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic4_3A') && g.isConnected('ic4_3Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic4_4A') && g.isConnected('ic4_4Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic4_5A') && g.isConnected('ic4_5Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic4_6A') && g.isConnected('ic4_6Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic5_1A') && g.isConnected('ic5_1Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic5_2A') && g.isConnected('ic5_2Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic5_3A') && g.isConnected('ic5_3Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic5_4A') && g.isConnected('ic5_4Y', 'led7_C')) ||
            (g.isConnected('ic1_Y7', 'ic5_5A') && g.isConnected('ic5_5Y', 'led7_C')) || (g.isConnected('ic1_Y7', 'ic5_6A') && g.isConnected('ic5_6Y', 'led7_C'))
        ) &&
        (
            (g.isConnected('ic3_Y0', 'ic2_1A') && g.isConnected('ic2_1Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic2_2A') && g.isConnected('ic2_2Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic2_3A') && g.isConnected('ic2_3Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic2_4A') && g.isConnected('ic2_4Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic2_5A') && g.isConnected('ic2_5Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic2_6A') && g.isConnected('ic2_6Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic4_1A') && g.isConnected('ic4_1Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic4_2A') && g.isConnected('ic4_2Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic4_3A') && g.isConnected('ic4_3Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic4_4A') && g.isConnected('ic4_4Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic4_5A') && g.isConnected('ic4_5Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic4_6A') && g.isConnected('ic4_6Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic5_1A') && g.isConnected('ic5_1Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic5_2A') && g.isConnected('ic5_2Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic5_3A') && g.isConnected('ic5_3Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic5_4A') && g.isConnected('ic5_4Y', 'led8_C')) ||
            (g.isConnected('ic3_Y0', 'ic5_5A') && g.isConnected('ic5_5Y', 'led8_C')) || (g.isConnected('ic3_Y0', 'ic5_6A') && g.isConnected('ic5_6Y', 'led8_C'))
        ) &&
        (
            (g.isConnected('ic3_Y1', 'ic2_1A') && g.isConnected('ic2_1Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic2_2A') && g.isConnected('ic2_2Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic2_3A') && g.isConnected('ic2_3Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic2_4A') && g.isConnected('ic2_4Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic2_5A') && g.isConnected('ic2_5Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic2_6A') && g.isConnected('ic2_6Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic4_1A') && g.isConnected('ic4_1Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic4_2A') && g.isConnected('ic4_2Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic4_3A') && g.isConnected('ic4_3Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic4_4A') && g.isConnected('ic4_4Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic4_5A') && g.isConnected('ic4_5Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic4_6A') && g.isConnected('ic4_6Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic5_1A') && g.isConnected('ic5_1Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic5_2A') && g.isConnected('ic5_2Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic5_3A') && g.isConnected('ic5_3Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic5_4A') && g.isConnected('ic5_4Y', 'led9_C')) ||
            (g.isConnected('ic3_Y1', 'ic5_5A') && g.isConnected('ic5_5Y', 'led9_C')) || (g.isConnected('ic3_Y1', 'ic5_6A') && g.isConnected('ic5_6Y', 'led9_C'))
        ) &&
        (
            (g.isConnected('ic3_Y2', 'ic2_1A') && g.isConnected('ic2_1Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic2_2A') && g.isConnected('ic2_2Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic2_3A') && g.isConnected('ic2_3Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic2_4A') && g.isConnected('ic2_4Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic2_5A') && g.isConnected('ic2_5Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic2_6A') && g.isConnected('ic2_6Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic4_1A') && g.isConnected('ic4_1Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic4_2A') && g.isConnected('ic4_2Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic4_3A') && g.isConnected('ic4_3Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic4_4A') && g.isConnected('ic4_4Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic4_5A') && g.isConnected('ic4_5Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic4_6A') && g.isConnected('ic4_6Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic5_1A') && g.isConnected('ic5_1Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic5_2A') && g.isConnected('ic5_2Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic5_3A') && g.isConnected('ic5_3Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic5_4A') && g.isConnected('ic5_4Y', 'led10_C')) ||
            (g.isConnected('ic3_Y2', 'ic5_5A') && g.isConnected('ic5_5Y', 'led10_C')) || (g.isConnected('ic3_Y2', 'ic5_6A') && g.isConnected('ic5_6Y', 'led10_C'))
        ) &&
        (
            (g.isConnected('ic3_Y3', 'ic2_1A') && g.isConnected('ic2_1Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic2_2A') && g.isConnected('ic2_2Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic2_3A') && g.isConnected('ic2_3Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic2_4A') && g.isConnected('ic2_4Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic2_5A') && g.isConnected('ic2_5Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic2_6A') && g.isConnected('ic2_6Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic4_1A') && g.isConnected('ic4_1Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic4_2A') && g.isConnected('ic4_2Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic4_3A') && g.isConnected('ic4_3Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic4_4A') && g.isConnected('ic4_4Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic4_5A') && g.isConnected('ic4_5Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic4_6A') && g.isConnected('ic4_6Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic5_1A') && g.isConnected('ic5_1Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic5_2A') && g.isConnected('ic5_2Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic5_3A') && g.isConnected('ic5_3Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic5_4A') && g.isConnected('ic5_4Y', 'led11_C')) ||
            (g.isConnected('ic3_Y3', 'ic5_5A') && g.isConnected('ic5_5Y', 'led11_C')) || (g.isConnected('ic3_Y3', 'ic5_6A') && g.isConnected('ic5_6Y', 'led11_C'))
        ) &&
        (
            (g.isConnected('ic3_Y4', 'ic2_1A') && g.isConnected('ic2_1Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic2_2A') && g.isConnected('ic2_2Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic2_3A') && g.isConnected('ic2_3Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic2_4A') && g.isConnected('ic2_4Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic2_5A') && g.isConnected('ic2_5Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic2_6A') && g.isConnected('ic2_6Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic4_1A') && g.isConnected('ic4_1Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic4_2A') && g.isConnected('ic4_2Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic4_3A') && g.isConnected('ic4_3Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic4_4A') && g.isConnected('ic4_4Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic4_5A') && g.isConnected('ic4_5Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic4_6A') && g.isConnected('ic4_6Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic5_1A') && g.isConnected('ic5_1Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic5_2A') && g.isConnected('ic5_2Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic5_3A') && g.isConnected('ic5_3Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic5_4A') && g.isConnected('ic5_4Y', 'led12_C')) ||
            (g.isConnected('ic3_Y4', 'ic5_5A') && g.isConnected('ic5_5Y', 'led12_C')) || (g.isConnected('ic3_Y4', 'ic5_6A') && g.isConnected('ic5_6Y', 'led12_C'))
        ) &&
        (
            (g.isConnected('ic3_Y5', 'ic2_1A') && g.isConnected('ic2_1Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic2_2A') && g.isConnected('ic2_2Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic2_3A') && g.isConnected('ic2_3Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic2_4A') && g.isConnected('ic2_4Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic2_5A') && g.isConnected('ic2_5Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic2_6A') && g.isConnected('ic2_6Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic4_1A') && g.isConnected('ic4_1Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic4_2A') && g.isConnected('ic4_2Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic4_3A') && g.isConnected('ic4_3Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic4_4A') && g.isConnected('ic4_4Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic4_5A') && g.isConnected('ic4_5Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic4_6A') && g.isConnected('ic4_6Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic5_1A') && g.isConnected('ic5_1Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic5_2A') && g.isConnected('ic5_2Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic5_3A') && g.isConnected('ic5_3Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic5_4A') && g.isConnected('ic5_4Y', 'led13_C')) ||
            (g.isConnected('ic3_Y5', 'ic5_5A') && g.isConnected('ic5_5Y', 'led13_C')) || (g.isConnected('ic3_Y5', 'ic5_6A') && g.isConnected('ic5_6Y', 'led13_C'))
        ) &&
        (
            (g.isConnected('ic3_Y6', 'ic2_1A') && g.isConnected('ic2_1Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic2_2A') && g.isConnected('ic2_2Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic2_3A') && g.isConnected('ic2_3Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic2_4A') && g.isConnected('ic2_4Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic2_5A') && g.isConnected('ic2_5Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic2_6A') && g.isConnected('ic2_6Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic4_1A') && g.isConnected('ic4_1Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic4_2A') && g.isConnected('ic4_2Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic4_3A') && g.isConnected('ic4_3Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic4_4A') && g.isConnected('ic4_4Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic4_5A') && g.isConnected('ic4_5Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic4_6A') && g.isConnected('ic4_6Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic5_1A') && g.isConnected('ic5_1Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic5_2A') && g.isConnected('ic5_2Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic5_3A') && g.isConnected('ic5_3Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic5_4A') && g.isConnected('ic5_4Y', 'led14_C')) ||
            (g.isConnected('ic3_Y6', 'ic5_5A') && g.isConnected('ic5_5Y', 'led14_C')) || (g.isConnected('ic3_Y6', 'ic5_6A') && g.isConnected('ic5_6Y', 'led14_C'))
        ) &&
        (
            (g.isConnected('ic3_Y7', 'ic2_1A') && g.isConnected('ic2_1Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic2_2A') && g.isConnected('ic2_2Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic2_3A') && g.isConnected('ic2_3Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic2_4A') && g.isConnected('ic2_4Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic2_5A') && g.isConnected('ic2_5Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic2_6A') && g.isConnected('ic2_6Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic4_1A') && g.isConnected('ic4_1Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic4_2A') && g.isConnected('ic4_2Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic4_3A') && g.isConnected('ic4_3Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic4_4A') && g.isConnected('ic4_4Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic4_5A') && g.isConnected('ic4_5Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic4_6A') && g.isConnected('ic4_6Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic5_1A') && g.isConnected('ic5_1Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic5_2A') && g.isConnected('ic5_2Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic5_3A') && g.isConnected('ic5_3Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic5_4A') && g.isConnected('ic5_4Y', 'led15_C')) ||
            (g.isConnected('ic3_Y7', 'ic5_5A') && g.isConnected('ic5_5Y', 'led15_C')) || (g.isConnected('ic3_Y7', 'ic5_6A') && g.isConnected('ic5_6Y', 'led15_C'))
        ) &&

        g.isConnected('led0_A', 'GND') && g.isConnected('led1_A', 'GND') && g.isConnected('led2_A', 'GND') && g.isConnected('led3_A', 'GND') &&
        g.isConnected('led4_A', 'GND') && g.isConnected('led5_A', 'GND') && g.isConnected('led6_A', 'GND') && g.isConnected('led7_A', 'GND') &&
        g.isConnected('led8_A', 'GND') && g.isConnected('led9_A', 'GND') && g.isConnected('led10_A', 'GND') && g.isConnected('led11_A', 'GND') &&
        g.isConnected('led12_A', 'GND') && g.isConnected('led13_A', 'GND') && g.isConnected('led14_A', 'GND') && g.isConnected('led15_A', 'GND')

    ) {
        con = true;
        alert("Right Connections")
        document.getElementById("tab_reset").disabled = false;
        
        showOutput();

    } else {
        alert("Wrong Connections")
    }
    console.log("executed")
    if (con == true) {
        var a1 = document.getElementById("a1");
        var a2 = document.getElementById("a2");
        var a3 = document.getElementById("a3");
        var a4 = document.getElementById("a4");
        var a5 = document.getElementById("a5");
        var a6 = document.getElementById("a6");
        var a7 = document.getElementById("a7");
        var a8 = document.getElementById("a8");
        var a9 = document.getElementById("a9");
        var a10 = document.getElementById("a10");
        var a11 = document.getElementById("a11");
        var a12 = document.getElementById("a12");
        var a13 = document.getElementById("a13");
        var a14 = document.getElementById("a14");
        var a15 = document.getElementById("a15");
        var a16 = document.getElementById("a16");
        document.getElementById("tab_check").disabled = false;


        a1.style.display = "inline";
        a2.style.display = "inline";
        a3.style.display = "inline";
        a4.style.display = "inline";
        a5.style.display = "inline";
        a6.style.display = "inline";
        a7.style.display = "inline";
        a8.style.display = "inline";
        a9.style.display = "inline";
        a10.style.display = "inline";
        a11.style.display = "inline";
        a12.style.display = "inline";
        a13.style.display = "inline";
        a14.style.display = "inline";
        a15.style.display = "inline";
        a16.style.display = "inline";

      
    }
}


function changeA() {
    var imagea = document.getElementById('input_a');
    if (imagea.src.match("images/switch_1.png")) {
        imagea.src = "images/switch_0.png";
    } else {
        imagea.src = "images/switch_1.png";
    }
    showOutput();
}

function changeB() {
    var imageb = document.getElementById('input_b');
    if (imageb.src.match("images/switch_1.png")) {
        imageb.src = "images/switch_0.png";
    } else {
        imageb.src = "images/switch_1.png";
    }
    showOutput();
}

function changeC() {
    var imagec = document.getElementById('input_c');
    if (imagec.src.match("images/switch_1.png")) {
        imagec.src = "images/switch_0.png";
    } else {
        imagec.src = "images/switch_1.png";
    }
    showOutput();
}

function changeD() {
    var imaged = document.getElementById('input_d');
    if (imaged.src.match("images/switch_1.png")) {
        imaged.src = "images/switch_0.png";
    } else {
        imaged.src = "images/switch_1.png";
    }
    showOutput();
}

function showOutput() {
    var switch1 = document.getElementById('input_a').src;
    var switch2 = document.getElementById('input_b').src;
    var switch3 = document.getElementById('input_c').src;
    var switch4 = document.getElementById('input_d').src;

    if (con == true) {

        if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led10').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led11').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led12').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led13').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led14').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led15').style.backgroundImage = "url('images/led1.png')";
        }
    } else {
        return;
    }

}