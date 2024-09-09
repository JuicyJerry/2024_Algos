#include <bits/stdc++.h>

using namespace std;

int solution(vector<string> order) {
    int sum = 0;
    for (auto &it : order) {
        if (it.find("americano") != string::npos || it == "anything") {
            sum += 4500;
        } else {
            sum += 5000;
        }
    }
    
    return sum;
}