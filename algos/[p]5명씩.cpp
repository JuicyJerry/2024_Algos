#include <string>
#include <vector>

using namespace std;

vector<string> solution(vector<string> names) {
    vector<string> answer;
    for (int i = 0; i < size(names); i+=5) {
        answer.push_back(names[i]);
    } 
    
    if (size(answer) == 0) answer.push_back(names[0]);
    
    return answer;
}

