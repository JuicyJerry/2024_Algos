#include <string>
#include <vector>

using namespace std;

string solution(string myString) {
    for(auto &it : myString) {
        if (it == 'a') it = 'A';
        else if ('A' != it && (it >= 'A' && it <= 'Z')) {
            it += 32;
        }
    }

    return myString;
}