#include <string>
#include <vector>

using namespace std;

int solution(vector<int> arr, int idx) {
    for(int i = idx; i < size(arr); i++) {
        if (arr[i] == 1) return i;
    }
    return -1;
}