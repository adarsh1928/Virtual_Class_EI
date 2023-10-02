#ifndef CLASSROOM_H
#define CLASSROOM_H

#include<bits/stdc++.h>
using namespace std;
#include "../Assignment/Assignment.h"
#include "../Student/Student.h"


class Classroom
{
public:
    std::string name;
 
    vector<Student> students;
    vector<Assignment> assignments;

    Classroom( std::string class_name);
};

#endif // CLASSROOM_H
