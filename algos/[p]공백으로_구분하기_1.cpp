#include <bits/stdc++.h>

using namespace std;

vector<string> solution(string my_string) {
    vector<string> answer;
    int point = 0;
    for(int i = 0; i < my_string.size(); i++) {
        if (char(my_string[i]) == 32) {
            cout << i << "\n";
            answer.push_back(my_string.substr(point, i - point));
            point = i + 1;
        }
        
    }
    
    if (answer.size() == 0) answer.push_back(my_string);
    else answer.push_back(my_string.substr(point, my_string.size() - point));
    return answer;
}