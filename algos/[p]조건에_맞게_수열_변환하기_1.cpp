#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    for(auto& it : arr) {
        if (it >= 50 && it % 2 == 0) {
            it /= 2;
        } else if (it < 50 && it % 2 == 1) {
            it *= 2;
        }
    }
    
    return arr;
}