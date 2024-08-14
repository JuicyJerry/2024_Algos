#include <string>
#include <vector>

using namespace std;

string solution(vector<string> s, string ex) {
    string ans = "";
    for(auto &it : s) {
        if (it.find(ex) != string::npos) continue;
        ans += it;
    }
    return ans;
}