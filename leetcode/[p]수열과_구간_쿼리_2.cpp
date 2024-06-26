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

// 성공
#include<bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    vector<int> answer;
    for(auto& q : queries) {
        vector<int> temp;
        for(int i = q[0]; i <= q[1]; i++) {
            if(arr[i] > q[2]) {
                temp.push_back(arr[i]);
            }
        }
        
        if(size(temp) > 0) {
            int t = *min_element(temp.begin(), temp.end());
            answer.push_back(t);
            auto it = find(arr.begin(), arr.end(), t);
            arr.erase(arr.begin(), arr.end());
        } else {
            answer.push_back(-1);
        }
    }
    return answer;
}