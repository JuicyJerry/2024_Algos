#include <string>
#include <vector>

using namespace std;

string solution(string my_string, string alp) {
    for (auto &it : my_string) {
        if (it == alp[0]) {
            it -= 32;
        }
    }
    
    return my_string;
}