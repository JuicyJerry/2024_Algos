#include <string>
#include <vector>

using namespace std;

int solution(vector<int> numbers, int n) {
    int answer = 0;
    for(auto& it : numbers) {
        answer += it;
        if (answer > n) return answer;
    }
}