#include "Assignment.h"
#include<bits/stdc++.h>
using namespace std;

Assignment::Assignment(int id, const std::string &assignment_details)
{
    assignment_id = id;
    details = assignment_details;
    submitted = false;
}
