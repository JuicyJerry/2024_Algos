#include <bits/stdc++.h>
using namespace std;

vector<int> solution(int n, vector<int> slicer, vector<int> num_list) {
    vector<int> ans;
    switch(n) {
        case 1:
            for (int i = 0; i <= slicer[1]; i++) {
                ans.push_back(num_list[i]);
            }
            break;
        case 2:
            for (int i = slicer[0]; i < size(num_list); i++) {
                ans.push_back(num_list[i]);
            }
            break;
        case 3:
            for (int i = slicer[0]; i <= slicer[1]; i++) {
                ans.push_back(num_list[i]);
            }
            break;
        case 4:
            for (int i = slicer[0]; i <= slicer[1]; i+=slicer[2]) {
                ans.push_back(num_list[i]);
            }
            break;
    }
    
    return ans;
} 