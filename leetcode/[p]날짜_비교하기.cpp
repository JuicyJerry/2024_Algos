#include <string>
#include <vector>

using namespace std;

int solution(vector<int> d1, vector<int> d2) {
    for (int i = 0; i < d1.size(); i++) {
        if (d1[i] < d2[i]) return 1;
        else if (d1[i] > d2[i]) return 0;
    }
    
    return 0;
}