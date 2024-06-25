// 실패
#include<bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    vector<int> answer;
    for(auto& q : queries) {
        bool found = false;
        for(int i = q[0]; i <= q[1]; i++) {
            if(arr[i] > q[2]) {
                answer.push_back(arr[i]);
                cout << i << " " << arr[i] << " " << "\n";
                arr.erase(arr.begin() + i);
                found = true;
                break;
            }
        }
        if(!found) {
            answer.push_back(-1);
        }
    }
    return answer;
}