#include <string>
#include <vector>

using namespace std;

int solution(string my_string, string is_suffix) {
    int answer = 0;
    auto it = my_string.find(is_suffix);
    it ? it = 1 : it = 0;
    return answer;
}