#include "../Header/VirtualClass.h"
#include<bits/stdc++.h>
using namespace std;


 void VirtualClass::add_student(int student_id, const string &class_name, const string &student_name)
    {
       
        for (auto &classroom : classrooms)
        {
            if (classroom.name == class_name)
            {
                
                for (const auto &student : classroom.students)
                {
                    if (student.student_id == student_id)
                    {
                        cout << " ==> Student " << student_id << " is already enrolled in '" << class_name << "'." << endl;
                        return; 
                    }
                }

                string final_student_name = (student_name.empty()) ? "Student" + to_string(student_id) : student_name;

                classroom.students.emplace_back(student_id, final_student_name);

                cout << " ==> Student " << student_id << " whose name is "<< final_student_name << " has been enrolled in '" << class_name << "'."  << endl;
                return;
            }
        }
        cout << " ==> Classroom '" << class_name << "' not found." << endl;
    }

    void VirtualClass:: remove_student(int student_id, const string &class_name)
    {
        for (auto &classroom : classrooms)
        {
            if (classroom.name == class_name)
            {
                auto studentIt = classroom.students.begin();

                while (studentIt != classroom.students.end())
                {
                    if (studentIt->student_id == student_id)
                    {
                        studentIt = classroom.students.erase(studentIt);
                        cout << " ==> Student " << student_id << " has been removed from '" << class_name << "'." << endl;
                        return;
                    }
                    else
                    {
                        ++studentIt;
                    }
                }

                if (studentIt == classroom.students.end())
                {
                    cout << " ==> Student " << student_id << " not found in '" << class_name << "'." << endl;
                    return;
                }
            }
        }

        cout << " ==> Classroom '" << class_name << "' not found." << endl;
    }

    void VirtualClass:: list_students(const string &class_name)
    {
        bool found=false;

        for (const auto &classroom : classrooms)
        {
            if (classroom.name == class_name)
            {
                cout << " ==> List of Students in '" << class_name << "':" << endl;

                for (const auto &student : classroom.students)
                {
                    cout << student.name << " which has id : " << student.student_id << " " << endl;
                    found=true;
                }
                if(found==false){
                    cout<<"0 student entrolled"<<endl;
                }
                return;
            }
        }
        cout << " ==> Classroom '" << class_name << "' not found." << endl;
    }