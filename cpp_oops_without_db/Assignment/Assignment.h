#ifndef ASSIGNMENT_H
#define ASSIGNMENT_H

#include <string>
#include<bits/stdc++.h>
using namespace std;

class Assignment
{
public:
    int assignment_id;
    std::string details;
    bool submitted;

    Assignment(int id, const std::string &assignment_details);
};

#endif

