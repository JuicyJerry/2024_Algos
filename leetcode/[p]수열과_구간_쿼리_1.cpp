#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    int i = 0;
    for(auto& it : queries) {
        for (int i = it[0]; i <= it[1]; i++) {
            arr[i]++;
        }
    }
    
    return arr;
}