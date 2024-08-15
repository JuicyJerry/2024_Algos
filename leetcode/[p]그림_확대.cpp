#include <string>
#include <vector>

using namespace std;

vector<string> solution(vector<string> p, int k) {
    vector<string> ans;
    for (int i = 0; i < p.size(); i++) {
        string pic;
        
        for (int j = 0; j < p[i].size(); j++) {
            for (int t = 0; t < k; t++) {
                pic += p[i][j];
            }
        }
        
        for (int i = 0; i < k; i++) {
            ans.push_back(pic);
        }
    }
    return ans;
}