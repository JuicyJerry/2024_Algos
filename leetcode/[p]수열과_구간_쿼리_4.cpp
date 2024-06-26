#include<bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    vector<int> answer = arr;
    for(auto& it : queries) {
        for(int i = it[0]; i <= it[1]; i++) {
            if(i % it[2] == 0) answer[i] += 1;
        }
    }
    return answer;
}

