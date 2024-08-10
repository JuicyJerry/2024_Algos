#include <string>
#include <vector>

using namespace std;

int solution(string s, string p) {
    for (auto &it : s ) {
        it = (it == 'A') ? 'B' : 'A';
    }
    
    return s.find(p) != string::npos ? 1 : 0;
}