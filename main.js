//NavBar
console.log("Helloooooo")

var idToken = null;

function checkLogin() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    idToken = url.searchParams.get("id_token");
    if (idToken != null) {
        document.getElementById("welcomeMsg").innerHTML = "signed in";
        // auth();
    }
}

// function auth() {
//     AWS.config.update({
//     region: "us-east-1",
//     //  endpoint: 'http://localhost:8000', // If you use dynamoDB installed locally
//     //  accessKeyId: "(ACCESS_KEY_ID)",
//     //  secretAccessKey: "(SECRET_ACCESS_KEY)"

//     });

//     AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//             IdentityPoolId : '(IDENTITY POOL ID)',
//             Logins : {
//             "cognito-idp.(AWS_REGION).amazonaws.com/(POOL_ID)": idToken
//             }
//         });
// }

let apigClient = apigClientFactory.newClient();

checkLogin();


var body = {
    // "post_ids":["117"]
    id: idToken
};


console.log(body)

var additionalParams = {
    //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
    // headers: {
    //     "Access-Control-Allow-Origin":null,
    //     "Accept": '*/*'
    // }
};

// try{
//     apigClient.getUserPostsPost(params= {}, body, additionalParams).then(function(result){
//         console.log(result);
//     }).catch(function(result){
//         console.log("ERR",result);
//     });
//     // console.log(data)
// }
// catch(err){
//     console.log(err)
// }

try{
    apigClient.getUserPostsPost(params= {}, body, additionalParams).then(function(result){
        console.log(result);
    }).catch(function(result){
        console.log("ERR",result);
    });
    // console.log(data)
}
catch(err){
    console.log(err)
}






function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}




