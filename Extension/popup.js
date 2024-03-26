console.log('Phisnet Dev V0')

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    console.log(url);
    modelsender(url);
});

function modelsender(url){
    // //Display URL
    // document.getElementById("url").innerHTML = url;

    //to be sent to model
    console.log(url);
    fetch('http://localhost:5000/cextension', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Data to send to the backend
        "checkurl" : url
    })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend
        console.log(data)
        
        let x = data.xx;
        let num = x*100;
        if (0<=x && x<0.50){
            num = 100-num;
        }
        let txtx = num.toString();
        if(x<=1 && x>=0.50){
            var label = "Website is "+txtx +"% safe to use";
            document.getElementById("prediction").innerHTML = label;
            // document.getElementById("button1").style.display="block";
        }
        else if (0<=x && x<0.50){
            var label = "Website is "+txtx +"% unsafe to use"
            document.getElementById("prediction").innerHTML = label ;
            // document.getElementById("button2").style.display="block";
        }

        // document.getElementById("cc").innerHTML= data.xx;
    })
    .catch(error => {
        // Handle any errors
        console.log(error)
        document.getElementById("cc").innerHTML= "Server Error Occured";
        // Link to web && error handling
    });

}


