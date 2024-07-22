#include <bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> answer;
    int start = -1, end = -1;
    
    for (int i = 0; i < size(arr); i++) {
        if (arr[i] == 2) {
            if (start == -1) start = i;
            else if (start != -1) end = i;
        }
    }
    
    if (start == -1) answer.push_back(-1);
    else if (start != -1 && end == -1) answer.push_back(arr[start]);
    else answer.insert(answer.end(), arr.begin() + start, arr.begin() + end + 1);

    return answer;
}