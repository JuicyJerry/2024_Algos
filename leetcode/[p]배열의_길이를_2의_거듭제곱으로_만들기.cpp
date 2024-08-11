#include <string>
#include <vector>

using namespace std;

bool isPowerOfTwo(int n) {
    if (n <= 0) return false;
    return (n & (n - 1)) == 0;
}

vector<int> solution(vector<int> arr) {
    while (true) {
        if (!isPowerOfTwo(arr.size())) {
            arr.push_back(0);
        } else {
            return arr;
        }       
    }
}

