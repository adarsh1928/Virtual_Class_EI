#include "../Header/VirtualClass.h"
#include<bits/stdc++.h>
using namespace std;


VirtualClass::VirtualClass()
{
    assignment_cnt = 0;
}

void VirtualClass::add_classroom(const string &class_name)
{
    for (const auto &classroom : classrooms)
    {
        if (classroom.name == class_name)
        {
             cout << " ==> Classroom '" << class_name << "' already exists." <<  endl;
            return;
        }
    }
    
    classrooms.emplace_back(class_name);
     cout << " ==> Classroom '" << class_name << "' has been created." <<  endl;
}
void VirtualClass::list_classrooms()
{
    cout << " ==> List of Classrooms:" << endl;

    for (const auto &classroom : classrooms)
    {
        cout << classroom.name << endl;
    }
}

void VirtualClass::remove_classroom(const string &class_name)
{
    auto it = classrooms.begin();

    while (it != classrooms.end())
    {
        if (it->name == class_name)
        {
            it = classrooms.erase(it);
            cout << " ==> Classroom '" << class_name << "' has been removed." << endl;
            return;
        }
        else
        {
            ++it;
        }
    }

    if (it == classrooms.end())
    {
        cout << " ==> Classroom '" << class_name << "' not found." << endl;
    }
}