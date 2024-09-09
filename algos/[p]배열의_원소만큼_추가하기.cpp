// #1
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> ans;
    for(auto &it : arr) {
        for (int i = 0; i < it; i++) {
            ans.push_back(it);
        }
    }
    
    return ans;
}


// #2
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> ans;
    for(auto &it : arr) {
        ans.insert(ans.end(), it, it);
    }
    
    return ans;
}