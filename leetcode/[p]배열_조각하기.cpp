// fail
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> arr, vector<int> query) {
    for(auto& n : query) {
        if (n % 2 == 0) {
            arr.erase(arr.begin() + n + 1, arr.end());
        }
        else {
            arr.erase(arr.begin(), arr.begin() + n);
        }
    }
    return arr;
}