document.getElementById("topic0").style.display = "block";

function loadtopic(n)
{
    document.getElementById("topic0").style.display = "none";
    document.getElementById("topic1").style.display = "none";
    document.getElementById("topic2").style.display = "none";
    document.getElementById("topic3").style.display = "none";
    document.getElementById("topic4").style.display = "none";
    document.getElementById("topic5").style.display = "none";
    window.scrollTo(0, 0);
    switch(n)
    {
        case 0:
            document.getElementById("topic0").style.display = "block";
            break;
        case 1:
            document.getElementById("topic1").style.display = "block";
            break;
        case 2:
            document.getElementById("topic2").style.display = "block";
            break;
        case 3:
            document.getElementById("topic3").style.display = "block";
            break;
        case 4:
            document.getElementById("topic4").style.display = "block";
            break;
        case 5:
            document.getElementById("topic5").style.display = "block";
            break;
        default:
            console.log(0);
            break;
    }
}