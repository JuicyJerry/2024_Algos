#include <string>
#include <vector>

using namespace std;

int solution(vector<int> num_list) {
    for (int i = 0; i < size(num_list); i++) {
        if (num_list[i] < 0) return i;
    }
    return -1;
}