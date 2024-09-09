#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr, vector<int> delete_list) {
    vector<int> ans;
    for (auto &it : arr) {
        if (find(delete_list.begin(), delete_list.end(), it) == delete_list.end()) {
            ans.push_back(it);
        }
    }

    return ans;
}