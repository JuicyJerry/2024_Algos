#include <string>
#include <vector>

using namespace std;

int solution(vector<int> num_list) {
    int answer = 0;
    if (size(num_list) >= 11) {
        for (auto& it : num_list) answer += it;
    } else {
        answer = 1; 
        for (auto& it : num_list) answer *= it;
    }
    return answer;
}