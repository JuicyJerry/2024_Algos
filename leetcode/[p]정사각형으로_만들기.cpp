#include <string>
#include <vector>

using namespace std;

vector<vector<int>> solution(vector<vector<int>> arr) {
    int rowSize = arr.size();
    int colSize = arr[0].size();

    if (rowSize > colSize) {
        for (auto &it : arr) {
            while (it.size() < rowSize) {
                it.push_back(0);
            }
        }        
    } else {
        vector<int> v;
        for(int i = 0; i < colSize; i++) v.push_back(0);
        while (rowSize < colSize) {
            arr.push_back(v);
            rowSize++;
        } 
    }

    return arr;
}