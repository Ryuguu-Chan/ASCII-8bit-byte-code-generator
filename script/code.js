function Generate() 
{
    // getting the input value
    ASCII = document.getElementById("init").value;

    if (ASCII.length > 0)
    {
        // result
        fASCII = "";

        for (ASCII_I = 0; ASCII_I <= ASCII.length - 2; ++ASCII_I)
        {
            if (ASCII.charCodeAt(ASCII_I).toString(16).length > 2)
            {
                document.getElementById("msg").innerHTML = "There are some non-ASCII characters on your text";
                fASCII = "";
                return;
            }
            else
            {
                fASCII += ASCII.charCodeAt(ASCII_I).toString(16) + " 00 ";
            }
        }
        fASCII += ASCII.charCodeAt(ASCII.length - 1).toString(16);
        
        document.getElementById("msg").innerHTML = "";
        document.getElementById("R").innerHTML = fASCII;
        document.getElementById("R").style.visibility = "visible";
    }
    else
    {
        document.getElementById("msg").innerHTML = "Write something in the highlighted textbox!";
        document.getElementById("init").style.borderColor = "cyan";
        document.getElementById("init").style.borderWidth = "20px";
    }

}