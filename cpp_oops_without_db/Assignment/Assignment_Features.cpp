#include "../Header/VirtualClass.h"
#include<bits/stdc++.h>
using namespace std;


    void VirtualClass:: schedule_assignment(const string &class_name, const string &assignment_details)
    {
        bool found = false; 

        assignment_cnt++;
        int assignment_id = assignment_cnt;
        Assignment assignment(assignment_id, assignment_details);

        for (auto &classroom : classrooms)
        {
            if (classroom.name == class_name)
            {
                classroom.assignments.push_back(assignment);
                cout << " ==> Assignment for '" << class_name << "' has been scheduled." << endl;
                found = true; 

                break; 
            }
        }

        if (!found)
        {
            cout << " ==> Classroom '" << class_name << "' not found." << endl;
        }
    }

    void VirtualClass:: submit_assignment(int student_id, const string &class_name, int assignment_id)
    {
        bool found = false; 

        for (auto &classroom : classrooms)
        {
            if (classroom.name == class_name)
            {
                for (auto &student : classroom.students)
                {
                    if (student.student_id == student_id)
                    {
                        for (auto &assignment : classroom.assignments)
                        {
                            if (assignment.assignment_id == assignment_id)
                            {
                                assignment.submitted = true;
                                cout << " ==> Assignment submitted by Student " << student_id
                                     << " in '" << class_name << "'." << endl;
                                found = true; 

                                break; 
                            }
                        }

                        if (!found) 
                        {
                            cout << " ==> Assignment with ID " << assignment_id << " not found." << endl;
                        }
                        return; 
                    }
                }

                if (!found) 
                {
                    cout << " ==> Student " << student_id << " not found in '" << class_name << "'." << endl;
                }
                return; 
            }
        }

        cout << " ==> Classroom '" << class_name << "' not found." << endl;
    }


