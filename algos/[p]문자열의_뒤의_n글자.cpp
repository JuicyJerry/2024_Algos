#include<bits/stdc++.h>
using namespace std;

string solution(string my_string, int n) {
    string answer = "";
    int len = my_string.size() - 1;
    for (int i = len; i > len - n; i--) answer.insert(0, 1, my_string[i]);
    return answer;
}


#include<bits/stdc++.h>
using namespace std;

string solution(string my_string, int n) {
    string answer = my_string.substr(my_string.size() - n);
    return answer;
}