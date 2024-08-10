#include <string>
#include <vector>

using namespace std;

int solution(string b) {
    string s;
    vector<string> v;
    for (auto &it : b) {
        if (it != ' ') {
            s += it;
        } else {
            v.push_back(s);
            s = "";
        }
    }
    
    if (!s.empty()) {
        v.push_back(s);
    }
    
    int n1 = stoi(v[0]);
    int n2 = stoi(v[2]);
    
    if (v[1] == "+") return n1 + n2;
    else if (v[1] == "-") return n1 - n2;
    else if (v[1] == "*") return n1 * n2;
}