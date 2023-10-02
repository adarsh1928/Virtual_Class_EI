#include "../Header/VirtualClass.h"
#include<bits/stdc++.h>

using namespace std;

void processCommands(VirtualClass& vc)
{

    string className;
    string command;
    string assignment_detail;
    int student_id;
    int assignment_id;

    cout << endl;
    cout << "Here you can write commands like add_classroom, add_student, etc..." << endl;
    cout << "For details of all commands, you can type 'help' in the command line." << endl;
    cout << endl;

    while (true)
    {
        cout<<endl;
        cout << "Enter a command: ";
        cin >> command;

        if (command == "add_classroom")
        {
            cin >> className;
            vc.add_classroom(className);
        }
        else if (command == "add_student")
        {
            cin >> student_id;
            cin >> className;
            string student_name;
            cin.ignore(); 
            getline(cin, student_name);

           
            if (student_name.empty())
            {
                vc.add_student(student_id, className);
            }
            else
            {
                vc.add_student(student_id, className, student_name);
            }
        }
        else if (command == "list_students")
        {
            cin >> className;
            vc.list_students(className);
        }
        else if (command == "list_classrooms")
        {
            vc.list_classrooms();
        }
        else if (command == "remove_classroom")
        {
            cin >> className;
            vc.remove_classroom(className);
        }
        else if (command == "remove_student")
        {
            cin >> student_id;
            cin >> className;
            vc.remove_student(student_id, className);
        }
        else if (command == "schedule_assignment")
        {
            cin >> className;
            cin >> assignment_detail;
            vc.schedule_assignment(className, assignment_detail);
        }
        else if (command == "submit_assignment")
        {
            cin >> student_id;
            cin >> className;
            cin >> assignment_id;
            vc.submit_assignment(student_id, className, assignment_id);
        }
        else if (command == "help")
        {
            cout << "Available commands are:" << endl;
            cout << "add_classroom [class_name]" << endl;
            cout << "add_student [student_id] [class_name] [student_name] " << endl;
            cout << "list_students [class_name]" << endl;
            cout << "list_classrooms" << endl;
            cout << "remove_classroom [class_name]" << endl;
            cout << "remove_student [student_id] [class_name]" << endl;
            cout << "schedule_assignment [class_name] [assignment_detail]" << endl;
            cout << "submit_assignment [student_id] [class_name] [assignment_id]" << endl;
        }
        else if (command == "quit")
        {
            break; 
        }
        else
        {
            cout << "Invalid command. For available commands, type 'help'" << endl;
        }
    }

}
