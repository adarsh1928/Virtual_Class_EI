#ifndef VIRTUAL_CLASS_H
#define VIRTUAL_CLASS_H


#include "../Assignment/Assignment.h"
#include "../Classroom/Classroom.h"

using namespace std;
#include<bits/stdc++.h>

class VirtualClass
{
private:
    std::vector<Classroom> classrooms;
    int assignment_cnt;

public:
    VirtualClass();
    void add_classroom(const string &class_name);
    void list_classrooms();
    void remove_classroom(const string &class_name);
   void add_student(int student_id, const string &class_name, const string &student_name = "");
    void remove_student(int student_id, const string &class_name);
    void list_students(const string &class_name);
   void schedule_assignment(const string &class_name, const string &assignment_details);
    void submit_assignment(int student_id, const string &class_name, int assignment_id);
};

#endif // VIRTUAL_CLASS_H
