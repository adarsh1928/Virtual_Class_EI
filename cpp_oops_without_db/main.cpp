
/*

    Implemented By  : ADARSH PATEL

    College Roll No : 20BIT019

    Purpose         : To implement the functionality of virtual classroom which includes section of students ,
                      Classrooms and Assignment through which understanding the logic behind the real time
                      application's functionalities

    Given By        : education initiatives


*/

#include "Header/VirtualClass.h"
#include "Commands/commands.cpp"
#include <bits/stdc++.h>
using namespace std;

int main()
{

    VirtualClass vc; 

    processCommands(vc);

    return 0;
}
