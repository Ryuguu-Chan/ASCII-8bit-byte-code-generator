# ASCII-8bit-byte-code-generator
This is a web-tool that will make PE modding life easier

Most of PC/IBM programs are in the .exe format which is technically known as a Executable file (or a Portable Executable depending who are you talking to)

Here's how a executable file is compiled from source code
![alt text](https://github.com/Ryuguu-Chan/ASCII-8bit-byte-code-generator/blob/master/exe%20compiling%20generic.PNG)
*The red lines are due to my computer language being set to French(CH) and not English(US/UK)*

a EXE file's machine code isn't just a bunch of random garbage number written on it because the Operating system couldn't tell what kind of file it is if it was the case.

Among various kind of data stored (Targetted Machine, The base of code, Dependencies, ....) raw ASCII text could potentially be stored (depending on how the program was made in the first place)

They are generally found in the ASCII resource area (generally found in the last bytes but again. Depending on how the progam was developped, they could be found somewhere else and even be ciphered).

They are generally stored like this
