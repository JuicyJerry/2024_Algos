#include <bits/stdc++.h>
using namespace std;

vector<string> split(string &input, string delimeter) {
    auto start = 0;
    auto end = input.find(delimeter);
    vector<string> result;

    while (end != string::npos) {
        result.push_back(input.substr(start, end - start));
        start = end + delimeter.size();
        end = input.find(delimeter, start);
    }   

    result.push_back(input.substr(start));
    return result;
}

int main() {
    string s = "부자가 될 것이다!";
    vector<string> result = split(s, " ");
    for (auto t : result) cout << t << "\n";

    return 0;
}