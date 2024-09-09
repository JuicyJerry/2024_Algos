#include <string>
#include <vector>

using namespace std;

string solution(vector<string> arr) {
    string answer = "";
    for (auto t : arr) answer += t;
    return answer;
}

#include <bits/stdc++.h>
using namespace std;

string solution(vector<string> arr) {
    string answer = "";
    return accumulate(arr.begin(), arr.end(), answer);
}