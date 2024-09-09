#include <bits/stdc++.h>

using namespace std;

string solution(string my_string, int m, int c) {
    string ans;
    for(int i = 0; i < size(my_string); i+=m) {
        string str = my_string.substr(i, m);
        ans += str[c - 1];
    }
    
    return ans;
}


// #2
#include <bits/stdc++.h>

using namespace std;

string solution(string my_string, int m, int c) {
    string ans;
    for(int i = c - 1; i < size(my_string); i+=m) {
        ans += my_string[i];
    }
    return ans;
}