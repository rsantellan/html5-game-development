var KEY = {
    UP: 38,
    DOWN: 40,
    W: 87,
    S: 83
}

function listeningPaddles()
{
    $(document).keydown(function(e){
        switch(e.which){
            case KEY.UP:
            // get the current paddle B's top value in Int type
            var top = parseInt($("#paddleB").css("top"));
            // move the paddle B up 5 pixels
            $("#paddleB").css("top",top-5);
            break;
            case KEY.DOWN:
            // get the current paddle B's top value in Int type
            var top = parseInt($("#paddleB").css("top"));
            // move the paddle B down 5 pixels
            $("#paddleB").css("top",top+5);
            break;
            case KEY.W:
            // get the current paddle A's top value in Int type
            var top = parseInt($("#paddleA").css("top"));
            // move the paddle A up 5 pixels
            $("#paddleA").css("top",top-5);
            break;
            case KEY.S:
            // get the current paddle A's top value in Int type
            var top = parseInt($("#paddleA").css("top"));
            // move the paddle A down 5 pixels
            $("#paddleA").css("top",top+5);
            break;
        }
    });
}

function startPaddles()
{
    $("#paddleB").css("top", "20px");
    $("#paddleA").css("top", "60px");
}

$(function(){
    //startPaddles();
    listeningPaddles();
});
