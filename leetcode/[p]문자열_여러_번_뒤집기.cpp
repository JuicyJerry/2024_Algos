#include <string>
#include <vector>

using namespace std;

string solution(string my_string, vector<vector<int>> queries) {
    string answer = "";
    for(auto& it : queries) {
        int left = it[0];
        int right = it[1];
        while(left < right) {
            swap(my_string[left], my_string[right]);
            left++;
            right--;
        }
    }
    answer = my_string;
    return answer;
}