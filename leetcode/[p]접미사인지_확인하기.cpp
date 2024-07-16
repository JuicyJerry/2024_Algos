#include <string>
#include <vector>

using namespace std;

int solution(string my_string, string is_suffix) {
    int answer = 0;
    auto it = my_string.find(is_suffix);
    it ? it = 1 : it = 0;
    return answer;
}

#include <bits/stdc++.h>

using namespace std;

int solution(string my_string, string is_suffix) {
    vector<string> l;
    for(int i = 0; i < size(my_string); i++) {
        if (is_suffix == my_string.substr(i)) return 1;
    }
    return 0;
}