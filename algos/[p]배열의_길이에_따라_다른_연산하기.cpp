#include <bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr, int n) {
    vector<int> ans;
    int len = arr.size();
    if (len % 2 == 0) {
        for (int i = 1; i < arr.size(); i += 2) {
            arr[i] += n;
        }
    } else {
        for (int i = 0; i < arr.size(); i += 2) {
            arr[i] += n;
        }
    }
    
    return arr;
}