#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == 'm') s.replace(i, 1, "rn");
    }
    
    return s;
}