// #1 : fail
#include <bits/stdc++.h>

using namespace std;

int solution(string s, string t) {
    int ans = 0;
    int diff = s.size() - t.size() - 1;
    for (int i = 0; i < diff; i++) {
        if (t == s.substr(i, diff + 1)) ans++;
    }
    return ans;
}


// #2
#include <bits/stdc++.h>

using namespace std;

int solution(string my_string, string target) {
    if (my_string.find(target) != string::npos) return 1;
    else return 0;
}