#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, vector<bool> flag) {
    vector<int> ans;
    for (int i = 0; i < flag.size(); i++) {
        if (flag[i]) {
            ans.insert(ans.end(), arr[i] * 2, arr[i]);
        } else {
            ans.erase(ans.end() - arr[i], ans.end());
        }
    }
    
    return ans;
}