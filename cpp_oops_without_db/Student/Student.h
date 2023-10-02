#ifndef STUDENT_H
#define STUDENT_H

#include <string>
#include<bits/stdc++.h>
using namespace std;

class Student
{
public:
    int student_id;
    std::string name;

    Student(int id, const std::string &student_name);
};

#endif
