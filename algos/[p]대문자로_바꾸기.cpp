#include <string>
#include <vector>

using namespace std;

string solution(string myString) {
    for(auto &it : myString) {
        if (it >= 'a' && it <= 'z') {
            it -= 32;
        }
    }
    return myString;
}