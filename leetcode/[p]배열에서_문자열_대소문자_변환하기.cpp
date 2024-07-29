#include <string>
#include <vector>

using namespace std;

vector<string> solution(vector<string> strArr) {
    for (int i = 0; i < size(strArr); i++) {
        if (i % 2 == 1) {
            for (auto &it : strArr[i]) {
                if ('a' <= it && 'z' >= it) {
                    it -= 32;
                } 
            }
        } else {
            for (auto &it : strArr[i]) {
                if ('A' <= it && 'Z' >= it) {
                    it += 32;
                } 
            }
        }
    } 
    
    return strArr;
}